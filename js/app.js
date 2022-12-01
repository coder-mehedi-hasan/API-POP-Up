const url = 'https://restcountries.com/v3.1/all'
fetch(url)
.then(res=> res.json())
// .then(data => console.log(data()));
.then(data => contriesFun(data));
// function contriesFun(das){
//     console.log(das)
// }
// /*
function contriesFun(input){
    for(i=0;i<input.length;i++){
        const div = document.createElement('div')
        div.classList.add('item')
        div.innerHTML = `
        <h2><span>Country Name: </span>${input[i].name.common}</h2>
        <p><span>Country Full Name: </span>${input[i].name.official}</p>
        <p><span>Capital of Country: </span> ${input[i].capital}</p>
        <p><span>Country Area: </span> ${input[i].area}</p>
        <p><span>Population: </span> ${input[i].population}</p>
        <p><span>Country Code: </span> ${input[i].cca2}</p>
        <button onclick="myFun('${input[i].cca3}')">All Information</button>
        `
        document.getElementById('main').appendChild(div)
    }
}
function myFun(code){
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => popUpFun(data))
}

function popUpFun(pop){
        const popDiv = document.createElement('div')
        popDiv.classList.add('popdiv')
        popDiv.innerHTML = `
        <div class="popbody">
            <div class="head">
                <div class="close" id="close"><i class="fa fa-close"></i></div>
                <h3>${pop[0].name.common}</h3>
                <p>${pop[0].name.official}</p>
                <img src="${pop[0].flags.svg}" alt="flag">
            </div>
            <div class="details">
                <div class="item">
                    <div class="left">
                        <p><span>Name: </span>${pop[0].name.common}</p>
                        <p><span>Country Code: </span>${pop[0].cca3}</p>
                        <p><span>Flag: </span>${pop[0].flag}</p>
                        <p><span>FIFA: </span>${pop[0].fifa}</p>
                        <p><span>Country Area: </span>${pop[0].area}</p>
                        <p><span>Mother Language: </span>${pop[0].name.common}</p>
                        <p><span>Region: </span>${pop[0].region}</p>
                        <p><span>Currency: </span>${pop[0].currencies.name}</p>
                        <p><span>Starts Of Week: </span>${pop[0].startOfWeek}</p>
                    </div>
                    <div class="right">
                        <p><span>Official Name: </span>${pop[0].name.official}</p>
                        <p><span>Capital: </span>${pop[0].capital}</p>
                        <p><span>Continents: </span>${pop[0].continents}</p>
                        <p><span>Population: </span>${pop[0].population}</p>
                        <p><span>Time Zone: </span>${pop[0].timezones}</p>
                        <p><span>Sub Region: </span>${pop[0].subregion}</p>
                        <p><span>Independent: </span>${pop[0].independent}</p>
                        <p><span>Maps: </span><a href="${pop[0].maps.googleMaps}" target="balnk">${pop[0].maps.googleMaps}</a></p>
                    </div>
                </div>
            </div>
        </div>
        
        `
        document.getElementById('body').appendChild(popDiv)
        document.getElementById('close').addEventListener('click',() =>{
            document.getElementById('body').removeChild(popDiv)
        })
}