const balls = document.getElementsByClassName("ball")

document.onmousemove = function() {
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";
    document.querySelector('body').classList.add("danger")
    for (let i = 0; i < 2; i++) {
        balls[i].style.left = x
        balls[i].style.top = y
        balls[i].style.transform = "translate(-"+x+",-"+y+")";
    }
}

document.onclick = function() {
    document.querySelector('body').classList.add("silent")
}