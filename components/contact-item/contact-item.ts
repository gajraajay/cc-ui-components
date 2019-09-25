import * as css from "./style.css"

console.log("this is css classes", css);
export class ContactItem extends HTMLElement {

    img: HTMLImageElement = document.createElement('img');

    static get observedAttributes() {
        return ['contact', 'name', 'uid', 'email', 'avatar', 'status', 'role'];
    }

    constructor() {
        super();
        this.addEventListener('click', e => {
            console.log("clicked me ",this.getAttribute('uid'))
        });
    }

    connectedCallback() {
        console.log("This is me");
    }
    disconnectedCallback() {

    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        let div: HTMLElement;

        if (this.getElementsByTagName("div").length < 1) {
            div = document.createElement('div');
            div.classList.add(css['contact-item'])
            this.appendChild(div);
        } else {
            div = this.getElementsByTagName("div")[0];
            div.classList.add(css['contact-item']);
        }

        if (attrName == "name" || attrName == "email" || attrName == "avatar" || attrName=="uid") {
            let divInner: HTMLElement | any;
            if (this.childNodes[0].childNodes.length == 0) {
                console.log("if")
                divInner = document.createElement('div');
                divInner.classList.add(css['contact-info'])
                div.appendChild(divInner);
            } else {
                divInner = div.getElementsByTagName('div')[0]               
            }
            if (attrName == "name") {

                let name = document.createElement('p');
                name.innerText = newVal;
                name.classList.add(css['contact-name'])
                divInner.appendChild(name);
            }

            if (attrName == "email") {
                if (newVal != "undefined") {
                    let email = document.createElement('p');
                    email.innerText = newVal;
                    email.classList.add(css['contact-email']);
                    divInner.appendChild(email);
                } else {
                    let email = document.createElement('p');
                    email.innerText = "a@i.com";
                    email.classList.add(css['contact-email'],css['small']);
                    divInner.appendChild(email);
                }

            }
            if (attrName == "avatar") {
                console.log("This is innderdic",divInner);
                let avatarImage = document.createElement('cometchat-avatar');
                avatarImage.setAttribute('src', newVal);
                avatarImage.setAttribute('round', "");
                avatarImage.setAttribute('width', "46");
                div.insertBefore(avatarImage, divInner);
                
            }
        }


        if (attrName == "uid") {
            div.setAttribute("id",newVal);
        }


        if (attrName == "status") {

        }
        if (attrName == "role") {

        }
        if (attrName == "contact") {

        }
    }
}

