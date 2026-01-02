function mycard()
{
    var jcard = document.getElementById('mycards');
    fetch("https://dummyjson.com/products").then((d)=>{
        return d.json();
    }).then((myd)=>{
        console.log(myd);
        var mytemp = myd.products.map((cd)=>{
            return `<div class="col-md-3 mt-3">
                <div class="card shadow">
                    <img src="${cd.thumbnail}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${cd.title}</h5>
                        <p class="card-text">${cd.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div> `
        });

        jcard.innerHTML = mytemp.join("");

    })
}

mycard();