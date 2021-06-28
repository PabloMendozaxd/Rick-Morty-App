import { LitElement, html, css } from 'lit-element';
import '../components/GetData'

export class RickMorty extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      metho:{type:String}
    };
  }

  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
    <get-data></get-data>
    `;
  }

  
}
