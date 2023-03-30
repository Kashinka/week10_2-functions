// Создаем массив с адресами к фотографиям
const images = [
    "assets/img/1.jpg",
    "assets/img/2.jpg"
];
// Индекс нынешней картинки
let currentImageIndex = 0;

function switchImage(next) {
    // Получаем индекс новой картинки 
    currentImageIndex += next;

    // Проверка на допустимый индекс, чтобы не выйти за пределы массива
    if (currentImageIndex === images.length) {
        currentImageIndex = 0;
    }
    if (currentImageIndex === -1) {
        currentImageIndex = images.length - 1;
    }
    
    // Помещаем в src тега img ссылку до новой картинки
    document.getElementById('image').src = images[currentImageIndex];
}