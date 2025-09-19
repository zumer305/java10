let k=document.querySelector("input");
k.addEventListener("keydown",function(event){
    console.log("key =",event.key);
    console.log(event.code);
    console.log("Key was pressed");
})