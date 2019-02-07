//getAll
$.ajax({
    type: 'GET',
    url: '/developer/all',
    success: function (resp) {
        console.log("get all developers" + resp)
        drawDevelopers(resp);
    },
    error: function (error) {
        console.log("get all developers" + error);
    },
    dataType: 'json'
});

function drawDevelopers(developers) {
    for (var i = 0; i < developers.length; i++) {
        var result = $("<tr>"
            + "<td>" + developers[i].id + "</td>"
            + "<td>" + developers[i].name + "</td>"
            + "<td>" + developers[i].age + "</td>"
            + "<td>" + developers[i].salary + "</td>"
            + "</tr>");
        $("#allDevelopers").append(result);
    }
}









