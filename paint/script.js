let canv = document.getElementById('canvas');
let ctx  = canv.getContext('2d');
let clear_btn = document.querySelector('.clear_btn');
let selecters_submit = document.querySelector('.selecters__submit');
let inputWidth = document.getElementById('input_width');
let isMouseDown = false;
let url_now = document.location.href;
let widthLine = Number(inputWidth.value);

canv.width = window.innerWidth;
canv.height = window.innerWidth;

// Code Header
clear_btn.onclick = function() {
    document.location.href = url_now;
    document.location.href = url_now;
}

selecters_submit.onclick = function() {
    widthLine = Number(inputWidth.value);
    inputWidth.value = widthLine;
}

// Code Paint
canv.addEventListener('mousedown', function(e) {
    isMouseDown = true;
});

canv.addEventListener('mouseup', function() {
    isMouseDown = false;
    ctx.beginPath();
});

// inputWidth.value = widthLine;


canv.addEventListener('mousemove', function(e) {
    if (isMouseDown) {
        ctx.lineWidth = widthLine * 2;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, widthLine, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);   
    }
});




