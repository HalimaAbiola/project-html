document.addEventListener('DOMContentLoaded', () =>{
    const toggleDarkModeButton= document.getElementById('toggle-dark-mode')
    const navigateButton= document.getElementById('navigate-btn')

//dark mode toggle
toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const theme= document.body.classList.contains('dark-mode')? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
const savedTheme= localStorage.getItem('theme');
if (savedTheme === 'dark'){
    document.body.classList.add('dark-mode')
}

//nav btn
navigateButton.addEventListener('click',()=>{
    window.location.href="https://www.ubereats.com/gb/store/hs-cuisine/tVNq0jJSQ0Cj2qTjkA6dhg";
});
});


const apiKey = "YOUR_GOOGLE_API_KEY";

function searchRestaurants(){
    const location=document.getElementById('location').value;
    const url=`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${location}&key=${apiKey}`;

    fetch (url)
    .then(response => response.json())
    .then (data =>{
        displayResults(data.results);
    })
    .catch(error=> console.error("Error fetching data:", error));
}
function displayResults(results){
    const resultsDiv=document.getElementById('results');
    resultsDiv.innerHTML ='';
    results.forEach(restaurant=>{
        const div= document.createElement('div');
        div.innerHTML=`
        <><h3>${restaurants.name}</h3>
        <p>${restaurants.formatted_address}</p>
        <p>Rating: ${restaurants.rating}</p>
        `;
        resultDiv.appendChild(div);
    });
}
