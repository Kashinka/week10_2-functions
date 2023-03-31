var i = 0;
var image1 = document.getElementById("image1");
        // Добавьте свои картинки через запятую
var imgs = new Array( 'assets/img/1.jpg', 'assets/img/2.jpg' );

function imgsrc1() {
        image1.src=imgs[i];
        i++;
}

var image2 = document.getElementById("image2");

function imgsrc2() {
        i--;
        image2.src=imgs[i];
}