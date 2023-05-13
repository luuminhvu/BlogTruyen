$(document).ready(function () {
    GetAllTruyen();
});
function GetAllTruyen() {
    $.ajax({
        url: 'https://localhost:44347/api/truyen/',
        method: 'GET',
        contentType: 'json',
        dataType: 'json',
        error: function (response) {
        },
        success: function (reponse) {
            const len = reponse.length;
            console.log(reponse);
            let html = '';
            for (var i = 0; i < len; ++i) {
                html += '<tr>';
                html += '<th scope="row">' + reponse[i].ID + '</th>';
                html += '<td>' + reponse[i].TenTruyen + '</td>';
                html += '<td>' + reponse[i].TacGia + '</td>';
                html += '<td>' + reponse[i].Image + '</td>';
                html += '<td>' + reponse[i].DanhMuc + '</td>';
                html += '<td><button class="btn btn-primary m-r-5" onclick="deleteTruyen(' + reponse[i].ID + ')">Xoá</button><button class="btn btn-danger m-r-5" onclick="EditTruyen(\'' + reponse[i].ID + '\')">Edit</button></td>';

                html += '</tr>';
            }
            document.getElementById('allTruyen').innerHTML = html;
        },
        fail: function (response) {
        }
    });
}
function EditTruyen(id) {
    $.ajax({
        url: 'https://localhost:44347/api/admin/?id=' + id,
        method: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        error: function (err) {
            console.log(err);
        }
    }).done(function (response) {
        console.log(response);
        document.getElementById('id').value = response.ID;
        document.getElementById('ten-truyen').value = response.TenTruyen;
        document.getElementById('tac-gia').value = response.TacGia;
        document.getElementById('noi-dung').value = response.NoiDung;
        document.getElementById('image').value = response.Image;
        document.getElementById('danh-muc').value = response.DanhMuc;
    });
}
function editTruyenNo() {
    var url = 'https://localhost:44347/api/truyen?id=' +
        $('input').eq(0).val() + '&tenTruyen=' + $('input').eq(1).val() +
        '&tacGia=' + $('input').eq(2).val() + '&noiDung=' +
        $('input').eq(3).val() + '&image=' + $('input').eq(4).val() +
        '&danhMuc=' + $('input').eq(5).val();
    $.ajax({
        url: url,
        method: 'PUT',
        contentType: 'json',
        dataType: 'json',
        error: function (response) {
            alert("Sửa không thành công");
        },
        success: function (reponse) {
            alert("Sửa thành công");
            GetAllTruyen(); //Gọi đến hàm lấy dữ liệu lên bảng
        }
    });
}
function deleteTruyen(id) {
    $.ajax({
        url: 'https://localhost:44347/api/truyen?id=' + id,
        method: 'DELETE',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        error: function (err) {
            console.log(err);
        },
        success: function (response) {
            console.log("Xoá thành công");
            GetAllTruyen();
        }
    });
}
function AddTruyen() {
    var url = 'https://localhost:44347/api/truyen?id=' +
        $('input').eq(0).val() + '&tenTruyen=' + $('input').eq(1).val() +
        '&tacGia=' + $('input').eq(2).val() + '&noiDung=' +
        $('input').eq(3).val() + '&image=' + $('input').eq(4).val() +
        '&danhMuc=' + $('input').eq(5).val();
    $.ajax({
        url: url,
        method: 'POST',
        contentType: 'json',
        dataType: 'json',
        error: function (response) {
            alert("Thêm không thành công");
        },
        success: function (reponse) {
            alert("Thêm thành công");
            GetAllTruyen(); //Gọi đến hàm lấy dữ liệu lên bảng
        }
    });
}