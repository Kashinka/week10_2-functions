var i = 0;
var image = document.getElementById("image");
        // Добавьте свои картинки через запятую
var imgs = new Array( 'assets/img/1.jpg', 'assets/img/2.jpg' );

function imgsrc1() {
        image.src=imgs[i];
        i++;
}

function imgsrc2() {
        i--;
        image.src=imgs[i];
}