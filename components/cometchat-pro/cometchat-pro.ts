import { isIntialized, UserManager } from "../../src/cometchat-manager"
import * as css from "./style.css";
export class CometChatPro extends HTMLElement {

    constructor() {
        super();
        console.log("This is CometChatPro");
    }
    static get observedAttributes() {
        return ['docked', 'new-window', 'integrated'];
    }

    connectedCallback() {

    }

    attributeChangedCallback(attrName, oldVal, newVal) {        
        
        if (attrName == "docked") {

            let cometchatBody = document.createElement("div");
            cometchatBody.classList.add(css['cometchat-pro']);
            
            let cometchatHeader = document.createElement("div");
            cometchatHeader.classList.add(css['cometchat-header']);
            

            let headerTitle=document.createElement("p");
            headerTitle.classList.add(css['cometchat-header-title']);
            headerTitle.innerText = "Your header";

            cometchatHeader.appendChild(headerTitle);
            cometchatBody.appendChild(cometchatHeader);
            
            this.classList.add(css['docked']);
            cometchatBody.appendChild(document.createElement("cometchat-contacts"));
            this.appendChild(cometchatBody);

            if(newVal=="new-window"){
                console.log("yes new window")
            }
            
        }
        if (attrName == "integrated") {
            
            let cometchatBody = document.createElement("div");
            cometchatBody.classList.add(css['cometchat-pro']);
            
            let cometchatHeader = document.createElement("div");
            cometchatHeader.classList.add(css['cometchat-header']);
            cometchatHeader.innerText = "your header";
            cometchatBody.appendChild(cometchatHeader);
            
            this.classList.add(css['integrated']);
            cometchatBody.appendChild(document.createElement("cometchat-contacts"));
            this.appendChild(cometchatBody)

        }


    }
}



