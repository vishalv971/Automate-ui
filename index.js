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