//adds elements to the DOM using a function defined in generator.js
const addElement = () =>{
    const main = document.getElementById("main-html")
    let renderedElements = "<article id='colored-reindeer'>"
    const elementsToRender = coloredReindeerBuilder()

<<<<<<< HEAD
    //loops through array pushing each index to a string
    for(let i = 0; i<elementsToRender.length; i++){
        renderedElements += `<section style="color: ${elementsToRender[i].color}">${elementsToRender[i].name}</section>`
    }
    renderedElements += "</article>"
    //returns that string to HTML
    main.innerHTML += renderedElements

}
addElement()
=======
    return reindeerObject
}
const generateColors = function* (){
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let i = 0
    while(i < colors.length){
        yield colors[i]
        i+=1
    }
}
const colorFactory = generateColors()
const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    const coloredReindeer = []
    // Write a for loop that looks at each reindeer
    for(let i = 0; i<reindeer.length; i++){
        const name = reindeer[i]
        const color = colorFactory.next().value
        const reindeerObj  = reindeerFactory(name, color)
        coloredReindeer.push(reindeerObj)
    }


    // Return coloredReindeer array

    return coloredReindeer
}

console.log(coloredReindeerBuilder())




// ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
>>>>>>> main

