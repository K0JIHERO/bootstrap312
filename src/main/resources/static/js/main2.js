
$(document).ready(function() {
    $('.table .eBtnD').on('click', function(event){
        event.preventDefault();
        var href = $(this).attr('href')

        $.get(href, function(user, status){
            $('.myForm2 #idD').val(user.id);
            $('.myForm2 #firstNameD').val(user.firstName);
            $('.myForm2 #lastNameD').val(user.lastName);
            $('.myForm2 #emailD').val(user.email);
            $('.myForm2 #passwordD').val(user.password);
            $('.myForm2 #ageD').val(user.age);
            // $('.myForm #role').val(user.role);

        });

        $('.myForm2 #deleteModal').modal();

    });
});

