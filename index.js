// Get the <df-messenger> element
const dfMessenger = document.querySelector('df-messenger');

// Add event listener for 'keydown'
document.addEventListener('keydown', (event) => {
  // Check if the 'Esc' key was pressed
  if (event.key === 'Escape' || event.keyCode === 27) {
    // Remove the 'expand' attribute
    dfMessenger.removeAttribute('expand');
  }
});

function openBot(){
    console.log('Button Clicked');
    const dfMessenger = document.querySelector('df-messenger');
    dfMessenger.setAttribute('expand', 'true');
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
       var c = ca[i];
       while (c.charAt(0)==' ') c = c.substring(1);
       if(c.indexOf(name) == 0)
          return c.substring(name.length,c.length);
    }
    return "";
}

function setFooterPosition() {
    const footer = document.querySelector("footer");
    const body = document.querySelector("body");
    const html = document.querySelector("html");
    if (
        footer.offsetTop + footer.offsetHeight <
        window.innerHeight
    ) {
        body.style.height = "100%";
        html.style.height = "100%";
        footer.style.position = "fixed";
        footer.style.bottom = "0";
    }
}
window.addEventListener("load", setFooterPosition);
window.addEventListener("resize", setFooterPosition);
var viewMode = getCookie("view-mode");
if (viewMode == "desktop") {
    viewport.setAttribute("content", "width=1024");
} else if (viewMode == "mobile") {
    viewport.setAttribute(
        "content",
        "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
    );
}