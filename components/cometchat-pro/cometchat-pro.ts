import { isIntialized, UserManager } from "../../src/cometchat-manager"
import * as css from "./style.css";
export class CometChatPro extends HTMLElement {

    constructor() {
        super();
        console.log("This is CometChatPro");
    }
    attributeChangedCallback(attrName, oldVal, newVal) {        
        console.log(attrName,oldVal,newVal);
    }
}



