function displayCard(){
    //get the HTML div to display the cards
    const DIV = document.getElementById("pets");
    let card="";
    //travel the array (for loop)
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        card+=`
        <div class="pet">
            <p>${pet.name}</p>
            <p>${pet.service}</p>
        </div>
        `;
    }
        //HTML template for the cards
    //insert the card into the HTML div
    DIV.innerHTML= card; 
}

function displayRow(){
    const TABLE = document.getElementById("petRows");
    let tr="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        tr+=`
            <tr id="${i}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.service}</td>
                <td>
                    <button class="delete-btn" onclick="deletePet(${i});"><i class="fa-solid fa-trash"></i></button>
                </td>
            </tr>
        `;
    }
    TABLE.innerHTML=tr;
}

function displayTypeCount(){
    
}
function displayServiceCount(){
    //declare the variables
    let grooming=0;
    let vaccines=0;
    let nails=0;
    //travel the array
    for(let i=0;i<petSalon.pets.length;i++){
        //get the current pet
        let pet = petSalon.pets[i];
        if(pet.service.toLowerCase()=="grooming"){
            grooming++;
        }
        if(pet.service.toLowerCase()=="vaccines"){
            vaccines++;
        }
        if(pet.service.toLowerCase()=="nails"){
            nails++;
        }
    }
    document.getElementById("totalGroomings").innerHTML=grooming;
    document.getElementById("totalVaccines").innerHTML=vaccines;
    document.getElementById("totalNails").innerHTML=nails;
    
}