 function CheckAccount() {
    var user = document.getElementById("name").value;
    var pass = document.getElementById("password").value;
    $.ajax({
        url: 'https://localhost:44347/api/Account/',
        method: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        error: function (err) {
            console.log(err);
        },
        success: function (response) {
            console.log(response);
            const len = response.length;
            
            for (var i = 0; i < len; i++) {
                if (user == response[i].Username && pass == response[i].Password) {
                    alert("Đăng nhập thành công");
                    if (response[i].Role == "0") {
                        window.location.href = "https://localhost:44347/View/Index.html";
                    }
                    else {
                        window.location.href = "https://localhost:44347/View/Admin.html";
                    }
                    break;
                }
                else {
                    window.location.href = "https://localhost:44347/View/Login.html";
                }
            }

        }
    });
}
//function Register() {
//    var id = document.getElementById("id").value;
//    var username = document.getElementById("name").value;
//    var password = document.getElementById("password").value;

//    $.ajax({
//        url: 'https://localhost:44347/api/Account?IdAcc='+id+'&Username='+username+'&Password='+password,
//        method: 'POST',
//        contentType: 'application/json; charset=utf-8',
//        dataType: 'json',
//        success: function (response) {
//            alert("Đăng ký tài khoản thành công");
//            window.location.href = "https://localhost:44347/View/Login.html";
//        },
//        error: function (err) {
//            console.log(err);
//            alert("Đăng ký tài khoản thất bại");
//        }
//    });
//}
function Register() {
    var id = document.getElementById("id").value;
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    // kiểm tra điều kiện của id
    if (!/^\d+$/.test(id)) {
        alert("ID phải là số");
        return;
    }

    // kiểm tra điều kiện của username và password
    if (username.length < 6 || password.length < 6) {
        alert("Username và password phải có ít nhất 6 kí tự");
        return;
    }

    if (username === password) {
        alert("Username và password không được giống nhau");
        return;
    }

    if (!/[A-Z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        alert("Password phải có ít nhất 1 chữ in hoa, 1 số và 1 kí tự đặc biệt");
        return;
    }
    $.ajax({
        url: 'https://localhost:44347/api/Account?IdAcc=' + id + '&Username=' + username + '&Password=' + password,
        method: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (response) {
            alert("Đăng ký tài khoản thành công");
            window.location.href = "https://localhost:44347/View/Login.html";
        },
        error: function (err) {
            console.log(err);
            alert("Đăng ký tài khoản thất bại");
        }
    });
}
