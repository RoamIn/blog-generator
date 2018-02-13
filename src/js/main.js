const canvas = document.getElementById('J_Canvas');
const ctx = canvas.getContext('2d');

function getWindowWidth() {
    return 'innerWidth' in window ? window.innerWidth : document.documentElement.offsetWidth;
}

function getWindowHeight() {
    return 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
}

function updateCanvasSize() {
    canvas.width = getWindowWidth();
    canvas.height = getWindowHeight();
}

function addHandler(element, method, normal) {
    element.addEventListener(normal, method, false); // IE9, Chrome, Safari, Oper
}

function addResizeHandler() {
    addHandler(window, resizeHandler, 'resize');
}

function resizeHandler() {
    setTimeout(function () {
        updateCanvasSize();
    }, 350);
}

addResizeHandler();
updateCanvasSize();


const $form = document.getElementById('J_Form');

$form.addEventListener('submit', e => {
    e.preventDefault();

    const wd = $form.elements['wd'].value;
    const url = 'https://www.baidu.com/s?ie=UTF-8&wd=' + wd;

    window.location = encodeURI(url);

    // $form.submit();
});

console.log(chrome.bookmarks.getTree((arr) => {
    console.log(arr);
}));

if (location.search !== "?foo") {
    location.search = "?foo";
    throw new Error; // load everything on the next page;
    // stop execution on this page
}

function onLoad() {
    document.getElementById("J_Form").focus();
}

window.onload = onLoad;

