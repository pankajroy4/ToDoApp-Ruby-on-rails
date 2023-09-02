$(document).ready(function(){
    $(".login_label").click(function(e){
            e.stopPropagation()
            $(".login_label").toggleClass("login_label_checked")
            $(".signup_label").toggleClass("signup_label_checked")
            $(".login_form").toggleClass("checked")
            
        });
    $(".signup_label").click(function(e){
        e.stopPropagation()
        $(".signup_label").toggleClass("signup_label_checked")
        $(".login_label").toggleClass("login_label_checked")
        $(".login_form").toggleClass("checked")
    });
})
