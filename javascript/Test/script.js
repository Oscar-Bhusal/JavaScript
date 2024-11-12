const box = document.getElementById('box');
const body = document.querySelector('body');

// body.onkeydown = function(event){
//   let key = event.key;
//   if(key === "ArrowUp"){
//     let height = box.offsetHeight;
//     box.style.height = `${height+10}px`;
//   }
// }

body.addEventListener("keydown", (event)=>{
  let key = event.key;
  if(key === "ArrowUp"){
    let height = box.offsetHeight;
    box.style.height = `${height+10}px`;
    
    console.log(box.style.height);
  }
  else if(key === "ArrowDown"){
    let height = box.offsetHeight;
    box.style.height = `${height-10}px`;

    console.log(box.style.height);
  }
  else if(key === "ArrowLeft"){
    let width = box.offsetWidth;
    box.style.width = `${width-10}px`;

    console.log(box.style.width);
  }
  else if(key === "ArrowRight"){
    let width = box.offsetWidth;
    box.style.width = `${width+10}px`;

    console.log(box.style.width);
  }

  else if(key === "-"){
    let borderRadius = box.style.borderRadius;

    let  borderRadiusLength = borderRadius.length;

    borderRadius = Number(borderRadius.slice(0, borderRadiusLength-2));

    box.style.borderRadius = `${borderRadius+10}px`;

    console.log(box.style.borderRadius);
  }

  else if(key === "="){
    let borderRadius = box.style.borderRadius;

    let  borderRadiusLength = borderRadius.length;

    borderRadius = Number(borderRadius.slice(0, borderRadiusLength-2));

    box.style.borderRadius = `${borderRadius-10}px`;

    console.log(box.style.borderRadius);
  }
})
