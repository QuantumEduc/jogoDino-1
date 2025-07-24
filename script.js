const dino = document.getElementById("dino");
const obstaculo = document.getElementById("obstaculo");
let isJumping = false;
let speed = 10;
const acceleration = 10;
const interval = 30;
const gameAreaWidth = document.getElementById("gameArea").offsetWidth;

function Jump() {
    if(isJumping)return;
    isJumping=true;
    dino.style.animation="jump 0.5sease-out"
    setTimeout(()=>{
        dino.style.animation="";
     isJumping=false
    },500);
}
document.addEventListener("keydown",function(event){
    if (event.code==="space"){
        Jump();
    }
});
function moveobstaculo(){
    letobstaculoPos=obstaculo.offsetLeft;
    obstaculo.style.left=obstaculopos - speed + "px"
    if(obstaculopos<=20){
        obstaculo.style.left=gameAreaWidth + "px";
    }
checkcollison();
}
function checkcollison(){
    const dinoRect = dino.getBoundingClientRect();
    const obstaculoRect = obstaculo.getBoundingClientRect();

    if(
        dinoRect.right>obstaculoRect.left&&
        dinoRect.left<obstaculoRect.right&&
        dinoRect.bottom>obstaculoRect.top&&
        dinoRect.top<obstaculoRect.bottom
    ) {
        alert("derrotado.tente novamente se tiver coragem");
        clearInterval(gameInterval);
        clearInterval(speedInterval);
    }
}
function increaseSpeed(){
    speed += acceleration;
}
const speedInterval = setInterval(increaseSpeed, 30000);
const gameInterval = setInterval(moveobstaculo,interval);