import { LitElement, html, css } from 'lit-element';
class LitGridContent extends LitElement {

    constructor() {
        super();
    }

    static get properties() {
        return {
            //declare properties here
            data: { type: Array}
        };
    }

    static get styles() {
        return [
            css`
                .container {
                    display: flex;
                    flex-direction: column;
                    width: calc(100%-8px);
                    min-height: 36px;
                    padding-left: 8px;
                    padding-right: 8px;
                    justify-content: space-evenly;
                }
                .row {
                    display: flex;
                    width: 100%;
                    height: auto;
                }
                .column {
                    display: flex;
                    flex: 1;
                    align-items: center;
                    padding: 1em;
                    border-style: solid;
                    border-width: 1px;
                    border-color: var(--grid-border-color, #F5F5F5);
                    background-color: var(--grid-background-color, #FEFEFE);
                }
            `
        ];
    }

    render() {
        return html`
            <div class="container">
                ${ this.data.map((d) => html`
                    <div class="row">
                        ${  Object.keys(d).map((key) => html`
                            <div class="column">${d[key]}</div>
                        `)
                        }
                    </div>
                `)}
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

window.customElements.define('lit-grid-content', LitGridContent);