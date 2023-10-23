(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();



let p = document.querySelector(".about-container .left-about p:nth-child(3)")
let span = document.querySelector(".about-container .left-about .more")


span.onclick = ()=>{
    p.classList.toggle("block")
    if(span.innerHTML === "Read More"){
        span.innerHTML = "Read Less"
    }else{
        span.innerHTML = "Read More"
    }
} 