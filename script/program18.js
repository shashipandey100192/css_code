
const numb = [100,5,17,20,30,60,15,25,18,45,65];

function mymap()
{
    var a = document.getElementById("one");
    var myopt = document.getElementById('two');
    var b = numb.map((d)=>{
       if(d>=50)
       {
         return `<li class="mylist">${d*2}</li>`
       }
       else
       {
         return `<li style="color:red">${d*2}</li>`
       }
    });

     var c = numb.map((d)=>{
        return `<option>userId:${d*5}</option>`
    });
    myopt.innerHTML=c.join("");
    
    a.innerHTML=b.join("");

}