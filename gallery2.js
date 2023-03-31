var i = 0;
var image = document.getElementById("image");
        // Добавьте свои картинки через запятую
var imgs = new Array( 'assets/img/1.jpg', 'assets/img/2.jpg' );

function imgsrc1() {
        image.src=imgs[i];
        i++;
}

function imgsrc2() {
    if (i > 2) {
        i = 0;
        image.src=imgs[i];
    }
    if (i < 1) {
        image.src=imgs[1];
    }
    else {
        i--;
        image.src=imgs.src[i];
    }
    
}