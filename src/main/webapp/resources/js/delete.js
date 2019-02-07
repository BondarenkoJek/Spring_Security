$(".deleteForm").submit(function (event) {
    event.preventDefault();
    var form = $(this);
    var id = form.find('button[name="delete"]').val();
    var url = '/developer/' + id;
    var line = form.parent('td').parent('tr');
    $.ajax({
        type: 'DELETE',
        url: url,
        contentType: 'application/x-www-form-urlencoded',
        data: "id=" + id,
        success: function () {
            line.remove();
        },
        error: function (xhr, status, error) {
            alert(error);
        }
    });
});
