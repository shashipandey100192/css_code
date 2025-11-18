
// var color="red";

// var colors = ["20","red","orange",true];
// console.log(colors);
// console.log(typeof(colors));


// var colors = ["red","green","orange","blue","pink"];
// i=0;
// function changeback()
// {
//     document.bgColor = colors[i];
//     i++;
//     if(i>=colors.length)
//     {
//         i=0;
//     }
// }

// setInterval("changeback()",1000);





var colors = ["red","green","orange","blue","pink"];
i=0;
function changeback()
{
    document.bgColor = colors[i];
    i++;
    if(i>=colors.length)
    {
        clearInterval(b);
    }
}

var b = setInterval("changeback()",1000);




function popupmodel()
{
    alert("welcome to");
}

var c = setTimeout("popupmodel()",50000);

function clearfunc()
{
    clearTimeout(c);
    popupmodel();
}