// const container = document.querySelector("#container")

// const onFetchSuccess = () => {
    //     console.log("on success")
    // }
    
    // const onFetchFailure = () => {
        //     console.log("on failure")
        // }
        
        
        // Calling back to HTML

// Create Div to store images
let i = 0
const loopPhoto = (arrayImages) => {

    let emptyArray = []
    for (let i = 0; i < 20; i++) {
        emptyArray[i] = 
        arrayImages.data.children[i].data.url
        console.log(emptyArray)
    }
}

// Slideshow Div
const slidePhotoDivGrab = 
document.querySelector("#slideshow")
// have pictures iterate through array
// let arrayImages = 0
// for (let i= 0; i < 15;i++)
let imageArray = imageArray.data.children
console.log(imageArray)


// Div for photos
const photoDiv = document.createElement("div")

// Test
// console.log(arrayImages.data.children[0].data.url)

pictureDiv.innerHTML = `<img src="${imageArray.data.children[1].data.url}" + width=400 + height=400 /img>`

    const x = 1
    const previewPath = data.children[x].data.preview.image[x.source.url

document.querySelector("body").appendChild(photoDiv)

        console.log(arrayImages)

// Search/Results bar

const searchForm = document.getElementById("inputform")
console.log(form)
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const userSearch = input.value
    console.log(userSearch)

    fetch(`http://www.reddit.com/search.json?q="${userSearch}+nsfw:no`)

    .then(res => res.json())

    .then(photoLoop)

    .catch()
})




















// document.addEventListener("DOMContentLoaded", () => {
//     fetch(``)
//     .then(res=>res.json())
//     .then(data=>{
//         let img
//         img = document.getElementById("rdt");
//         for(let i = 0; i < data.children.length; i++) 
//         {
//         img.innerHTML +="<img src='" + data.data.children[i].data.thumbnail +
//         }
//     })
// })









// const onGetSearchSuccess = (redditArray) => {
//     let img = document.querySelector(".item")
//     for (let i = 0; i < redditArray.data.children.length; i++) {
//         img.innerHTML = `<img src="${redditArray.data.children[i]
//         data.url}" + width=200 + height=200/>`
//     }
// }





/////////////////////////////////////////////////////////////////////////////////////////////////
//DOMCONTENT


// once the DOM is loaded, run said block of code
// document.addEventListener("DOMContentLoaded", () => {
//     //fetch is an interface of AJAX
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
//     // if this is successful it will resolve and be passed to a `.then()`
//     // intake a `res` or response from fetch and change to JSON
//     // always want to change reponse object to JSON FIRST (ALWAYS!!)
//     .then(res => res.json())
//     // passing on JSON from the previous .then() to our success function
//     .then(onFetchSuccess)
//     //if this fails for whatever reason it will be rejected and passed to the `.catch`
//     //passing an error to our failure function
//     .catch(onFetchFailure)
// })


///////////////////////////////////////////////////////////////////////////////////////////////////