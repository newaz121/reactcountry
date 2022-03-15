const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {

    const countriesHTMl = countries.map(country => getCountryHTML(country));
    console.log(countries[0]);
    const container=document.getElementById('countries');
    container.innerHTML=countriesHTMl.join('');
}

const getCountryHTML = country => {
    return `

    <div class='countrytre'>
    <h2>${country.name}</h2>
    <img src="${country.flags.png}" alt="">
    </div>
    
    `
}


loadCountries();