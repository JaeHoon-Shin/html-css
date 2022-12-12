
fetch('./data.json')
    .then(function (res) {
        return res.json();
    }
    )
    .then(function (gallery) {
        init(gallery.data);

    });
let idx;
function init(data) {
    const elView = document.querySelector('.mainView div')
    elThumb = document.querySelector('.thumb'),
    elP = document.querySelector('.view p');
    let thumbImg = "";
    let pos = { w: 0, h: 0, x: 0, y: 0 };
    data.forEach(function (el, key) {
        thumbImg += `<figure><img src="${el.url}">
        <figcaption>
        ${el.title}
        </figcaption></figure>`
    });
    elThumb.innerHTML = thumbImg;
    elThumb.onclick = function () {
        elThumb.animate[{ transform: 'rotate(0) scale(1)' }, { transform: 'rotate(360deg) scale(0)' }, 1000];
    }
    pos.w = elView.offsetWidth;
    pos.h = elView.offsetHeight;
    pos.x = elView.offsetLeft;
    pos.y = elView.offsetTop;
    elImg = document.querySelectorAll('.thumb figure');

    elImg.forEach(function (el, key) {

        el.onclick = function () {
            elView.innerHTML = `
            <img class="newphoto" style="width:${el.offsetWidth}px; height : ${el.offsetHeight}px; left : ${el.offsetLeft}px; top : ${el.offsetTop}px; position: absolute; "; src="${data[key].url}">
               
            `
            elP.innerText = `${data[key].detail}` 
            /* const imgMove = document.querySelector('.mainView div img'); */

            $('.mainView div img').animate({ width:`${ pos.w }px`, height: `${ pos.h}px`, left:`${ pos.x }px`, top: `${ pos.y }px` },1000)
    }
    })


}
