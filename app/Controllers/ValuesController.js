import ValuesService from "../Services/ValuesService.js";
import store from "../store.js";

//Private
function _draw() {
  let values = store.State.values;
  console.log(values);
}

//Public
export default class ValuesController {
  constructor() {
    store.subscribe("values", _draw);
  }

  alert() {
    ValuesService.alert();
  }
  toasty() {
    ValuesService.toasty();
  }
  confirm() {
    ValuesService.confirm();
  }
  input() {
    ValuesService.input();
  }
  quote() {
    ValuesService.quote();
  }
}
