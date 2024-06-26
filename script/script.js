window.addEventListener("load", () => {
    
    let imageCont = document.querySelector(".image-container")
    imageCont.classList.toggle("image-container-load");

    let textContainer = document.querySelector(".intro-text")
    let text = `Hey! I'm   A Front-End Web Develepor.`;
    let index = 0;
    let lineBreakIndex = [4, 10];
    let spanIndex = [9];

    function loop() {
        if (index <= text.length) {
            if (lineBreakIndex.includes(index)) {
                textContainer.innerHTML += "<br>";
                index++;
            }

            if (spanIndex.includes(index)) {
                textContainer.innerHTML += `<span id="color">`;
                let element = document.querySelector("#color");
                let text = document.createTextNode("Muhammad Usman");
                element.appendChild(text);
            }

            textContainer.innerHTML += text.charAt(index);
            index++;
            setTimeout(loop, 100);
        }
    }
    setInterval(loop, 1000);
});

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    let container = document.querySelector("div.container-content");
    container.style.top = value * 0.50 + "px";


    let skillContainerHTML = document.querySelector(".skill-html");
    let vertLine = document.querySelector(".vertical-line");
    if (value > 400) {
        skillContainerHTML.classList.add("skill-left-set");
        vertLine.style.height = 20 + 'vh';
    } else {
        skillContainerHTML.classList.remove("skill-left-set");
        vertLine.style.height = 0 + 'vh';
    };

    let skillContainerCSS = document.querySelector(".skill-css");
    if (value > 550) {
        skillContainerCSS.classList.add("skill-right-set");
        vertLine.style.height = 40 + 'vh';
    } else {
        skillContainerCSS.classList.remove("skill-right-set");
    };

    let skillContainerJS = document.querySelector(".skill-js");
    if (value > 700) {
        skillContainerJS.classList.add("skill-left-set");
        vertLine.style.height = 60 + 'vh';
    } else {
        skillContainerJS.classList.remove("skill-left-set");
    };

    let skillContainerGit = document.querySelector(".skill-git");
    if (value > 850) {
        skillContainerGit.classList.add("skill-right-set");
        vertLine.style.height = 80 + 'vh';
    } else {
        skillContainerGit.classList.remove("skill-right-set");
    };

    let skillContainerTail = document.querySelector(".skill-tailwind");
    if (value > 1000) {
        skillContainerTail.classList.add("skill-left-set");
        vertLine.style.height = 100 + 'vh';
    } else {
        skillContainerTail.classList.remove("skill-left-set");
    };

    let skillContainerPHP = document.querySelector(".skill-php");
    if (value > 1100) {
        skillContainerPHP.classList.add("skill-right-set");
        vertLine.style.height = 120 + 'vh';
    } else {
        skillContainerPHP.classList.remove("skill-right-set");
    };
});

function menu() {
    let menuImageOne = document.querySelector(".menu-image-one");
    let menuImageTwo = document.querySelector(".menu-image-two");

    menuImageOne.classList.toggle("menu-img-op-zero");
    menuImageTwo.classList.toggle("menu-img-op-one");

    let menu = document.querySelector(".icons-container");
    let menuList = document.querySelectorAll(".icons-container li");

    menu.classList.toggle("icon-show");

    menuList.forEach((list, i) => {
        list.style.transitionDelay = i * 0.1 + "s";
    });
    
    setTimeout(remDelay, 3000);
    function remDelay() {
        menuList.forEach((list, i) => {
            list.style.transitionDelay = i * 0 + "s";
        }) 
    }
}


