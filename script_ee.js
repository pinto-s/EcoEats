//menu page java - menu cards

//entering the data for each of the products
let products = {
    data: [
    {
        productName: "Basil Pesto Spoons, 4-Pack Cutlery",
        category: "Basil Pesto" + "4-Pack" + "Spoons",
        price: "3",
        image: "no_image_filler.jpg",
    },
    {
        productName: "Basil Pesto Forks, 4-Pack Cutlery",
        category: "Cocoa" + "4-Pack" + "Forks",
        price: "3",
        image: "no_image_filler.jpg",  
    },
    {
        productName: "Cocoa Spoons, 4-Pack Cutlery",
        category: "Cocoa" + "4-Pack" + "Spoons",
        price: "3",
        image: "no_image_filler.jpg",  
    },
    {
        productName: "Cocoa Forks, 4-Pack Cutlery",
        category: "Cocoa" + "4-Pack" + "Forks",
        price: "3",
        image: "no_image_filler.jpg",  
    }  
],
};

for(let i of products.data){
    //Creating the menu cards
    let card = document.createElement("div");
    //The cards should have categories and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    document.getElementById("products").appendChild(card);

    //container
    let container = document.createElement("div");
    container.classList.add("container");
    card.appendChild(container);
    
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toLowerCase();
    container.appendChild(name);

    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
}

//Parameters passed from buttons (Same parameter as the associated category)
function filterProduct(value){
    //Button class code
let buttons = document.querySelectorAll(".button-value");
buttons.forEach(button => {
    //check if value equals innerText
    if (value.toLowerCase() == button.innerText.toLowerCase()){
        button.classList.add("active");
    }else{
        button.classList.remove("active");
    }
});

//select all cards
let elements = document.querySelectorAll(".card");
//loop through all cards
elements.forEach((element) => {
    //display all cards on the 'all' button click
    if (value == "all"){
        element.classList.remove("hide"); 
    }else{
        //check if element contains category class
        if(element.classList.contains(value)){
            //display element based on category
            element.classList.remove("hide");
        }else{
            //hide other elements
            element.classList.add("hide");
        }
    }

});
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
    //intialisations
    let searchInput = document.getElementById("search-input").value;
    let elements =  document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    console.log(searchInput);  

});

//Intially display all products
window.onload = () => {
    filterProduct("all");
};


