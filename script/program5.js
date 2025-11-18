function first()
{
    alert("welcome to javascript");
}

var allheading = document.querySelectorAll("h1");
console.log(allheading);

allheading[0].addEventListener("click",first);



allheading[1].addEventListener("click",function(){
    alert("this is ano function");
})



allheading[2].addEventListener("click",()=>{
    alert("this is arrow function");
});


allheading[3].addEventListener("click",()=>{
    allheading[3].style.color="red";
    // allheading[3].style.backgroundColor="orange";
    // allheading[3].style.fontSize="50px";
});


allheading[4].addEventListener("click",()=>{
    allheading[4].className="one";
});

allheading[5].addEventListener("click",()=>{
    allheading[5].innerHTML="multi class property";
    allheading[5].classList.add("one","two","three","four");;
});


allheading[5].addEventListener("dblclick",()=>{
    allheading[5].classList.remove("three","four");;
});

allheading[6].addEventListener("click",()=>{
    allheading[6].classList.toggle("one");
});