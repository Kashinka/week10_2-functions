var i=0;
        var image=document.getElementById("image");
        // Добавьте свои картинки через запятую
        var imgs=new Array( 'assets/img/1.jpg','assets/img/2.jpg' );
        function imgsrc() {
            i++;
            image.src=imgs[i];
        }