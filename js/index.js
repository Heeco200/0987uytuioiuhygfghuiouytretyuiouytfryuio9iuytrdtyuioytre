window.addEventListener('DOMContentLoaded', ()=> {
    const box = document.querySelectorAll(".box");

    window.addEventListener('scroll', scrollBox);
    scrollBox();

    function scrollBox() {
        const triggerWindow = window.innerHeight/6*4;
        box.forEach((item) => {
            const itemTop = item.getBoundingClientRect().top;
            if (triggerWindow > itemTop) {
                item.classList.add("show");
            } else {
                item.classList.remove("show");
            }
        })
    }
})