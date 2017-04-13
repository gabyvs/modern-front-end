// You can execute this whenever you want to have it as part of your dom
const content = document.querySelector('template').content;
document.body.appendChild(document.importNode(content, true));