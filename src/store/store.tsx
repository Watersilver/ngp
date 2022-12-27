import { enableStaticRendering } from "mobx-react-lite"
import { makeAutoObservable } from "mobx"

const isNode = !!process?.versions?.node;

enableStaticRendering(isNode);

class Store {
  private _lang: string = "en";
  get lang() { return this._lang; }
  set lang(lang: string) { this._lang = lang; }

  private _colorMode: "light" | "dark" = "light"
  get colorMode() {
    return this._colorMode;
  }
  set colorMode(c: typeof this._colorMode) {
    this._colorMode = c;
    this.setItem("colorMode", c);
  }

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

  setItem(key: string, value: string) {
    if (isNode) return;

    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    if (isNode) return null;

    return localStorage.getItem(key);
  }

  private loaded = false;
  loadFromLocal() {
    if (isNode || this.loaded) return;
    this.loaded = true;

    const cm = this.getItem("colorMode");
    if (cm === "light" || cm === "dark") this._colorMode = cm;
  }
}

const store = new Store()
export default store;