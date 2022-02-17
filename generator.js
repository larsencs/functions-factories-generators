const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    const coloredReindeer = []
    // Write a for loop that looks at each reindeer
    for(let i = 0; i<reindeer.length; i++){
        console.log(reindeer[i])
        // console.log(reindeerFactory(reindeer[i]), generateColors())
    }
        // Invoke factory function to create reindeer object

        // Put new reindeer object in coloredReindeer array


    // Return coloredReindeer array

    // return coloredReindeer
}
const reindeerFactory = (name, color) =>{
    reindeerObject = {}
    reinderObject.name = name
    reindeerObject.color = color

    return reindeerObject
}
const generateColors = function* (){
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let i = 0
    return colors[i]
    i++
}

coloredReindeerBuilder()





// ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]

