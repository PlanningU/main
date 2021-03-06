//Used for the profile cards on the about us page
//Since hover is not possible on mobile, we have to convert that into a toggle
define(function(){
$('#profiles').on('click', '.profile-card', function () {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        if (!$(this).hasClass("expanded")){
            jQuery(this).children(".profile-overlay").height(
                $(this).height() - parseInt($(this).css("margin-top")));
            jQuery(this).find(".mobile-open-arrow").toggleClass('flip');
            $(this).addClass("expanded");
        }else{
            jQuery(this).children(".profile-overlay").height(
                110 + "px");
            $(this).removeClass("expanded");
            jQuery(this).find(".mobile-open-arrow").toggleClass('flip');
        }

    }
});
});