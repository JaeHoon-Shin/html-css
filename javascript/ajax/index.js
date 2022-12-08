
fetch('./data.json')
    .then(function (res) {
        return res.json();
    }
    )
    .then(function (gallery) {
        init(gallery.data);
        
    });

function init(data) {
    const elView = document.querySelector('.mainView div')
          elThumb = document.querySelector('.thumb'),
          mainV = document.querySelector('.mainView');
    let thumbImg = "";
    let pos = { w: 0, h: 0, x: 0, y: 0 };
    data.forEach(function(el,key){
        thumbImg +=`<figure><img src="${el.url}">
        <figcaption>
        ${el.title}
        </figcaption></figure>`
    });
    elThumb.innerHTML = thumbImg;
    let idx =0;
    let idxPoint = "";
        elImg = document.querySelectorAll('.thumb figure');

        elImg.forEach(function(el,key){
            
            el.onclick = function(){
                //
                pos.w = elView.offsetWidth;
                pos.h = elView.offsetHeight;
                pos.x = elView.offsetLeft;
                pos.y = elView.offsetTop;
                console.log(elView.offsetTop , elView.offsetLeft, elView.offsetWidth, elView.offsetHeight)
                idxPoint =(el.offsetTop , el.offsetLeft, el.offsetWidth, el.offsetHeight)
                el.style =`width:${pos.w}px; height : ${pos.h}px; left : ${pos.x}px; top : ${pos.y}px; position: absolute; transition: 500ms; `
                idx = key;
                /* elView.classList.add('on') */
                /* elView.innerHTML = `<div>
                <img src="${data[key].url}">
                <p>${data[key].detail}</p>
            </div>` */
            }
        })

}
