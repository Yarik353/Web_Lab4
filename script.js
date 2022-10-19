let element1 = document.getElementById('first_el');
let element2 = document.querySelector('#second_el');
let randomColor1;
let randomColor2;

function generateRandomColors(){
    randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    randomColor2 = Math.floor(Math.random()*16777215).toString(16);
}

function changeFirst(){
    generateRandomColors();
    element1.style.backgroundColor ="#" + randomColor1;
    element1.style.color ="#" + randomColor2;
}

function changeSecond(){
    generateRandomColors();
    element2.style.backgroundColor ="#" + randomColor1;
    element2.style.color ="#" + randomColor2;
}


let Scale =1;
function zoomIn(){
    let img = document.querySelectorAll('#img');
    if(Scale<=3){
        Scale += 0.1
        if (img.length > 0){
            img.forEach(i => {i.style.scale = Scale;})
        }


    }
}

function zoomOut(){
    let img = document.querySelectorAll('#img');
    if(Scale>1){
        Scale -= 0.1
        if (img.length > 0){
            img.forEach(i => {i.style.scale = Scale;})
        }
    }

}

function addImg(){
    let newImgContainer = document.createElement('div');
    newImgContainer.id = "img_container";
    let newImg = document.createElement('img');
    newImg.src = "SharmView.jpg";
    newImg.id = "img";
    newImg.style.scale = Scale;
    newImgContainer.appendChild(newImg);
    document.body.appendChild(newImgContainer);
}

function removeElement() {
    let elem = document.getElementById('img_container');
    if (elem != null){
        elem.parentNode.removeChild(elem);
    }

}


