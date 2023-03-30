var i=0;
        var image=document.getElementById("image");
        // Добавьте свои картинки через запятую
        var imgs=new Array('note.png','note_30.png', 'note_30_.png');
        function imgsrc() {
            i++;
            image.src=imgs[i];