const people = document.getElementById("people")
const btn = document.querySelector("button")
const btns = document.querySelector("#models-btns-parent")
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
    document.getElementById("btns-parent").innerHTML = ""
    if(searchTerm === "people") {
    data.results.forEach(result => {
        if(result.starships.length >= 1) {
            mainHTML += `
            <div class="card">
                <p><span class="bold">Name:</span> ${result.name}</p>
                <p><span class="bold">Height:</span> ${result.height}</p>
                <p><span class="bold">Mass:</span> ${result.mass}</p>
                <p><span class="bold">Hair color:</span> ${result.hair_color}</p>
                <p><span class="bold">Skin color:</span> ${result.skin_color}</p>
                <p><span class="bold">Eye color:</span> ${result.eye_color}</p>
                <p><span class="bold">Birth year:</span> ${result.birth_year}</p>
                <p><span class="bold">Gender:</span> ${result.gender}</p>
                <div class="individual-results-parent">
                    <button class="model" onClick="renderIndividualResult('${result.homeworld}', 'homeworld')">Home world</button>
                    <button class="model" onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
                    <button class="model" onClick="renderIndividualResult('${result.vehicles}', 'vehicles')">Vehicles</button>
                    <button class="model" id="starships" onClick="renderIndividualResult('${result.starships}', 'starships')">Starships</button>
                </div>
            </div>
        `    
        }
        else {
        mainHTML += `
            <div class="card">
                <p><span class="bold">Name:</span> ${result.name}</p>
                <p><span class="bold">Height:</span> ${result.height}</p>
                <p><span class="bold">Mass:</span> ${result.mass}</p>
                <p><span class="bold">Hair color:</span> ${result.hair_color}</p>
                <p><span class="bold">Skin color:</span> ${result.skin_color}</p>
                <p><span class="bold">Eye color:</span> ${result.eye_color}</p>
                <p><span class="bold">Birth year:</span> ${result.birth_year}</p>
                <p><span class="bold">Gender:</span> ${result.gender}</p>
                <div class="individual-results-parent">
                    <button class="model" onClick="renderIndividualResult('${result.homeworld}', 'homeworld')">Home world</button>
                    <button class="model" onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
                    <button class="model" onClick="renderIndividualResult('${result.vehicles}', 'vehicles')">Vehicles</button>
                </div>    
            </div>
        `
        }
    })


    }
    else if (searchTerm === "films") {
        data.results.forEach(result => {
            mainHTML += `
                <div class="card">
                <p><span class="bold">Title:</span> ${result.title}</p>
                <p><span class="bold">Episode id:</span> ${result.episode_id}</p>
                <p><span class="bold">Opening crawl:</span> ${result.opening_crawl}</p>
                <p><span class="bold">Director:</span> ${result.director}</p>
                <p><span class="bold">Producer:</span> ${result.producer}</p>
                <p><span class="bold">Release date:</span> ${result.release_date}</p>
                <div class="individual-results-parent">
                    <button class="model" onClick="renderIndividualResult('${result.characters}', 'characters')">Characters</button>
                    <button class="model" onClick="renderIndividualResult('${result.planets}', 'planets')">Planets</button>
                    <button class="model" onClick="renderIndividualResult('${result.starships}', 'starships')">Starships</button>
                    <button class="model" onClick="renderIndividualResult('${result.vehicles}', 'vehicles')">Vehicles</button>
                </div>
            </div>
            `
        })
    }
    else if (searchTerm === "planets") {
        data.results.forEach(result => {
            mainHTML += `
                <div class="card">
                <p><span class="bold">Name:</span> ${result.name}</p>
                <p><span class="bold">Rotation period:</span> ${result.rotation_period}</p>
                <p><span class="bold">Orbital period:</span> ${result.orbital_period}</p>
                <p><span class="bold">Diameter:</span> ${result.diameter}</p>
                <p><span class="bold">Climate:</span> ${result.climate}</p>
                <p><span class="bold">Gravity:</span> ${result.gravity}</p>
                <p><span class="bold">Terrain:</span> ${result.terrain}</p>
                <p><span class="bold">Surface water:</span> ${result.surface_water}</p>
                <p><span class="bold">Population:</span> ${result.population}</p>
                <div class="individual-results-parent">
                    <button class="model" onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
                </div>
            </div>
            `
        })
    }
    else if (searchTerm === "starships") {
        data.results.forEach(result => {
            mainHTML += `
            <div class="card">
            <p><span class="bold">Name:</span> ${result.name}</p>
            <p><span class="bold">Model:</span> ${result.model}</p>
            <p><span class="bold">Manufacturer:</span> ${result.manufacturer}</p>
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
            <div class="individual-results-parent">
            <button class="model" onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
            </div>
            </div>
        `
        })
    }
    else if (searchTerm === "species") {
        data.results.forEach(result => {
            mainHTML += `
            <div class="card">
            <p><span class="bold">Name:</span> ${result.name}</p>
            <p><span class="bold">Classification:</span> ${result.classification}</p>
            <p><span class="bold">Designation:</span> ${result.designation}</p>
            <p><span class="bold">Average height:</span> ${result.average_height}</p>
            <p><span class="bold">Skin colors:</span> ${result.skin_colors}</p>
            <p><span class="bold">Hair colors:</span> ${result.hair_colors}</p>
            <p><span class="bold">Eye colors:</span> ${result.eye_colors}</p>
            <p><span class="bold">Average lifespan:</span> ${result.average_lifespan}</p>
            <p><span class="bold">Language:</span> ${result.language}</p>
            <div class="individual-results-parent">
            <button class="model" onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
            <button class="model" onClick="renderIndividualResult('${result.people}', 'people')">People</button>
            <button class="model" onClick="renderIndividualResult('${result.homeworld}', 'homeworld')">Home world</button>
            </div>
            </div>
            `
        })
    }
    else if (searchTerm === "vehicles") {
        data.results.forEach(result => {
            mainHTML += `
            <div class="card">
            <p><span class="bold">Name:</span> ${result.name}</p>
            <p><span class="bold">Model:</span> ${result.model}</p>
            <p><span class="bold">Manufacturer:</span> ${result.manufacturer}</p>
            <p><span class="bold">Cost in credits:</span> ${result.cost_in_credits}</p>
            <p><span class="bold">Length:</span> ${result.length}</p>
            <p><span class="bold">Max atmosphering speed:</span> ${result.max_atmosphering_speed}</p>
            <p><span class="bold">Crew:</span> ${result.crew}</p>
            <p><span class="bold">Passenger:</span> ${result.passengers}</p>
            <p><span class="bold">Cargo capacity:</span> ${result.cargo_capacity}</p>
            <p><span class="bold">Consumables:</span> ${result.consumables}</p>
            <p><span class="bold">Vehicle class:</span> ${result.vehicle_class}</p>
            <div class="individual-results-parent">
            <button class="model" onClick="renderIndividualResult('${result.films}', 'films')">Films</button>
            </div>
            </div>
            `
        })
    }
   
    document.getElementById("btns-parent").innerHTML += `<button id="previous" onClick="prevPage('${searchTerm}', '${Number(page)}')">Previous</button>`
    + `<button id="next" onClick="nextPage('${searchTerm}', '${Number(page)}')">Next</button>` 
   document.getElementById("cards-parent").innerHTML = mainHTML

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
    document.getElementById("btns-parent").innerHTML = ""
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
        mainHTML += `<button class="model" onClick="renderIndividualResult('${data.films}', 'films')">Films</button>`
    }
    else if(model === "films") {
        keys.filter(key => key !== "release_date" && key !== "characters" &&
         key !== "planets" && key !== "starships" && key !== "vehicles" &&
         key !== "species" && key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `${key}: <p>${data[key]}</p>`
        })
        mainHTML += `
        <button class="model" onClick="renderIndividualResult('${data.characters}', 'characters')">Characters</button>
        <button class="model" onClick="renderIndividualResult('${data.starships}', 'starships')">Starships</button>
        <button class="model" onClick="renderIndividualResult('${data.vehicles}', 'vehicles')">Vehicles</button>
        <button class="model" onClick="renderIndividualResult('${data.species}', 'species')">Species</button>
        `
    }
    else if(model === "characters") {
        if (data["starships"].length >= 1) {
            keys.filter(key => key !== "homeworld" && key !== "films" &&
         key !== "starships" && key !== "vehicles" &&
         key !== "species" && key !== "created" && key !== "edited" && key !== "url").forEach(key => {
            mainHTML += `<p>${key}: ${data[key]}</p>`
        })
        mainHTML += `<button class="model" onClick="renderIndividualResult('${data.starships}', 'starships')">Starships</button>`    
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
        mainHTML += `<button class="model" onClick="renderIndividualResult('${data.starships}', 'starships')">Starships</button>`
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
    
    document.getElementById("cards-parent").innerHTML = mainHTML
}

