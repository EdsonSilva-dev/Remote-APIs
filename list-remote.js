
// Fetch function
async function fetchCountriesData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe");
        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }
        const data = await response.json();
        console.log(data);
        // Verify the code is working by logging the data to the console
        console.log(data);
        // Call the display function
        displayCountriesData(data);
    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML = '<p class="error">⚠️ Failed to load data. Please try again later.</p>';   
        console.error(`Error fetching data: ${error}`);
    }
}

// Display function
function displayCountriesData(countriesArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    countriesArray.forEach(country => {
        htmlOutput += `
    <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px;"><img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="100">
         <p>
            <b>${country.name.common}</b><br>
            Capital: ${country.capital[0]}<br>
            Population: ${country.population.toLocaleString()}<br>            
            Region: ${country.region}
         </p>
    </div>
`;
    });

    container.innerHTML = htmlOutput;
}

// Event listener on the parent container
document.getElementById("button-container").addEventListener("click", function(e) {
    if (e.target.id === "btn-countries") {
        fetchCountriesData();
    }
});

async function fetchRickMortyData() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");

        if (!response.ok) throw new Error("Erro na API");

        const data = await response.json();

        console.log(data); // importante para entender estrutura

        // 👉 array está em data.results
        displayRickMortyData(data.results);

    } catch (error) {
        console.error(error);
    }
}
function displayRickMortyData(rmArray) {
    const container = document.getElementById("remote-data-container");

    let htmlOutput = "";

    rmArray.forEach(character => {
        htmlOutput += `
            <div class="card">
                <img src="${character.image}">
                <h3>${character.name}</h3>
                <p>Status: ${character.status}</p>
            </div>
        `;
    });

    container.innerHTML = htmlOutput;
}

document
  .getElementById("btn-load-rm")
  .addEventListener("click", fetchRickMortyData);



  // Event listener on the parent container
document.getElementById("button-container").addEventListener("click", function(e) {
    if (e.target.id === "btn-countries") {
        fetchCountriesData();
    } else if (e.target.id === "btn-users") {
        fetchUsersData();   
    }
}); 

async function fetchUsersData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }
        const data = await response.json();
        console.log(data);
        // Verify the code is working by logging the data to the console
        console.log(data);
        // Call the display function
        displayCountriesData(data);
    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML = '<p class="error">⚠️ Failed to load data. Please try again later.</p>';   
        console.error(`Error fetching data: ${error}`);
    }
}

function displayUsersData(usersArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";
    usersArray.forEach(user => {
        htmlOutput += `
            <p>
            <b>${user.name} ${user.username}</b><br>
            Email: <a href="mailto:${user.email}">${user.email}</a><br>
            Website: <a href="http://${user.website}" target="_blank">${user.website}</a><br>
            Location: ${user.address.street}, ${user.address.city}
            </p>
        `;
    });
    container.innerHTML = htmlOutput;
} 