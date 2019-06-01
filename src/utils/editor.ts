
import Quill from 'quill';
const quill = document.createElement('div');
quill.setAttribute('id', 'ql-editor');
document.body.appendChild(quill);
export const editor = new Quill(quill);
