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
        if(result.starships.length >= 1) {
            mainHTML += `
            <div>
                <p>Name: ${result.name}</p>
                <p>Height: ${result.height}</p>
                <p>Mass: ${result.mass}</p>
                <p>Hair color: ${result.hair_color}</p>
                <p>Skin color: ${result.skin_color}</p>
                <p>Eye color: ${result.eye_color}</p>
                <p>Birth year: ${result.birth_year}</p>
                <p>Gender: ${result.gender}</p>
                <button onClick="renderIndividualResult('${result.homeworld}', 'homeworld')">Home world</button>
                <button onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
                <button onClick="renderIndividualResult('${result.vehicles}', 'vehicles')">Vehicles</button>
                <button id="starships" onClick="renderIndividualResult('${result.starships}', 'starships')">Starships</button>
            </div>
        `    
        }
        else {
        mainHTML += `
            <div>
                <p>Name: ${result.name}</p>
                <p>Height: ${result.height}</p>
                <p>Mass: ${result.mass}</p>
                <p>Hair color: ${result.hair_color}</p>
                <p>Skin color: ${result.skin_color}</p>
                <p>Eye color: ${result.eye_color}</p>
                <p>Birth year: ${result.birth_year}</p>
                <p>Gender: ${result.gender}</p>
                <button onClick="renderIndividualResult('${result.homeworld}', 'homeworld')">Home world</button>
                <button onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
                <button onClick="renderIndividualResult('${result.vehicles}', 'vehicles')">Vehicles</button>
                
            </div>
        `
        }
    })


    }
    else if (searchTerm === "films") {
        data.results.forEach(result => {
            mainHTML += `
                <div>
                <p>Title: ${result.title}</p>
                <p>Episode id: ${result.episode_id}</p>
                <p>Opening crawl: ${result.opening_crawl}</p>
                <p>Director: ${result.director}</p>
                <p>Producer: ${result.producer}</p>
                <p>Release date: ${result.release_date}</p>

                <button onClick="renderIndividualResult('${result.characters}', 'characters')">Characters</button>
                <button onClick="renderIndividualResult('${result.planets}', 'planets')">Planets</button>
                <button onClick="renderIndividualResult('${result.starships}', 'starships')">Starships</button>
                <button onClick="renderIndividualResult('${result.vehicles}', 'vehicles')">Vehicles</button>
                </div>
            `
        })
    }
    else if (searchTerm === "planets") {
        data.results.forEach(result => {
            mainHTML += `
                <div>
                <p>Name: ${result.name}</p>
                <p>Rotation period: ${result.rotation_period}</p>
                <p>Orbital period: ${result.orbital_period}</p>
                <p>Diameter: ${result.diameter}</p>
                <p>Climate: ${result.climate}</p>
                <p>Gravity: ${result.gravity}</p>
                <p>Terrain: ${result.terrain}</p>
                <p>Surface water: ${result.surface_water}</p>
                <p>Population: ${result.population}</p>

                <button onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
                </div>
            `
        })
    }
    else if (searchTerm === "starships") {
        data.results.forEach(result => {
            mainHTML += `
            <div>
            <p>Name: ${result.name}</p>
            <p>Model: ${result.model}</p>
            <p>Manufacturer: ${result.manufacturer}</p>
            <p>Cost in credits: ${result.cost_in_credits}</p>
            <p>Length: ${result.length}</p>
            <p>Max atmosphering speed: ${result.max_atmosphering_speed}</p>
            <p>Crew: ${result.crew}</p>
            <p>Passengers: ${result.passengers}</p>
            <p>Cargo capacity: ${result.cargo_capacity}</p>
            <p>Consumables: ${result.consumables}</p>
            <p>Hyperdrive rating: ${result.hyperdrive_rating}</p>
            <p>MGLT: ${result.MGLT}</p>
            <p>Starship class: ${result.starship_class}</p>

            <button onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
            </div>
        `
        })
    }
    else if (searchTerm === "species") {
        data.results.forEach(result => {
            mainHTML += `
            <div>
            <p>Name: ${result.name}</p>
            <p>Classification: ${result.classification}</p>
            <p>Designation: ${result.designation}</p>
            <p>Average height: ${result.average_height}</p>
            <p>Skin colors: ${result.skin_colors}</p>
            <p>Hair colors: ${result.hair_colors}</p>
            <p>Eye colors: ${result.eye_colors}</p>
            <p>Average lifespan: ${result.average_lifespan}</p>
            <p>Language: ${result.language}</p>

            <button onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
            <button onClick="renderIndividualResult('${result.people}', 'people')">People</button>
            <button onClick="renderIndividualResult('${result.homeworld}', 'homeworld')">Home world</button>
            </div>
            `
        })
    }
    else if (searchTerm === "vehicles") {
        data.results.forEach(result => {
            mainHTML += `
            <div>
            <p>Name: ${result.name}</p>
            <p>Model: ${result.model}</p>
            <p>Manufacturer: ${result.manufacturer}</p>
            <p>Cost in credits: ${result.cost_in_credits}</p>
            <p>Length: ${result.length}</p>
            <p>Max atmosphering speed: ${result.max_atmosphering_speed}</p>
            <p>Crew: ${result.crew}</p>
            <p>Passenger: ${result.passengers}</p>
            <p>Cargo capacity: ${result.cargo_capacity}</p>
            <p>Consumables: ${result.consumables}</p>
            <p>Vehicle class: ${result.vehicle_class}</p>

            <button onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
            </div>
            `
        })
    }
   
    document.querySelector("main").innerHTML += `<div class="btns-parent"><button id="previous" onClick="prevPage('${searchTerm}', '${Number(page)}')">Previous</button>`
    + `<button id="next" onClick="nextPage('${searchTerm}', '${Number(page)}')">Next</button></div>` 
   document.getElementById("cards").innerHTML = mainHTML

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

function renderIndividualResult(url, model) {
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
            mainHTML += `<p>${key}: ${data[key]}</p>`
        })
        mainHTML += `<button onClick="renderIndividualResult('${data.films}', 'films')">Films</button>`
    }
    else if(model === "films") {
        keys.filter(key => key !== "release_date" && key !== "characters" &&
         key !== "planets" && key !== "starships" && key !== "vehicles" &&
         key !== "species" && key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `${key}: <p>${data[key]}</p>`
        })
        mainHTML += `
        <button onClick="renderIndividualResult('${data.characters}', 'characters')">Characters</button>
        <button onClick="renderIndividualResult('${data.starships}', 'starships')">Starships</button>
        <button onClick="renderIndividualResult('${data.vehicles}', 'vehicles')">Vehicles</button>
        <button onClick="renderIndividualResult('${data.species}', 'species')">Species</button>
        `
    }
    else if(model === "characters") {
        if (data["starships"].length >= 1) {
            keys.filter(key => key !== "homeworld" && key !== "films" &&
         key !== "starships" && key !== "vehicles" &&
         key !== "species" && key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${key}: ${data[key]}</p>`
        })
        mainHTML += `<button onClick="renderIndividualResult('${data.starships}', 'starships')">Starships</button>`    
        }
        else if(data["starships"].length < 1){
            keys.filter(key => key !== "homeworld" && key !== "films" &&
         key !== "starships" && key !== "vehicles" &&
         key !== "species" && key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${key}: ${data[key]}</p>`
        })
        mainHTML += `<p>Starships: n/a</p>`
    }
        
        // mainHTML += `<button onClick="renderHomeWorld('${data.starships}', 'starships')">Starships</button>`
    }
    else if(model === "people") {
        keys.filter(key => key !== "homeworld" && key !== "films" &&
         key !== "starships" && key !== "vehicles" &&
         key !== "species" && key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${key}: ${data[key]}</p>`
        })
        mainHTML += `<button onClick="renderIndividualResult('${data.starships}', 'starships')">Starships</button>`
    }
    else if(model === "starships") {
        keys.filter(key => key !== "films" && key !== "pilots" &&
         key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${key}: ${data[key]}</p>`
        })
    }
    else if(model === "vehicles") {
        keys.filter(key => key !== "films" && key !== "pilots" &&
         key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${key}: ${data[key]}</p>`
        })
    }
    else if(model === "planets") {
        keys.filter(key => key !== "films" && key !== "residents" &&
         key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${key}: ${data[key]}</p>`
        })
    }
    
    document.getElementById("cards").innerHTML = mainHTML
}

