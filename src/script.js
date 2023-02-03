const people = document.getElementById("people")
const btn = document.querySelector("button")
const btns = document.querySelector("#buttons")
let searchTerm = ""
let page = 1
let mainHTML = ""

// btn.forEach( i => console.log(i.innerText))

// btn.forEach(i => {
//     i.addEventListener("click", function(){
//         let result = ""
//         if(i.innerText === "People") {
//             searchTerm = "people"
//             fetch("https://swapi.dev/api/people")
//             .then(res => res.json())
//             .then(data => result = data)
//         }
//         else if(i.innerText === "Films") {
//             searchTerm = "films"
//         }
//         else if(i.innerText === "Planets") {
//             searchTerm = "planets"
//         }
//         else if(i.innerText === "Species") {
//             searchTerm = "species"
//         }
//         else if(i.innerText === "Starships") {
//             searchTerm = "starships"
//         }
//         else if(i.innerText === "Vehicles") {
//             searchTerm = "vehicles"
//         }
//         document.querySelector("main").innerHTML = result
//     })
// })


btns.addEventListener("click", function(e) {
    const searchTerm = e.target.textContent.trim().toLowerCase()
    fetch(`https://swapi.dev/api/${searchTerm}/?page=${page}`)
    .then(res => res.json())
    .then(data => renderResults(data, searchTerm, page))
})

function renderResults(data, searchTerm, page) {
    mainHTML = ""
    if(searchTerm === "people") {
    data.results.forEach(result => {
        if(result.starships) {
            mainHTML += `
            <div>
                <p>${result.name}</p>
                <p>${result.height}</p>
                <p>${result.mass}</p>
                <p>${result.hair_color}</p>
                <p>${result.skin_color}</p>
                <p>${result.eye_color}</p>
                <p>${result.birth_year}</p>
                <p>${result.gender}</p>
                <button onClick="renderHomeWorld('${result.homeworld}', 'homeworld')">Home world</button>
                <button onClick="renderHomeWorld('${result.films}', 'films')">Films</button>
                <button onClick="renderHomeWorld('${result.vehicles}', 'vehicles')">Vehicles</button>
                <button id="starships" onClick="renderHomeWorld('${result.starships}', 'starships')">Starships</button>
            </div>
        `    
        }
        else {
        mainHTML += `
            <div>
                <p>${result.name}</p>
                <p>${result.height}</p>
                <p>${result.mass}</p>
                <p>${result.hair_color}</p>
                <p>${result.skin_color}</p>
                <p>${result.eye_color}</p>
                <p>${result.birth_year}</p>
                <p>${result.gender}</p>
                <button onClick="renderHomeWorld('${result.homeworld}', 'homeworld')">Home world</button>
                <button onClick="renderHomeWorld('${result.films}', 'films')">Films</button>
                <button onClick="renderHomeWorld('${result.vehicles}', 'vehicles')">Vehicles</button>
                
            </div>
        `
        }
    })


    }
    else if (searchTerm === "films") {
        data.results.forEach(result => {
            mainHTML += `
                <div>
                <p>${result.title}</p>
                <p>${result.episode_id}</p>
                <p>${result.opening_crawl}</p>
                <p>${result.director}</p>
                <p>${result.producer}</p>
                <p>${result.release_date}</p>

                <button onClick="renderHomeWorld('${result.characters}', 'characters')">Characters</button>
                <button onClick="renderHomeWorld('${result.planets}', 'planets')">Planets</button>
                <button onClick="renderHomeWorld('${result.starships}', 'starships')">Starships</button>
                <button onClick="renderHomeWorld('${result.vehicles}', 'vehicles')">Vehicles</button>
                </div>
            `
        })
    }
    else if (searchTerm === "planets") {
        data.results.forEach(result => {
            mainHTML += `
                <div>
                <p>${result.name}</p>
                <p>${result.rotation_period}</p>
                <p>${result.orbital_period}</p>
                <p>${result.diameter}</p>
                <p>${result.climate}</p>
                <p>${result.gravity}</p>
                <p>${result.terrain}</p>
                <p>${result.surface_water}</p>
                <p>${result.population}</p>

                <button onClick="renderHomeWorld('${result.films}', 'films')">Films</button>
                </div>
            `
        })
    }
    else if (searchTerm === "starships") {
        data.results.forEach(result => {
            mainHTML += `
            <div>
            <p>${result.name}</p>
            <p>${result.model}</p>
            <p>${result.manufacturer}</p>
            <p>${result.cost_in_credits}</p>
            <p>${result.length}</p>
            <p>${result.max_atmosphering_speed}</p>
            <p>${result.crew}</p>
            <p>${result.passengers}</p>
            <p>${result.cargo_capacity}</p>
            <p>${result.consumables}</p>
            <p>${result.hyperdrive_rating}</p>
            <p>${result.MGLT}</p>
            <p>${result.starship_class}</p>

            <button onClick="renderHomeWorld('${result.films}', 'films')">Films</button>
            </div>
        `
        })
    }
    else if (searchTerm === "species") {
        data.results.forEach(result => {
            mainHTML += `
            <div>
            <p>${result.name}</p>
            <p>${result.classification}</p>
            <p>${result.designation}</p>
            <p>${result.average_height}</p>
            <p>${result.skin_colors}</p>
            <p>${result.hair_colors}</p>
            <p>${result.eye_colors}</p>
            <p>${result.average_lifespan}</p>
            <p>${result.language}</p>

            <button onClick="renderHomeWorld('${result.films}', 'films')">Films</button>
            <button onClick="renderHomeWorld('${result.people}', 'people')">People</button>
            <button onClick="renderHomeWorld('${result.homeworld}', 'homeworld')">Home world</button>
            </div>
            `
        })
    }
    else if (searchTerm === "vehicles") {
        data.results.forEach(result => {
            mainHTML += `
            <div>
            <p>${result.name}</p>
            <p>${result.model}</p>
            <p>${result.manufacturer}</p>
            <p>${result.cost_in_credits}</p>
            <p>${result.length}</p>
            <p>${result.max_atmosphering_speed}</p>
            <p>${result.crew}</p>
            <p>${result.passengers}</p>
            <p>${result.cargo_capacity}</p>
            <p>${result.consumables}</p>
            <p>${result.vehicle_class}</p>

            <button onClick="renderHomeWorld('${result.films}', 'films')">Films</button>
            </div>
            `
        })
    }
   
    document.querySelector("main").innerHTML = `<button id="next" onClick="nextPage('${searchTerm}', '${Number(page)}')">Next</button>` + 
    `<button id="previous" onClick="prevPage('${searchTerm}', '${Number(page)}')">Previous</button>`
     + mainHTML

    if (!data.next && !data.previous) {
        document.getElementById("next").disabled = true
        document.getElementById("previous").disabled = true
    }
    else if(!data.previous) {
        document.getElementById("previous").disabled = true
    }
    else if (!data.next) {
        document.getElementById("next").disabled = true
    }
}

function nextPage(searchTerm, page) {
    page = Number(page) + 1
    fetch(`https://swapi.dev/api/${searchTerm}/?page=${page}`)
    .then(res => res.json())
    .then(data => renderResults(data, searchTerm, page))
}

function prevPage(searchTerm, page) {
    page = Number(page) - 1
    fetch(`https://swapi.dev/api/${searchTerm}/?page=${page}`)
    .then(res => res.json())
    .then(data => renderResults(data, searchTerm, page))
}

function renderHomeWorld(url, model) {
    mainHTML = ""
    const urlArray = url.split(",")
    if(urlArray.length === 1) {
        fetch(url)
        .then(res => res.json())
        .then(data => render(Object.keys(data), data, model))
    } else {
        urlArray.forEach(i => {
            fetch(i)
        .then(res => res.json())
        .then(data => {
            render(Object.keys(data), data, model)
           })
        })
    }
   
}

function render(keys, data, model) {
    if(model === "homeworld") {
        keys.filter(key => key !== "residents" && key !== "films" &&
         key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${data[key]}</p>`
        })
        mainHTML += `<button onClick="renderHomeWorld('${data.films}', 'films')">Films</button>`
    }
    else if(model === "films") {
        keys.filter(key => key !== "release_date" && key !== "characters" &&
         key !== "planets" && key !== "starships" && key !== "vehicles" &&
         key !== "species" && key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${data[key]}</p>`
        })
        mainHTML += `
        <button onClick="renderHomeWorld('${data.characters}', 'characters')">Characters</button>
        <button onClick="renderHomeWorld('${data.starships}', 'starships')">Starships</button>
        <button onClick="renderHomeWorld('${data.vehicles}', 'vehicles')">Vehicles</button>
        <button onClick="renderHomeWorld('${data.species}', 'species')">Species</button>
        `
    }
    else if(model === "characters") {
        if (data["starships"].length >= 1) {
            keys.filter(key => key !== "homeworld" && key !== "films" &&
         key !== "starships" && key !== "vehicles" &&
         key !== "species" && key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${data[key]}</p>`
        })
        mainHTML += `<button onClick="renderHomeWorld('${data.starships}', 'starships')">Starships</button>`    
        }
        else if(data["starships"].length < 1){
            keys.filter(key => key !== "homeworld" && key !== "films" &&
         key !== "starships" && key !== "vehicles" &&
         key !== "species" && key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${data[key]}</p>`
        })
        mainHTML += `<p>No Starships</p>`
    }
        
        // mainHTML += `<button onClick="renderHomeWorld('${data.starships}', 'starships')">Starships</button>`
    }
    else if(model === "people") {
        keys.filter(key => key !== "homeworld" && key !== "films" &&
         key !== "starships" && key !== "vehicles" &&
         key !== "species" && key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${data[key]}</p>`
        })
        mainHTML += `<button onClick="renderHomeWorld('${data.starships}', 'starships')">Starships</button>`
    }
    else if(model === "starships") {
        keys.filter(key => key !== "films" && key !== "pilots" &&
         key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${data[key]}</p>`
        })
    }
    else if(model === "vehicles") {
        keys.filter(key => key !== "films" && key !== "pilots" &&
         key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${data[key]}</p>`
        })
    }
    else if(model === "planets") {
        keys.filter(key => key !== "films" && key !== "residents" &&
         key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${data[key]}</p>`
        })
    }
    
    document.querySelector("main").innerHTML = mainHTML
}

