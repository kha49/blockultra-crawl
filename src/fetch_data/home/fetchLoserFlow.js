const axios = require("axios");
const MessageBroker = require("../../helper/message-broker");
const { DATA_TYPE } = require("../../helper/const-variable");
const { API_URL } = require("../../helper/url-store");

class FetchLoserFlow {
  static execute() {
    const apiUrl = API_URL.coin + "?specialFilter=topLosersFor24h";
    axios
      .get(apiUrl)
      .then((response) => {
        MessageBroker.sendMessage(response.data.data, DATA_TYPE.loser);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error.message);
      });
  }
}
module.exports = FetchLoserFlow;
