let petSalon = {
    name:"the fashion pet",
    phone:"999-999-9999",
    adress:{
        country:"US",
        city:"San Francisco",
        ZipCode:"12345",
    },
    pets:[]
}

//constructor (blueprint)
function Pet(name,age,gender,service){
    //attributes=parameter;
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
}
function isValid(pet){
    let validation=true; // we are fine
    if(pet.name==""){
        validation=false;
        alert("Please add a name");
    }
    if(pet.service==""){
        validation=false;
        alert("Please add a service");
    }
    return validation; //  returning the result of the validation
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    
    let newPet = new Pet(inputName,inputAge,inputGender,inputService);

    if(isValid(newPet)==true){
        petSalon.pets.push(newPet);
        //displayCard();
        displayRow();
        displayServiceCount();
        console.log(petSalon.pets);// displaying the pets array
    }
}

function deletePet(petId){
    console.log("Deleting pet ..." + petId);
    document.getElementById(petId).remove();
    petSalon.pets.splice(petId, 1);
    displayRow();
    displayServiceCount();
}

function init(){
    let pet1 = new Pet("Scooby",99,"Male","Grooming");
    let pet2 = new Pet("Scrappy",79,"Male","Vaccines");
    let pet3 = new Pet("test 2",99,"Male","Grooming");
    let pet4 = new Pet("test",79,"Male","Vaccines");
    petSalon.pets.push(pet1,pet2,pet3,pet4);
    
    //displayCard();
    displayRow();
    displayServiceCount();
}

window.onload=init;// wait to render the HTML then load the init