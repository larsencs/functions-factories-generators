//factory function to create objects and assign a name and color property
const reindeerFactory = (name, color) =>{
    const reindeerObject = {}
    reindeerObject.name = name
    reindeerObject.color = color

    return reindeerObject
}
//generator function that assigns colors in the order of the index each time it is called
const generateColors = function* (){
    const colors = ["Blue", "Red", "Orange", "Purple", "Goldenrod", "Aquamarine", "Olive", "Azure", "Fuchsia", "Chocolate", "Salmon", "Amaranth"]
    let i = 0
    while(i < colors.length){
        yield colors[i]
        i+=1
    }
}
//calls the generator function, as calling the generator function directly results in an object of "Generator"
const colorFactory = generateColors()

//builds an array of colored Reindeer using both the factory and generator functions
const coloredReindeerBuilder = function () {
    const reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"]

    const coloredReindeer = []
    
    for(let i = 0; i<reindeer.length; i++){
        const name = reindeer[i]
        const color = colorFactory.next().value
        const reindeerObj  = reindeerFactory(name, color)
        coloredReindeer.push(reindeerObj)
    }

    return coloredReindeer
}