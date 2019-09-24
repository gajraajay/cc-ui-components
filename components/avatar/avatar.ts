import * as css from "../avatar/avatar.css"


export class Avatar extends HTMLElement {
  img: HTMLImageElement = document.createElement('img');
  static get observedAttributes() {
    return ['width', 'src', 'round', 'square'];
  }
  constructor() {
    super();
  }

  connectedCallback() {

  }
  disconnectedCallback() {

  }

  drawRound(uri) {
    this.img.classList.add(css['cc-avatar-round']);
    return this.img;
  }
  drawSquare(uri) {
    this.img.classList.add(css["cc-avatar-square"]);
    return this.img;
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName == "round")
      this.drawRound(newVal);
    if (attrName == "square")
      this.drawSquare(newVal);
    if (attrName == "src")
      this.img.setAttribute("src", newVal);
    if (attrName == "width")
      if (this.hasAttribute('width')) {
        this.img.style.width = newVal + "px";
      }
    if (this.hasAttribute('border')) {
      this.img.style.border = this.getAttribute('border');
    }
    this.appendChild(this.img);
  }
}

// (()=>{
//   customElements.define('cometchat-avatar', Avatar)
// })();