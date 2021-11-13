$(document).ready(function() {
    var imgPosition = $(".aspect-ratio-169 img").toArray();
    var imgContainer = $(".aspect-ratio-169");
    var dotItem = $(".dot").toArray();
    //console.log(dotItem[0]);

    let imgNumber = imgPosition.length;
    let index = 0;
    imgPosition.forEach(function(image, index) {
        //console.log(image, index);
        image.style.left = index * 100 + "%";
        $(dotItem[index]).click(function() {
            slider(index);
            console.log("an")
        })

    })

    function imgSlide() {
        index++;
        if (index >= imgNumber) {
            index = 0;
        }
        slider(index);
    }

    function slider(index) {
        imgContainer.css("left", "-" + index * 100 + "%");
        $(".dot-container").children("div").removeClass("active");
        //console.log(dotItem);
        $(dotItem[index]).addClass("active");
    }
    setInterval(imgSlide, 5000);


    /*----------------trang Cartegory---------*/

    const itemsliderbar = $(".cartegory-left-li").toArray();
    // console.log(itemsliderbar);
    itemsliderbar.forEach(function(menu, index) {
        // console.log(menu, index)
        $(menu).click(function() {
                $(menu).toggleClass("block");
                //  console.log("ok")
            })
            //console.log(menu, index)
    })


    /*-------------------product---------------*/
    const bigImg = $(".product-content-left-big-img img");
    console.log(bigImg)
    const smallImg = $(".product-content-left-small-img img").toArray();
    console.log(smallImg)
    smallImg.forEach(function(img, index) {
        $(img).click(function() {
            var src = $(img).attr('src');
            $(bigImg).attr('src', src);
        })
    })

    $(".chi_tiet").click(function() {
        $(".product-content-right-bottom-content-chitiet").css('display', 'block');
        $(".product-content-right-bottom-content-baoquan").css('display', 'none');
    })
    $(".bao_quan").click(function() {
        $(".product-content-right-bottom-content-chitiet").css('display', 'none');
        $(".product-content-right-bottom-content-baoquan").css('display', 'block');
    })
    $(".product-content-right-bottom-top").click(function() {
        $(".product-content-right-bottom-content-big").toggleClass("none_active");
        $(".product-content-right-bottom-content").toggleClass("none_active");
    })
})