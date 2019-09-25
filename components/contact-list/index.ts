import { isIntialized,UserManager } from "../../src/cometchat-manager"


export class CometChatContactList extends HTMLElement {
    um:UserManager;
    static get observedAttributes() {
        return ['docked', 'test'];
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
            this.um=new UserManager({limit:30})
            this.um.getUsersList().then(users=>{
                users.map(user=>{
                    let cometchat_contact_item=document.createElement("cometchat-contact-item")
                    Object.keys(user).map(key=>{
                        cometchat_contact_item.setAttribute(key,user[key]);                         
                    });                    
                    this.appendChild(cometchat_contact_item); 
                })
                
            },error=>{
                console.log({error});
            })
        } else {
            console.log("Yes I am called1241");
        }    
    }

    connectedCallback() {

    }
    set test(val) {
        if (val)
            this.setAttribute('test', '');
        else this.removeAttribute('test');
    }
    get test() {
        return this.getAttribute('test');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log({ name, oldValue, newValue })
    }

}



