const player = document.getElementById('player');
const body = document.querySelector('body');

body.addEventListener("keydown", (event)=>{
  let key = event.key;
  if(key === "ArrowUp"){
    let xPos = player.style.left;
    let yPos = player.style.top;

    let xPoslength = xPos.length;
    let yPoslength = yPos.length;

    xPos = Number(xPos.slice(0, xPoslength-1));
    yPos = Number(yPos.slice(0, yPoslength-1));

    console.log(xPos, yPos);

    player.style.left = `${xPos}%`;
    player.style.top = `${yPos - 1}%`;
  }
  if(key === "ArrowDown"){
    const Xpos = player.offsetX;
    const Ypos = player.offsetY;
    console.log(Xpos, Ypos);
  }
  if(key === "ArrowLeft"){
    const Xpos = player.offsetX;
    const Ypos = player.offsetY;
    console.log(Xpos, Ypos);
  }
  if(key === "ArrowRight"){
    const Xpos = player.offsetX;
    const Ypos = player.offsetY;
    console.log(Xpos, Ypos);
  }
})
