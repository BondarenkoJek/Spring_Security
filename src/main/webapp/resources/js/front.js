$.ajax({
    type : 'GET',
    url : '/developer/all',
    success : function(resp){
       console.log("get all developers" + resp)
        drawDevelopers(resp);
    },
    error: function(error){
        console.log("get all developers" + error);
    },
    dataType: 'json'
});

function drawDevelopers(developers) {
    for (var i = 0; i < developers.length; i++) {
        var result = $("<h3>" + developers[i].name + "</h3>");
        $("#allDevelopers").append(result);
    }
}