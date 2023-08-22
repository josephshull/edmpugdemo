console.log("I am playing music, can't you hear it?")

let headerElement = document.getElementById('pageheader')
headerElement.addEventListener('click', () => {
    console.log("hey! stop clickling that")
    let promise = fetch('http://localhost:3000/artistmetrics')
    console.log("promise", promise)
    promise.then((response) => {
        console.log("response", response)
        response.json().then((jsonData) => {
            console.log("jsonStuff", jsonData)
        })
    })
})