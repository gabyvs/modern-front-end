setTimeout(() => {
    const theLink = document.querySelector('link').import;
    document.body.appendChild(document.importNode(theLink.querySelector('h1'), true));
}, 1000);