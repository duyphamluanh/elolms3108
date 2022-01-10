$(document).ready(function () {
    // debugger;
    AdjustCourseCard(30);
    $(window).resize(function() {
        AdjustCourseCard();
    });
    $('button[aria-controls="nav-drawer"]').on('mouseup',function() {
        setTimeout('AdjustCourseCard(lenght = 30)',500);
    });
});

function AdjustCourseCard(lenght = 30){
    let maxheight = 0;
    $('[id^="courses-view-"] .media-body .h5 a').each(function() {
        let child = $(this);
        let newheight = child.height() + lenght;
        newheight > maxheight ? maxheight = newheight : newheight = maxheight;
        // if(newheight > $(this).parent().parent().parent().parent().height()){
            $('.elo-course-dashboard-percent-text').css('height', newheight + 'px');
        // }
    });
}