//adds elements to the DOM using a function defined in generator.js
const addElement = () =>{
    const main = document.getElementById("main-html")
    let renderedElements = "<article id='colored-reindeer'>"
    const elementsToRender = coloredReindeerBuilder()

    //loops through array pushing each index to a string
    for(let i = 0; i<elementsToRender.length; i++){
        renderedElements += `<section style="color: ${elementsToRender[i].color}">${elementsToRender[i].name}</section>`
    }
    renderedElements += "</article>"
    //returns that string to HTML
    main.innerHTML += renderedElements

}
addElement()

