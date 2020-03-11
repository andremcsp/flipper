function flipPicture(direction) {
    if (direction ===  'right') {
        document.getElementById('image').setAttribute("style", "-webkit-transform: scaleX(-1); transform: scaleX(-1);")
        document.getElementById('left-arrow').removeAttribute("disabled")
        document.getElementById('right-arrow').setAttribute("disabled", true)
    } else if (direction ===  'left') {
        document.getElementById('image').setAttribute("style", "-webkit-transform: scaleX(1); transform: scaleX(1);")
        document.getElementById('right-arrow').removeAttribute("disabled")
        document.getElementById('left-arrow').setAttribute("disabled", true)
    } else if (direction ===  'up') {
        document.getElementById('image').setAttribute("style", "-webkit-transform: scaleY(1); transform: scaleY(1);")
        document.getElementById('up-arrow').removeAttribute("disabled")
        document.getElementById('down-arrow').setAttribute("disabled", true)
    } else if (direction ===  'down') {
        document.getElementById('image').setAttribute("style", "-webkit-transform: scaleY(-1); transform: scaleY(-1);")
        document.getElementById('down-arrow').removeAttribute("disabled")
        document.getElementById('up-arrow').setAttribute("disabled", true)
    }
}
