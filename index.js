const rootEl = document.querySelector('html');
const docEl = document.documentElement;

// Default theme --necessary
document.onload(rootEl.setAttribute("data-theme", "light"));
function switchTheme(){
    // retrieving the current data-theme of the el-html
    let currentDataTheme = rootEl.getAttribute("data-theme");
    if (currentDataTheme==="light"){
        console.log('changing theme');
        rootEl.setAttribute("data-theme", "dark");
    } 
    if (currentDataTheme==="dark") {
        console.log('changing theme');
        rootEl.setAttribute("data-theme", "light");
    }
}