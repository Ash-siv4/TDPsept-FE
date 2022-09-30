"use strict";

let dataList = document.getElementById("d");

function getUsers(){
    fetch('https://reqres.in/api/users?page=2')
    .then((response) => 
    // {
    //     if (response.status !== 200) {
    //         console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
    //         return;
    //     }
    response.json())
    .then(data => {
        console.log(data.data);
        appendData(data.data);
    })      
    // })
    .catch(err => console.error(`Fetch Error :-S ${err}`));
}

function withAxios(){
    axios.get("https://reqres.in/api/users")
    .then(response => appendData(response.data.data))
    .catch(err => console.error(err));
}

function getSingle(){
    fetch('https://reqres.in/api/users/5')
    .then((response) => {
        if (response.status !== 200) {
            console.log(`Looks like there was a problem.Status Code: ${ response.status }`);
            return;
        }
    response.json()
    .then(data => {
        console.log(data.data);
        let trainer = document.createElement("div");
        let id = document.createElement("card");
        id.innerText = "ID: " + data.data.id;
        trainer.appendChild(id);
        let fname = document.createElement("p");
        fname.innerText = "Firstname: " + data.data.first_name;
        trainer.appendChild(fname);
        let lname = document.createElement("p");
        lname.innerText = "Lastname: " + data.data.last_name;
        trainer.appendChild(lname);
        dataList.appendChild(trainer);
    });         
    })
    .catch(err => console.error(`Fetch Error :-S ${err}`));
}

function postData(){
    fetch("https://reqres.in/api/users", {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
           name: "Morpheus",
           job: "Leader"
          })
        })
        .then(res => res.json())
        .then(data => console.log(`Request succeeded with JSON response ${data.name}`))
        .catch(error => console.error(`Request failed ${error}`));
}

function postStatus1(){
    fetch("https://reqres.in/api/register", {
        method: 'post',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            email: "eve.holt@reqres.in",
            password: "pistol"
          })
        })
        .then(res => res.json())
        .then(data => console.log(`Request succeeded with JSON response ${data.token}`))
        .catch(error => console.error(`Request failed ${error}`));
}

function postStatus2(){
    fetch("https://reqres.in/api/login", {
      method: 'post',
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka"
        })
    })
    .then(res => res.json())
    .then(data => console.log(`Request succeeded with JSON response ${data.token}`))
    .catch(error => console.error(`Request failed ${error}`));
}

function appendData(data){
    for(let i = 0; i<data.length; i++){
        let trainer = document.createElement("div");
        let id = document.createElement("card");
        id.innerText = "ID: " + data[i].id;
        trainer.appendChild(id);
        let fname = document.createElement("p");
        fname.innerText = "Firstname: " + data[i].first_name;
        trainer.appendChild(fname);
        let lname = document.createElement("p");
        lname.innerText = "Lastname: " + data[i].last_name;
        trainer.appendChild(lname);
        dataList.appendChild(trainer);
    }
}