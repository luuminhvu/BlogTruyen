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
            let table = '';
            for (var i = 0; i < len; ++i) {
                table = table + '<tr>';
                table = table + '<td>' + reponse[i].ID + '</td>';
                table = table + '<td>' + reponse[i].TenTruyen + '</td>';
                table = table + '<td>' + reponse[i].TacGia + '</td>';
                table = table + '<td style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100px;">' + reponse[i].NoiDung + '</td>';
                table = table + '<td>' + reponse[i].Image + '</td>';
                table = table + '<td>' + reponse[i].DanhMuc + '</td>';
                table = table + '</tr>';

            }
            document.getElementById('allKH').innerHTML = table;
        },
        fail: function (response) {
        }
    });
}
//Hàm lấy Thêm mới Khách hàng. Dùng $.ajax() thực hiện method HTTP
POST
function insertTruyen() {
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
            alert("Thêm mới không thành công");
        },
        success: function (reponse) {
            alert("Thêm mới thành công");
            GetAllTruyen(); //Gọi đến hàm lấy dữ liệu lên bảng
        }
    });
}
PUT
function editTruyen() {
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
DELETE
function deleteTruyen() {
    var url = 'https://localhost:44347/api/truyen?id=' + $('input').eq(0).val();

    $.ajax({
        url: url,
        method: 'DELETE',
        contentType: 'json',
        dataType: 'json',
        error: function (response) {
            alert("Xóa không thành công");
        },
        success: function (reponse) {
            alert("Xóa thành công");
            GetAllTruyen(); //Gọi đến hàm lấy dữ liệu lên bảng
        }
    });
}