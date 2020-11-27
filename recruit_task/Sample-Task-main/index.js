console.clear();
var mainBody = document.getElementById("main-body");
var btn = document.getElementsByClassName("addBtn");

const products = "https://basic-api-ts-express-azure.herokuapp.com/products";

var https = new XMLHttpRequest();

https.open("GET", products, true);

https.send();

https.onreadystatechange = function(){
    if(https.readyState === 4){
        var response = JSON.parse(https.responseText);
        console.log(response);
        for(var i = 0;i<response.length;i++){
            // console.log(response[i]);
            mainBody.appendChild(createProduct(response[i]));
        }
    }
}


function createProduct(response){
    var div = document.createElement("div");
    div.classList.add("products")
    var p = document.createElement("p");
    var text = document.createTextNode(name);
    p.appendChild(text);
    p.innerText = response.name;
    var p2 = document.createElement("span");
    p2.innerText = response.desc;
    div.appendChild(p);
    div.appendChild(p2);
    console.log(div);

    return div;
}



