// let btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick=function(){
//     console.log("Button was clicked");
// }




// function sayhello(){
//     alert("hi");
// }
// btn.onclick=sayhello;



let btns=document.querySelectorAll("button");
for(btn of btns){
    // // 1
    // btn.onclick=sayhello;
    // // 2
    // btn.onmouseenter=function(){
    //     console.log("You on mouse enter");
    // }
    btn.addEventListener("click",sayhello);
      btn.addEventListener("click",sayname);
}
 function sayhello(){
    alert("hi");
}
 function sayname(){
    alert("zumer");
}




// Event listener (multiple work at a time)





















