const buttonEl = document.querySelector(".btn");
// console.log(buttonEl)
buttonEl.addEventListener("mouseover", (event)=>{
    const y = (event.pageY - buttonEl.offsetTop);
    const x = (event.pageX - buttonEl.offsetLeft);

    // we can affect a CSS variable via setProperty
    buttonEl.style.setProperty("--xPosition", x + "px");
    buttonEl.style.setProperty("--yPosition", y + "px");

})

