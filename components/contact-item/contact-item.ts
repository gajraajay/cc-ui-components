import * as css from "./style.css"


export class ContactItem extends HTMLElement {

    img: HTMLImageElement = document.createElement('img');

    static get observedAttributes() {
        return ['contact', 'name', 'uid', 'email', 'avatar', 'status', 'role'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        console.log("This is me");
    }
    disconnectedCallback() {

    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        console.log("this is root node", this.getElementsByTagName("div"))
        let div
        if (this.getElementsByTagName("div").length < 1) {
            div = document.createElement('div');
            this.appendChild(div);
        } else {
            div = this.getElementsByTagName("div")[0];
        }
        console.log("This is you")
        if (attrName == "name") {
            let name = document.createElement('p');
            name.innerText = newVal;
            div.appendChild(name);
        }
        if (attrName == "uid") {
            console.log(newVal);
        }
        if (attrName == "email") {
            if (newVal!="undefined") {                
                let email = document.createElement('p');
                email.innerText = newVal;
                div.appendChild(email)
            }
        }
        if (attrName == "avatar") {
            let avatarImage = document.createElement('cometchat-avatar');
            avatarImage.setAttribute('src', newVal);
            avatarImage.setAttribute('round', "");
            avatarImage.setAttribute('width', "30");
            div.appendChild(avatarImage);
        }
        if (attrName == "status") {
            console.log(newVal);
        }
        if (attrName == "role") {
            console.log(newVal);
        }
        if (attrName == "contact") {

        }
    }
}

