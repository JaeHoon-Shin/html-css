/* let css = `<style>
            main{opacity:0; transition:1s}
            .active{opacity:1;}
           </style>`;
$('body').append(css); */
let css = `
        <style>
            main{opacity:0; transition:1s; }
            .active{opacity:1;}
        </style>`;
$('body').append(css);
function pageLoad(pageUrl,i) {
    $('main').removeClass('active');
    setTimeout(function () {
        $('main').load(pageUrl, function () {
            $(this).addClass('active');
            /* addClass(),removeClass(),toggleClass(),hasClass() = addClass.conteins  */  
        });
    },500)
    $('header a').css('color', 'blue').eq(i).css('color', 'red');
}


$('header a').on('click', function (e) {
    e.preventDefault();/* 이벤트 차단 */
    let url = $(this).attr('href');
    /*  let url = this.getAttribute('href') 바닐라JS  =  $(this).attr('href'); 제이쿼리 */
    let idx = $(this).index();
    history.pushState({'page':idx,'url':url},'test');
    pageLoad(url, idx);
});
$('header a:first').trigger('click');
$(window).on('popstate',function(){
    console.log('aa')
    let idx = history.state.page;
    let url = history.state.url;
    pageLoad(url, idx);
};


// [비동기 방식]
// Ajax( load, fetch. $.ajax ) 
// 웹서버에 페이지를 요청(request) -> 웹서버에서 페이지를 받음(response)

// click, setTimeout, setInterval

// [동기]
// 브라우저가 문서의 순서에 따라서 실행하는 방식
