//menu page java - menu cards

//entering the data for each of the products
let products = {
    data: [
    {
        productName: "Basil Pesto Spoons, 4-Pack Cutlery",
        category: "Spoons",
        price: "3",
        image: "no_image_filler.jpg",
    },
    {
        productName: "Basil Pesto Forks, 4-Pack Cutlery",
        category: "Forks",
        price: "3",
        image: "no_image_filler.jpg",  
    },
    {
        productName: "Cocoa Spoons, 4-Pack Cutlery",
        category: "Spoons",
        price: "3",
        image: "no_image_filler.jpg",  
    },
    {
        productName: "Cocoa Forks, 4-Pack Cutlery",
        category: "Forks",
        price: "3",
        image: "no_image_filler.jpg",  
    },
    {
        productName: "Sesame Spoons, 4-Pack Cutlery",
        category: "Spoons",
        price: "3",
        image: "no_image_filler.jpg",  
    },
    {
        productName: "Sesame Forks, 4-Pack Cutlery",
        category: "Forks",
        price: "3",
        image: "no_image_filler.jpg",  
    },
    {
        productName: "Cocoa Spoons and Forks, 4-Pack (mixed 2ea) Cutlery",
        category: "Combined",
        price: "3",
        image: "no_image_filler.jpg",  
    },
    {
        productName: "Basil Spoons and Forks, 4-Pack (mixed 2ea) Cutlery",
        category: "Combined",
        price: "3",
        image: "no_image_filler.jpg",  
    },
    {
        productName: "Sesame Spoons and Forks, 4-Pack (mixed 2ea) Cutlery",
        category: "Combined",
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
    image.classList.add("tip");
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
elements.forEach(element => {
    //display all cards on 'all' button click
    if(value == "all"){
        element.classList.remove("hide");
    }
    else{
    //check if element contains category class
    if(element.classList.contains(value)){
            //display element based on category
            element.classList.remove("hide");
        } else {
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

    //loop through all elements
    elements.forEach((element, index) => {
        //check if text includes the search value
        if(element.innerText.includes(searchInput.toLowerCase())){
            //display matching card
            cards[index].classList.remove("hide");
        }else{
            //hide other cards
            cards[index].classList.add("hide");
        }
        
    })

});



//Intially display all products
window.onload = () => {
    filterProduct("all");
};



//faceFunction

function faceFunction(){
    Swal.fire({
        title: 'Are you sure you would like to change pages?',
        text: "You will be taken to https://www.facebook.com/ecoeats.nz/",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
      location.replace("https://www.facebook.com/ecoeats.nz/")
        }
      })

    }

    //instaFunction

function instaFunction(){
    Swal.fire({
        title: 'Are you sure you would like to change pages?',
        text: "You will be taken to https://www.instagram.com/ecoeats.nz",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
      location.replace("https://www.instagram.com/ecoeats.nz")
        }
      })

    }










