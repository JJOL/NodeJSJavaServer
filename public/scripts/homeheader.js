$(document).ready(function() {

    var flag = true, path = "/imgs/";
    var imgs = ["banner.jpg", "map1.png", "map2.png"];
    var index = 1;
    setInterval(function() {
        if(flag) {
            $("#img1").attr("src", path+imgs[index++]);
            $("#img2").addClass("image-off");   
        } else {
            $("#img2").attr("src", path+imgs[index++]);
            $("#img2").removeClass("image-off");
        }
        flag = !flag;
        index = (index == imgs.length) ? 0 : index;
    }, 5000);
    
});