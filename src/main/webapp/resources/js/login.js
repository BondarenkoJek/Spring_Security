$("#loginForm").submit(function () {
    alert("submit");
    var url = '/login';
    var login = $('#login').val();
    var password = $('#password').val();
    var user = {
        login: login,
        password: password
    };

    $.ajax({
        url: url,
        contentType: 'application/json',
        dataType: "json",
        type: 'POST',
        data: JSON.stringify(user),
        async: true,
        success: function () {
            alert("true");
            console.log("successfully");
            top.location.href = '/';
        },
        error: function (xhr, status, error) {
            alert("false");
            console.log(error);
            top.location.href = '/registration';
        }
    });
});
