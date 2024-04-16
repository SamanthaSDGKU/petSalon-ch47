let petSalon = {

    name:"the fashion pet",
    phone:"999-999-9999",
    adress:{
        country:"US",
        city:"San Francisco",
        ZipCode:"12345",
    },
    pets:[
        {
            name:"Scooby",
            age:80,
            gender:"male",
        },
        {
            name:"Scrappy",
            age:60,
            gender:"male",
        },
        {
            name:"Tweety",
            age:85,
            gender:"female",
        },
        {
            name:"Sylvester",
            age:85,
            gender:"male",
        },

    ]

}
//just show the name of the pet
console.log(petSalon.pets[2].name)
//calculate the average age of the pets
let totalAge = 0;

for (let i=0; i<petSalon.pets.length; i++)
{
    totalAge=totalAge+petSalon.pets[i].age;
    //totalAge+=petSalon.pets[i].age; this another way of do it
}
let averageAge = totalAge/petSalon.pets.length;
console.log("total sum is "+ totalAge);
console.log("the average age of the pets: " + averageAge);
