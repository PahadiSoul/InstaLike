var con = document.querySelector("#conatiner")
var love = document.querySelector("i")

con.addEventListener("dblclick",function(){
    
    love.style.transform = 'translate(-50%,-50%) scale(1)';
    setTimeout(() => {
        love.style.transform = 'translate(-50%,-50%) scale(0)';
    }, 2000);

})