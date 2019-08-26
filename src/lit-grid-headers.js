import { LitElement, html, css, unsafeCSS } from 'lit-element';
class LitGridHeaders extends LitElement {

    constructor() {
        super();
        this.columns = [];
        this.columnSize = 33;
    }

    static get properties() {
        return {
            //declare properties here
            columns: { type: Array }
        };
    }

    static get styles() {
        return [
            css`
                .container {
                    display: flex;
                    width: calc(100%-8px);
                    min-height: 36px;
                    padding-left: 8px;
                    padding-right: 8px;
                    justify-content: space-evenly;
                }
                .column {
                    display: flex;
                    flex: 1;
                    align-items: center;
                    padding: 1em;
                    border-style: solid;
                    border-width: 1px;
                    border-color: var(--grid-border-color, #F5F5F5);
                    background-color: var(--grid-background-color, #FAFAFA);
                }
                .column:hover {
                    background-color: var(--grid-col-hover-color, #FEFEFE);
                }
                .column[selected] {
                    background-color: var(--grid-col-hover-color, #FFFDE7);
                }
            `
        ];
    }

    render() {
        return html`
            <div class="container">
                ${ this.columns.map((c) => html`
                    <div class="column" ?selected="${c.isSelected}" @click="${(e) => this.handleSelection(c)}">${c.columnName}</div>
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

    handleSelection(c){
        const index = this.columns.findIndex((p) => p.property === c.property);
        this.columns.forEach((col, ind )=> {
            if(index !== ind){
                this.columns[ind].isSelected = false;
            } else {
                if(col.isSelected){
                    this.columns[ind].isSelected = false;
                } else {
                    this.columns[ind].isSelected = true;
                }
            }
        });
        this.requestUpdate();

    }

}

window.customElements.define('lit-grid-headers', LitGridHeaders);