let photo = 0; 
let numberOfPhotos = 3;
function changePhoto() {
    photo++;
    let element = document.getElementById("author-photo");
    element.src = `./images/photo${photo % numberOfPhotos + 1}.jpg`;
}