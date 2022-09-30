"use strict";


const URL = "trainers.json";
const URL2 = "https://pokeapi.co/api/v2/pokemon/ditto";

//old way of doing requests, use axios instead!
fetch(URL2)
.then(function(response){
    console.log("RESPONSE: ",response);
    return response.json();
})
.then(function (data){
    appendData(data);
    console.log("DATA: ",data);
})
.catch(function (err){
    console.error(err);
})

// axios.get(URL)
// .then(response => console.log(response.data))
// .catch(err => console.error(err));
axios.get(URL)
.then(response => appendData(response.data))
.catch(err => console.error(err));

function appendData(data){
    let dataList = document.getElementById("myData");//id for our div
    for(let i = 0; i<data.length; i++){
        let trainer = document.createElement("div");
        let id = document.createElement("card");
        id.innerText = "ID: " + data[i].userId;
        trainer.appendChild(id);
        let name = document.createElement("p");
        name.innerText = "Name: " + data[i].name;
        trainer.appendChild(name);
        dataList.appendChild(trainer);
    }
}