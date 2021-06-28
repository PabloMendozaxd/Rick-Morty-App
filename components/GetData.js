import { LitElement } from "lit-element";

export class GetData extends LitElement{
    constructor(){
        super();
        console.log('Hola desde GetData');
    }
}
customElements.define('get-data',GetData);