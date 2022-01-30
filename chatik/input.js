let array = [];
function Printer() {
    let ret = document.getElementById('txt');
    let elem = document.getElementById('perform');
    let ret2 = document.getElementById("perform");
    let create = document.createElement("div");
    let node = document.createTextNode(ret.value);
    create.className = "message";
    create.appendChild(node);
    elem.appendChild(create);
    ret.value = "";
    ret2.scrollTop = 9999;
    array.push(create.outerHTML);
    localStorage.setItem('all', JSON.stringify(array));
}