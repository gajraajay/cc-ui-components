import { isIntialized, UserManager } from "../../src/cometchat-manager"
import * as css from "./style.css";
export class CometChatContactList extends HTMLElement {
    um: UserManager;
    static get observedAttributes() {
        return ['docked', 'test', "onClickeItem"];
    }
    set docked(val) {
        if (val)
            this.setAttribute('docked', '');
        else this.removeAttribute('docked');
    }
    get docked() {
        return this.hasAttribute('docked')
    }
    constructor(...args) {
        super();
        
        if (isIntialized()) {
            this.um = new UserManager({ limit: 30 })
            this.um.getUsersList().then(users => {
                users.map(user => {
                    let cometchat_contact_item = document.createElement("cometchat-contact-item")
                    Object.keys(user).map(key => {
                        cometchat_contact_item.setAttribute(key, user[key]);
                    });
                    this.appendChild(cometchat_contact_item);
                })

            }, error => {
                console.log({ error });
            })
        } else {
            console.log("Yes I am called1241");
        }
        
    }

    connectedCallback() {        
        this.setAttribute("class",css['cometchat-contacts']);
    }
    set test(val) {
        if (val)
            this.setAttribute('test', '');
        else this.removeAttribute('test');
    }
    get test() {
        return this.getAttribute('test');
    }
    set onClickItem(callback) {
        if (callback)
            this.setAttribute("onClickItem", callback);
        else this.removeAttribute("onClickItem");
    }

    get onClickIten() {
        return this.getAttribute("onClickItem");
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if(name=="onClickItem"){
            let childNodesList:any= this.childNodes;
            for(let i=0;i<childNodesList.length;i++){
                childNodesList[i].setAttribute(this.onClickItem);
                
            }
        }
        console.log({ name, oldValue, newValue })
    }

}



