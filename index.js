const searchInput = document.querySelector('#search');
const restaurant = document.querySelectorAll('.restaurant');

searchInput.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();
    restaurant.forEach(item => {
        item.querySelector("h3").textContent.toLowerCase().includes(word) || item.querySelector(".country").textContent.toLowerCase().includes(word) || item.querySelector(".adress").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})