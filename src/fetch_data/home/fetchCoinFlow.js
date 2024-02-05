const axios = require("axios");
const MessageBroker = require("../../helper/message-broker");
const {
  DATA_TYPE,
  splitIntoBatches,
  getChart,
} = require("../../helper/const-variable");
const { API_URL } = require("../../helper/url-store");

class FetchCoinFlow {
  static async execute() {
    const apiUrl = API_URL.coin;
    await axios
      .get(apiUrl)
      .then(async (response) => {
        const coins = response.data.data.slice(0, 500);
        const coinIds = coins
          .map((x) => x.key)
          .filter((value, index, self) => self.indexOf(value) === index);
        const items = [];
        if (coinIds.length > 0) {
          const batchSize = 1000;
          const batches = splitIntoBatches(coinIds, batchSize);
          for (const batch of batches) {
            const dataWithChart = await getChart(coins, batch);
            if (dataWithChart) {
              items.push(...dataWithChart);
            }
            await this.delay(insertDelay);
          }
        }

        MessageBroker.sendMessage(items, DATA_TYPE.coin);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error.message);
      });
  }
}
module.exports = FetchCoinFlow;
