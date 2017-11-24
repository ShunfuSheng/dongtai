// 下拉菜单
$('.drop-menu').click(function (e) {
    toggleDrop(e, $(this));
});
$('.dropList li').click(function (e) {
    e.stopPropagation();
    $(this).parent().siblings('.touchSelect').val($(this).text());
    $('.dropList').fadeOut("fast");
    // 处理可选项input
    $('.selectable').hide();
    var itemId = $(this).data('id');
    $('#' + itemId).show();
});
$(document).click(function () {
    $('.dropList').fadeOut("fast");
});


// 处理下拉菜单
function toggleDrop(event, $this) {
    event.stopPropagation();
    $('.dropList').each(function () {
        $(this).fadeOut("fast");
    });
    $this.find('.dropList').slideToggle();
}