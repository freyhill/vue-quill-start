
import Quill from 'quill';
const quillDom = document.createElement('div');
quillDom.setAttribute('id', 'ql-editor');
document.body.appendChild(quillDom);
export const quill = new Quill(quillDom);
