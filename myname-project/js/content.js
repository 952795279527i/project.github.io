window.addEventListener("scroll", function () {
  var distanceFromTop =
    document.documentElement.scrollTop || document.body.scrollTop || 0;
  console.log(distanceFromTop);
  if (distanceFromTop == 0) {
    $(".page-main-content-top").css("height", "70px");
    $(".logo-title").css("font-size", "2rem");
  }
  if (distanceFromTop > 18) {
    $(".page-main-content-top").show();
    $(".page-main-content-top").css("height", "50.6px");
    $(".logo-title").css("font-size", "2em");
  }
  if (distanceFromTop > 300) {
    $(".page-main-content-top").hide();
  }
  var distanceFromBottom =
    document.documentElement.scrollHeight -
    distanceFromTop -
    window.innerHeight;
  if (distanceFromBottom < 800) {
    console.log("已滚动到页面底部！");
  }
});
