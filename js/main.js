//pop//
$(".close").click(function() {
    $('.popup').fadeOut(200);
});
$(".blacklayer").click(function() {
    $('.popup').fadeOut(200);
});
$(".pop-btn").click(function() {
$("div[id=" + $(this).attr("data-pop") + "]").fadeIn(200);
});
$(".checked").click(function() {
    $('#pop-1').fadeIn(200);
});
//抽獎動畫class增加
$(".draw").click(function () {
    $(".gift_top").addClass("gift_top-1");
    $(".gift_star_box").addClass("gift_star_box-1");
    $(".gift_star").addClass("star-1");
});
//延遲抽獎獎品跳窗
$(".draw").click(function(){
    var Z=setTimeout(function(){get_pop();},2000);
    function get_pop()
    {
        $('#pop-7').fadeIn(200);
    }
    });
$(".draw_close").click(function(){
    $(".gift_top").removeClass("gift_top-1");
    $(".gift_star_box").removeClass("gift_star_box-1");
    $(".gift_star").removeClass("star-1");
});
//複製邀請碼內容//
function copytext() {
    var copyText = document.getElementById("textAreas");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
}
//Tabs
$(".myTabs").each(function() {
    var $myTabs = $(this);
    $myTabs.find(".tab_content").hide().eq(0).show();
    $myTabs.find("ul.tabs_list li:first").addClass("active").show();
    $myTabs.find("ul.tabs_list li").click(function() {
        var $this = $(this);
        $this.addClass("active").siblings().removeClass("active");
        $myTabs.find(".tab_content").hide();
        var activeTab = $this.find("a").attr("href");
        $(activeTab).show();
        return false;
    });
});