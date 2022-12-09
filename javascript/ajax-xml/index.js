/* fetch("./data.xml").then(function(res){
    console.log(res);
    return res.text()
}).then(function(data){
    console.log(data)
}) */

$.ajax({
    url: './data.xml',
    beforeSend: function () {
        console.log('준비')
    },
    complete: function () {
        console.log('완료')
    },
    error: function () {
        console.log('에러')
    },
    success: function (data) {
        let tag = "", url, title;
        $(data).find('item').each(function (key, value) {
            url = $(value).find('url').text()
            title = $(value).find('title').text()
            tag += `<figure>
                            <img src ="${url}"
                            <figurecaption>
                            ${title}
                            </figurecaption> 
                        </figure>`;


        });
        $('#view').html(tag);

        $('#view > figure').click(function () {
            let key = $(this).index();
            let detail = $(data).find('item').eq(key).find('detail').html()
            alert(detail)
        })
    }


});





