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

    for (let i = 0; i < randomImage.length; i++) {
        let j = Math.floor(Math.random()* randomImage.length)
        newArray.push(randomImage[j]) 
    }

    for (let index = 0; index < cards.length; index++) {
        cards[index].setAttribute("src", newArray[index]) //écrase l'attribut
    }
});

let allcard = document.querySelectorAll(".soloCard")

let arrayDobble = [] //array that will take the 2 cards and compare them 
 
allcard.forEach(element => {
    element.addEventListener('click', (e) =>{
        element.classList.remove("back") //retirer la classe back(face cachée)
        element.classList.add("front") //ajouter la classe front(face visible)
        arrayDobble.push(element.firstElementChild.getAttribute("src")) 
        element.firstChild.style.display="flex"

        let frontcarte = document.querySelectorAll(".front")[0]
        let frontcarteDeux = document.querySelectorAll(".front")[1]

        if (arrayDobble.length == 2) {
            if (arrayDobble[0] == arrayDobble[1]) {
                frontcarte.classList.add("disabledCard")
                frontcarteDeux.classList.add("disabledCard")
                frontcarte.classList.add("correct")
                frontcarte.classList.remove("front")
                frontcarteDeux.classList.add("correct")
                frontcarteDeux.classList.remove("front")
                arrayDobble = [] //vider le tableau

            } else {
                setTimeout(() => { //mettre un délai si les deux cartes sont différentes car en un click (addevent) il y a plusieurs actions qui se réalisent en même temps (voir au-dessus)
                    frontcarte.classList.remove("front")
                    frontcarte.classList.add("back")
                    frontcarteDeux.classList.remove("front")
                    frontcarteDeux.classList.add("back")
                    frontcarte.firstChild.style.display="none"
                    frontcarteDeux.firstChild.style.display="none"
                    arrayDobble = []
                }, 800);
            }
        }   
    }) 
})
