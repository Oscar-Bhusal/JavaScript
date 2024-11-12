let hue=0;

addEventListener("mousemove", (event)=>{
  const x = event.x;
  const y = event.y;
  hue++;

  // console.log(x, y);

  const div = document.createElement("div");
  div.style.top = `${y}px`;
  div.style.left = `${x}px`;
  div.style.backgroundColor = `hsl(${hue} , 100% , 50%)`;
  document.body.appendChild(div);

  setTimeout(()=>{
    div.remove();
  },1000)

});

