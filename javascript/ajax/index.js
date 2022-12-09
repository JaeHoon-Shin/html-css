
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
        mainV = document.querySelector('.mainView');
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
    let idxPoint = "";
    elImg = document.querySelectorAll('.thumb figure');

    elImg.forEach(function (el, key) {

        el.onclick = function () {
            /* console.log(elView.offsetWidth,elView.offsetHeight,elView.offsetTop , elView.offsetLeft )  */
            idxPoint = (el.offsetWidth, el.offsetHeight, el.offsetLeft, el.offsetTop)
            /*  el.style =`width:${pos.w}px; height : ${pos.h}px; left : ${pos.x}px; top : ${pos.y}px; position: absolute; transition: 500ms; `
             if(idx!=null)
             elImg[idx].style = `width:${idxPoint[0]}px; height : ${idxPoint[1]}px; left : ${idxPoint[2]}px; top : ${idxPoint[3]}px; position: absolute; transition: 500ms; `
             idx = key;*/

            /* elView.classList.add('on') */
            elView.innerHTML = `
                <img class="newphoto" style="width:${el.offsetWidth}px; height : ${el.offsetHeight}px; left : ${el.offsetLeft}px; top : ${el.offsetTop}px; position: absolute; "; src="${data[key].url}">
                <p>${data[key].detail}</p>
            `
            const imgMove = document.querySelector('.mainView div img');

            /* imgMove.style=`width:${ pos.w}px; height : ${pos.h}px; left :${pos.x}; top : ${pos.y}px;` */
            /* imgMove.style =  */
            /* imgMove.animate({},2000); */
            $('.mainView div img').animate({ `"width:${${ pos.w}}px; height : ${pos.h}px; left :${pos.x}; top : ${pos.y}px;"`},1000)
        }
    })


}
