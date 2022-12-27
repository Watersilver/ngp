import { enableStaticRendering } from "mobx-react-lite"
import { makeAutoObservable } from "mobx"

const isNode = !!process?.versions?.node;

enableStaticRendering(isNode);

class Store {
  private _lang: string = "en";
  get lang() { return this._lang; }
  set lang(lang: string) { this._lang = lang; }

  constructor() {
    makeAutoObservable(this);
  }

  private initialized = false;
  initialize(init?: {
    lang?: string;
  }) {
    if (isNode || !this.initialized) {
      this.initialized = true;

      if (init) {
        if (init.lang !== undefined) {
          this.lang = init.lang;
        }
      }
    }
  }
}

const store = new Store()
export default store;