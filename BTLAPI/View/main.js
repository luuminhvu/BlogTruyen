$(document).ready(function () {
    loadMenu();
    loadTruyen();
});
function loadMenu() {
    $.ajax({
        url: 'https://localhost:44347/api/danhmuc',
        method: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        error: function (err) {
            console.log(err);
        },
        success: function (response) {
            console.log(response);
            const len = response.length;
            let html = '';
            for (let i = 0; i < len; i++) {
                
                html += '<li><a onclick="loadTruyenByDanhMuc(' + response[i].IdDanhMuc + ')">' + response[i].TenDanhMuc + '</a></li>';
            }
            $("#menu").html(html);
        }
    });
}

function loadTruyen() {
    $.ajax({
        url: 'https://localhost:44347/api/truyen',
        method: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        error: function (err) {
            console.log(err);
        },
        success: function (response) {
            console.log(response);
            const len = response.length;
            let html = '';
            for (let i = 0; i < len; i++) {
                //html += '<article><h1>' + response[i].TenTruyen + '</h1><img src="images/' + response[i].Image + '" alt=""><p>'/* + response[i].NoiDung*/ + '</p><a onclick="loadTruyenByID(' + response[i].ID + ')" class="rm">Read More</a></article>';
                html += '<div class="work"><a onclick="loadTruyenByID(' + response[i].ID + ')" class="rm"><img style="width:400px;height:400px;" src="images/' + response[i].Image + '" alt="" class="media" /><div class="caption"><div class="work_title"><h1>' + response[i].TenTruyen + '</h1></div></div></a></div>'
            }
            document.getElementById("ourserv").innerHTML = html;
        }
    });
}

function loadTruyenByDanhMuc(id) {
    $.ajax({
        url: 'https://localhost:44347/api/danhmuc/' + id,
        method: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        error: function (err) {
            console.log(err);
        },
        success: function (response) {
            console.log(response);
            const len = response.length;
            let html = '';
            for (let i = 0; i < len; i++) {
                html += '<div class="work"><a onclick="loadTruyenByID(' + response[i].ID + ')" class="rm"><img style="width:400px;height:400px;" src="images/' + response[i].Image + '" alt="" class="media" /><div class="caption"><div class="work_title"><h1>' + response[i].TenTruyen + '</h1></div></div></a></div>'

            }
            document.getElementById("ourserv").innerHTML = html;
        }
    });
}
function loadTruyenByID(id) {
    $.ajax({
        url: 'https://localhost:44347/api/truyen/' + id,
        method: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        error: function (err) {
            console.log(err);
        },
        success: function (response) {
            console.log(response);
            const len = response.length;
            let html = '';
            for (let i = 0; i < len; i++) {
                html += '<section class="clearfix"><section class="top"><div class="wrapper content_header clearfix"><div class="work_nav"><img style="width:100%;height:400px;" src="images/' + response[i].Image + '" alt="" class="media" /></div><!-- end work_nav --><h1 class="title"> ' + response[i].TenTruyen + '</h1></div></section><!-- end top -->';
                html += '<section class="wrapper"><div class="content2"><pre>' + response[i].NoiDung + '</pre></div></section>'
                html += '<a onclick="loadTruyen()" class=" btn btn-info btn-fw rm">Back</a>';
                html += '</section>';
            }
            document.getElementById("ourserv").innerHTML = html;
        }
    });
}