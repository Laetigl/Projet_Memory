// Create an random images for changing the display of the cards
document.addEventListener('DOMContentLoaded', () => {
    let cards = document.querySelectorAll(".soloCard img") 
    let randomImage = [
        './public/src/image/monsters/8969799.png',
        './public/src/image/monsters/8969812.png',
        './public/src/image/monsters/8969791.png',
        './public/src/image/monsters/8969777.png',
        './public/src/image/monsters/8969806.png',
        './public/src/image/monsters/8969799.png',
        './public/src/image/monsters/8969812.png',
        './public/src/image/monsters/8969791.png',
        './public/src/image/monsters/8969777.png',
        './public/src/image/monsters/8969806.png'
    ]
    let newArray = []

    while (randomImage.length > 0) {
        let i = Math.floor(Math.random() * randomImage.length);
        newArray.push(randomImage[i]);
        randomImage.splice(i, 1);
    }

    for (let index = 0; index < cards.length; index++) {
        cards[index].setAttribute("src", newArray[index]) //écrase l'attribut
    }
});

let allcard = document.querySelectorAll(".soloCard")

let arrayDobble = [] //array that will take the 2 cards and compare them 

//Every time we click on a card:
allcard.forEach(element => {
    element.addEventListener('click', (e) =>{
        element.classList.remove("back") //remove the class "back" (hidden face)
        element.classList.add("front") //add the class "front" (visible face)
        arrayDobble.push(element.firstElementChild.getAttribute("src"))  //push the src of the div car into the array : will be compare on the condition below (when 2 cards are added)
        element.firstChild.style.display="flex" //display the image (from "none" to "flex")

        let frontcarte = document.querySelectorAll(".front")[0] //1st card
        let frontcarteDeux = document.querySelectorAll(".front")[1] //2st card

        if (arrayDobble.length == 2) { //when the array is filled with 2 cards
            if (arrayDobble[0] == arrayDobble[1]) { //if the 2 cards are the same
                frontcarte.classList.add("disabledCard")
                frontcarteDeux.classList.add("disabledCard")
                frontcarte.classList.add("correct")
                frontcarte.classList.remove("front")
                frontcarteDeux.classList.add("correct")
                frontcarteDeux.classList.remove("front")
                arrayDobble = [] //empty out the array for the next click

            } else {
                setTimeout(() => { //mettre un délai si les deux cartes sont différentes car en un click (addevent) il y a plusieurs actions qui se réalisent en même temps (voir au-dessus) // adding a delay if the two cards are differents
                    frontcarte.classList.remove("front")
                    frontcarte.classList.add("back")
                    frontcarteDeux.classList.remove("front")
                    frontcarteDeux.classList.add("back")
                    frontcarte.firstChild.style.display="none"
                    frontcarteDeux.firstChild.style.display="none"
                    arrayDobble = [] //empty out the array for the next click
                }, 1000);
            }
        }   
    }) 
})
