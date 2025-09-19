let btn=document.querySelector("button");
btn.addEventListener("click",function(){
  
    let h3=document.querySelector("h3");
    let rcolor=getRandomColor();
    h3.innerText=rcolor;


    let div=document.querySelector("div");
    div.style.backgroundColor=rcolor;

})


function getRandomColor()
{
    let red=Math.floor(Math.random()*255);
       let green=Math.floor(Math.random()*255);
          let blue=Math.floor(Math.random()*255);
          let color=`rgb(${red},${green},${blue})`;

          return color;
}