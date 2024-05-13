/*Funciones para ampliar las img*/
const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImgBox.style.zIndex = "99"
    fulImg.src = reference
}


function closeImg(){
    fulImgBox.style.display = "none";
}


