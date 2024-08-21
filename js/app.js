let wrapper = document.querySelector(".content-list");
let elCountrySelect = document.querySelector(".country-select");
let likeCount = document.querySelector(".like-count")
let saveCount = document.querySelector(".save-count")
const countrys = [
    {
        id: 1,
        name: "Wallis and Futuna",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg",
        isLiked:false,
        isBasket:false
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg",
        isLiked:false,
        isBasket:false
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
                    <button onclick="handleLikeBtnClick(${item.id})" class="${item.isLiked ? "bg-red-500 text-white" : "bg-white text-black"}">Like</button>
                    <button onclick="handSavedBtnClick(${item.id})" class="${item.isBasket ? "bg-orange-500 text-white" : "bg-white text-black"}">Save</button>
                    <button class="bg-green-500 text-black">More</button>
                </div>
            </div>
        `;
        ul.appendChild(li);
    });

    // Update like count
    likeCount.textContent = arr.filter(item => item.isLiked).length;
    saveCount.textContent = arr.filter(item => item.isBasket).length;

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

function handleLikeBtnClick(id){
    const findedObj = countrys.find(item => item.id == id)
    findedObj.isLiked = !findedObj.isLiked
    renderUsers(countrys)
}

function handSavedBtnClick(id){
    const findedObj = countrys.find(item => item.id == id)
    findedObj.isBasket = !findedObj.isBasket
    renderUsers(countrys)
}