import { LitElement, html, css } from 'lit-element';
import "./lit-grid-headers.js";
import "./lit-grid-content.js";
import "./lit-grid-footer.js";

class LitGrid extends LitElement {

    constructor() {
        super();
        this.data = [];
        this.columns = [];
    }

    static get properties() {
        return {
            //declare properties here
            data: { type: Array},
            columns: { type: Array }
        };
    }

    static get styles() {
        return [
            css`
                .container {
                    display: flex;
                    flex-direction: column;
                    width: var(--grid-width, calc(100%-16px));
                    height: var(--grid-height, auto);
                    min-height: 4em;
                    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
                    padding-left: var(--grid-padding-left, 1em);
                    padding-right: var(--grid-padding-right, 1em);
                }
            `
        ];
    }

    render() {
        return html`
            <div class="container">
                <lit-grid-headers .columns="${this.columns}"></lit-grid-headers>
                <lit-grid-content .data=${this.data}></lit-grid-content>
                <lit-grid-footer></lit-grid-footer>
            </div>
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

window.customElements.define('lit-grid', LitGrid);