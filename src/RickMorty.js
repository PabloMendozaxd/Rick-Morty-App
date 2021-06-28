import { LitElement, html, css } from 'lit-element';
import '../components/GetData'

export class RickMorty extends LitElement {
  static get properties() {
    return {
    };
  }

  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this.addEventListener('ApiData',e=>console.log(e));
  }

  render() {
    return html`
    <get-data url="https://rickandmortyapi.com/api/character" method="GET"></get-data>
    `;
  }


}
