import { CometChat } from '@cometchat-pro/chat';
import { Avatar } from '../components/avatar/';
import { CometChatContactList } from '../components/contact-list';
import { ContactItem } from '../components/contact-item/contact-item';

customElements.define('cometchat-contacts', CometChatContactList);
customElements.define('cometchat-avatar', Avatar);
customElements.define('cometchat-contact-item', ContactItem);

export { CometChat };