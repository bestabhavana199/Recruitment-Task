var name = document.getElementsByClassName("name").value;
var desc = document.getElementsByClassName("desc").value;

$(".addBtn").click(function(e){
    // alert('clicked');
    e.preventDefault();

    var adding = window.localStorage.getItem('products');

    adding = adding === "" || adding === null ? [] : adding;

    adding = adding.length > 0 ? JSON.parse(adding): [];    

    console.log(adding);

    var array = [];
    for(var i = 0;i<adding.length;i++){
        var obj = {
            name: adding[i].name,
            desc: adding[i].desc
        };
        console.log(obj);

        array.push(obj);
    };

    $.post("https://basic-api-ts-express-azure.herokuapp.com/products",array, 
    function(){
        window.localStorage.setItem("adding",[]);

    })
})


// $(".addBtn").click(function(e){
//     // if(e.which === 13){
//     //     handleText();
//     // }
//     console.log(name);
//     console.log(desc);
//     alert(name)
//     e.preventDefault();
// })

// function handleText(){
//     var enterText = input.value;
//     if(enterText !== '' && enterText !== null){
//       list.appendChild(createTodo(enterText));
//       input.value = '';
//     } else {
//       alert("please Enter the Todo....");
//     }
//   }