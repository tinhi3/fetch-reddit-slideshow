// Global variable declared

let iterator = 0

// Step 1//
// Search bar & search results
// Listening for an event to run a block of code

const form = document.getElementById("inputform")
console.log(form)
// add an eventListener to my submit input button
form.addEventListener("submit", (event) => {

    event.preventDefault()

    const userSearchTerm = input.value
    console.log(userSearchTerm)
    // Plug in the "userSearchTerm" into the API fetch request
    fetch(`https://www.reddit.com/search.json?q="${userSearchTerm}"+nsfw:no+type:image`)
    .then(res => res.json())
    .then(photoLoop)
    .catch()
})


//Step 2//

// Div to store images when iterating
// Here we are grabbing the images returned from our search and sorting through them to display
// Then we will take the images we like and put them into the "emptyArray"

let i = 0
const photoLoop = (arrayObject) => {    
    
    // not using this right now
    // const urlPath = arrayObject.data.children[i].data.preview.image[i].data.url
    // const urlPath2 = arrayObject.data.children[i].data.url

    // Loop to iterate/run through the stored images

    let emptyArray = []
    for (let i = 0; i < 30; i++) {
        emptyArray[i] = arrayObject.data.children[i].data.url
        console.log("emptyArray" + emptyArray)
    
    slideLoop(emptyArray)
    }}  


// Step 3 
//take the cleaned images and put them into the emptyArray to display in the slideshow Div. 

const slideLoop = (emptyArray) => {
    console.log("iterator:" + iterator)
    const slidePhotoDivGrab = document.querySelector("#slideshow")
    slidePhotoDivGrab.innerHTML = `<img src="${emptyArray[iterator]}" + width=400 + heigth=400 /img>`
    
    
    document.querySelector("body").appendChild(slidePhotoDivGrab)
    iterator++
}

// setInterval for later when images populate consistently
// setInterval(slideLoop, 3000)


stopSlideShow.addEventListener("click", function (event) {
    location.reload()
})



//     const slidePhotoDivGrab = document.querySelector('#slideshow')
// // have the pictures iterate through
//     // let arrayObject = 0
//     // for (let i = 0; i < 15; i++)
//     let imageArray = arrayObject.data.children
//     console.log(imageArray)

//     const photoDiv = document.createElement('div')

//     // console.log(arrayObject.data.children[0].data.url)

//     photoDiv.innerHTML = `<img src="${arrayObject.data.children[1].data.url}" + width=600 + height=600 /img>` 

//     document.querySelector('body').appendChild(photoDiv)
//     console.log(arrayObject)
// }


    
// const redditApiUrl = 'https://www.reddit.com/r/pics/.json?jsonp+nsfw:no'
// const redditApiUrl1 =  https://www.reddit.com/r/aww.json

// let imageSearch = "dogs"   // THIS WORKED 
// const redditApiUrl2 =  `https://www.reddit.com/search.json?q="${imageSearch}"+nsfw:no+type:image`  // THIS WORKED


// https://www.reddit.com/r/aww.json

// redditFetch(redditApiUrl2)
// white_check_mark
// eyes
// raised_hands





///////////////////////////////////////



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