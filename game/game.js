let position = 175;
let character = document.getElementById("characer");
function moveLeft(){
    if(position>0){
        position=position-10;
        character.style.left=positon+"px";
    }
    console.log(position);
}

function moveRight(){
    if(positon<0){
        position=position+10;
        character.style.left=position+"px";
    }
}