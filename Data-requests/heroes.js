"use strict";

const display = document.getElementById("display");//get section tag

axios.get("https://gist.githubusercontent.com/mariodev12/a923f2b651a005ca3ca7f851141efcbc/raw/39b06a32e4a58fc1fe63c7478a97edccd21138f1/superheroes.json")
.then(response => showData(response.data))
.catch(err => console.error(err));

function showData(data){
    for(let i =0; i<data.length; i++){
        let all = document.createElement("div");
        const superName = document.createElement("button");
        superName.innerText = data[i].superhero;
        const br = document.createElement("br");
        all.appendChild(br);
        all.appendChild(superName);
        superName.addEventListener("click", function(){
            alert("IDENTITY: " + data[i].alter_ego);
        })
        display.appendChild(all);
    }
}