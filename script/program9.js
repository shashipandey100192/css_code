function loadallelement()
{
    var jinput = document.querySelectorAll("input,textarea");
    var myobj = document.getElementById('mydiv');
    console.log(jinput)

    jinput[0].addEventListener("input",()=>{
        myobj.style.backgroundColor=jinput[0].value;
    });

    jinput[1].addEventListener("input",()=>{
        myobj.innerHTML = jinput[1].value;
    });

    jinput[2].addEventListener("input",()=>{
        myobj.style.fontSize=`${jinput[2].value}px`;
    });

    jinput[3].addEventListener("input",()=>{
        myobj.style.opacity=`${jinput[3].value/100}`;
    });
}

loadallelement();