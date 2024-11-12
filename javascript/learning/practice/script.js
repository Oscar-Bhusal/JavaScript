const PI = 3.14159;
let radius;
let area;

document.getElementById("mySubmit").onclick = function(){
  radius = document.getElementById("myText").value;
  area =  PI * radius * radius;
  document.getElementById("myH4").textContent = `The area of cirlce is ${area}`;
}