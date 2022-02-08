
var chrs = [
    {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
    {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
    {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
    {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
    {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
    {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];


// loop through the above array to append a div using .append() into the body tag
let eleName = document.querySelector("body");
for(obj of chrs){
    let name = document.createElement("div");
    let innerDiv = document.createElement("div");
    eleName.append(name);
    name.classList.add("character");
    let brand = document.createElement("p");
    let status = document.createElement("p");
    let vehicle = document.createElement("p");
    let text = "Name: "+obj.name;
    let text2 = obj.class;
    text2 = "Class: "+text2.toUpperCase();
    let text3 = "Vehicle: "+obj.vehicle;
    brand.append(text);
    status.append(text2);
    vehicle.append(text3);
    innerDiv.append(brand);
    innerDiv.append(status);
    innerDiv.append(vehicle);

    let image = document.createElement("img");
    if (obj.afl === "autobot"){
        image.classList.add("autobot");
        image.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
        name.style.backgroundColor = "red";
        image.style.border = "none";
    }
    else if(obj.afl === "decepticon") {
        image.classList.add("decepticon");
        image.src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
        name.style.backgroundColor = "purple";
        image.style.border = "none";
    }
    innerDiv.append(image);
    name.append(innerDiv);

    if (obj.vehicle === "truck") {
        vehicle.style.color = "blue";
    }
    else if (obj.vehicle === "tank") {
        vehicle.style.color = "green";
    }
    else if (obj.vehicle === "card"){
        vehicle.style.color = "gold";
    }
    else if (obj.vehicle === "plane"){
        vehicle.style.color = "white";
    }
}

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white
