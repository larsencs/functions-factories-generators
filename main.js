const reindeerFactory = (name, color) =>{
    const reindeerObject = {}
    reindeerObject.name = name
    reindeerObject.color = color

    return reindeerObject
}
const generateColors = function* (){
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let i = 0
    return colors[i]
    i++
}
const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    const coloredReindeer = []
    // Write a for loop that looks at each reindeer
    for(let i = 0; i<reindeer.length; i++){
        const reindeerObj = (reindeerFactory(reindeer[i]), generateColors())
        coloredReindeer.push(reindeerObj)
    }
        // Invoke factory function to create reindeer object

        // Put new reindeer object in coloredReindeer array


    // Return coloredReindeer array

    return coloredReindeer
}


console.log(coloredReindeerBuilder())





// ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]

