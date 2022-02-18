const reindeerFactory = (name, color) =>{
    const reindeerObject = {}
    reindeerObject.name = name
    reindeerObject.color = color

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

