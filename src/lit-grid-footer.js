import { LitElement, html, css } from 'lit-element';
class LitGridFooter extends LitElement {

    constructor() {
        super();
    }

    static get properties() {
        return {
            //declare properties here
        };
    }

    static get styles() {
        return [
            css``
        ];
    }

    render() {
        return html`
            Footer
        `;
    }

    shouldUpdate(changedProps) {
        return true;
    }

    firstUpdated(){
        //Put Code that will run one time in the component lifecycle
    }

    updated(changedProps){
        //Check on properties changed
    }

}

window.customElements.define('lit-grid-footer', LitGridFooter);