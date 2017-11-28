// 下拉菜单
$('.drop-menu').click(function (e) {
    toggleDrop(e, $(this));
});

$('.drop-list li').click(function (e) {
    e.stopPropagation();
    // 赋值text
    var text = $(this).text()
    $(this).parent().siblings('.touch-select').val(text);
    // 赋值value
    var value = $(this).data('id');
    console.log(value);
    $(this).parent().siblings('.select-result').val(value);
    $('.drop-list').fadeOut("fast");
});

$(document).click(function () {
    $('.drop-list').fadeOut("fast");
});


// 处理下拉菜单
function toggleDrop(event, $this) {
    event.stopPropagation();
    $('.drop-list').each(function () {
        $(this).fadeOut("fast");
    });
    $this.find('.drop-list').slideToggle();
}