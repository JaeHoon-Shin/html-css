$('body').prepend('<header>');
$('body').append('<footer>');

$('header').load('./inc.html header',head );
$('footer').load('./inc.html footer' );
let idx = localStorage.idx || 0;
function head(){
    $('header a').eq(idx).css('color','red');
    $('header a').click(function(){
       let idx = $(this).index();
       localStorage.idx = idx;  
    /* 
        localStorage.setItem('idx',2); idx값 수정
        localStorage.getItem('idx');    가져오기
        localStorage.removeItem();      삭제
        localStorage.clear();           로컬스토리지 모두 삭제
    */
    })
}

