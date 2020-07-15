import store from "../store.js";
import NS from "./NotificationService.js";
const _api = axios.create({
  baseURL: "https://type.fit/api/quotes",
  timeout: 3000,
});
class ValuesService {
  quote() {
    _api
      .get("")
      .then((res) => {
        debugger;
        let quote = res.data[Math.floor(Math.random() * res.data.length)];

        NS.basic(quote.author, quote.text);
      })
      .catch((err) => console.error(err));
  }
  toasty() {
    NS.toast();
  }
  alert() {
    NS.basic("Hello", " this is new text");
  }
  confirm() {
    NS.Confirm()
      .then((res) => {
        if (res) {
          console.log("Succesfully Deleted!");
        }
      })
      .catch((err) => console.error(err));
  }
  async input() {
    NS.inputAction();
  }
}

const service = new ValuesService();
export default service;
