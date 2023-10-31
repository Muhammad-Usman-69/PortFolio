window.addEventListener("load", () => {
    let textContainer = document.querySelector(".intro-text") 
    let text = `Hi! My Name is  A Front-End Web Develepor.`;
    let index = 0;
    let lineBreakIndex = [3, 16];
    let spanIndex = [15];

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
                // let text = "Muhammad Usman";
                // let now
                // (if  == 15) {
                //     element.innerHTML += text.charAt(index)
                // }
            }

            textContainer.innerHTML += text.charAt(index);
            index++;
            setTimeout(loop, 100);
        }
    }

    loop();
});
