let outputwindow = document.querySelector("#output");
let htmlcode, csscode, jscode = '';
let allInput = document.querySelectorAll(".Parent-divider .Left-divider-child .text-area-class textarea");
allInput.forEach((el, index) => {
    el.addEventListener("keyup", () => {
        if (index == 0) {
            htmlcode = el.value;
        }
        if (index == 1) {
            csscode = el.value;
        }
        if (index == 2) {
            jscode = el.value;
        }
        outputwindow.contentDocument.body.innerHTML = htmlcode;
        outputwindow.contentDocument.head.innerHTML = `<style>${csscode}</style>`;
        outputwindow.contentWindow.eval(jscode);   
    })
})

let tl = gsap.timeline();
tl.from("#move1",{
    y:-200,
    scale:0.5
})
tl.from("#move2",{
    y:-200,
    scale:0.5
})
tl.from("#Output",{
    x:1200,
})
tl.from(".text-area-class",{
    x:-1200,
})
tl.from(".hadding",{
    x:-200,
    scale:0.5
})

