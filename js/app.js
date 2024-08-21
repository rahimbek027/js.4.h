let wrapper = document.querySelector(".content-list");
let elCountrySelect = document.querySelector(".country-select");

const countrys = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg"
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg"
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg"
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg"
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg"
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg"
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg"
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg"
    }
];

// Function to render countries
function renderUsers(arr) {
    let ul = document.createElement('ul');
    
    arr.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `
            <div class="card">
                <img src="${item.flag}" alt="flag" style="width: 396.6px; height: 300px;">
                <div>
                    <p style="font-size: 24px;"><strong>${item.name}</strong></p>
                    <p style="font-size: 18px;">Capital: ${item.capital}</p>
                    <p style="font-size: 15px;">Population: ${item.population}</p>
                </div>
                <div class="btn">
                    <button>Like</button>
                    <button>Save</button>
                    <button>More</button>
                </div>
            </div>
        `;
        ul.appendChild(li);
    });

    wrapper.innerHTML = '';
    wrapper.appendChild(ul);
}

// Call the function to render the countries
renderUsers(countrys);

// Populate the select element with country capitals
countrys.forEach(item => {
    let elOption = document.createElement("option");
    elOption.value = item.capital;
    elOption.textContent = item.capital;
    elCountrySelect.appendChild(elOption);
});

elCountrySelect.addEventListener("change", (e) => {
    if(e.target.value == "all"){
        renderUsers(countrys)
    }
    else{
        const filteredCapital = countrys.filter(item => item.capital == e.target.value)
        renderUsers(filteredCapital)
    }
})