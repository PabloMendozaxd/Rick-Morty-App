import { LitElement } from 'lit-element';

export class GetData extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      method: { type: String },
    };
  }
  constructor() {
    super();
  }
  connectedCallback() {
    this.getData();
  }
  _sendData(data) {
    this.dispatchEvent(
      new CustomEvent('ApiData', {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }
  getData() {
    fetch(this.url, { method: this.method })
      .then(res => {
        if (res.ok) {
          return res.json();
        }else{
            return Promise.reject(res);
        }
      })
      .then(data => {
        console.log(data);
        this._sendData(data);
      })
      .catch(error => {
        console.warn(`Something went wrong ${error}`);
      });
  }
}
customElements.define('get-data', GetData);
