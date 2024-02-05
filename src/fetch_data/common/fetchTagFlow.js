const axios = require("axios");
const MessageBroker = require("../../helper/message-broker");
const { DATA_TYPE } = require("../../helper/const-variable");
const { API_URL } = require("../../helper/url-store");

class FetchTagFlow {
  static execute() {
    const apiUrl = API_URL.tag;
    axios
      .get(apiUrl)
      .then((response) => {
        MessageBroker.sendMessage(
          response.data.data,
          DATA_TYPE.sub_category
        );
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error.message);
      });
  }
}
module.exports = FetchTagFlow;
