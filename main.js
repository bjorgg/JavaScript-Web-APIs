// Getting containers from DOM
const plantGrid = document.querySelector('#plant-container');
const favGrid = document.querySelector('#favorites-grid');

// Creating an object called app for the SPA functions
const app = {
    pages: [],
    init: function() {
        // Click listener for each nav anchor
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', app.nav);
        })
        // To show what page you are on in the location bar
        history.replaceState({}, 'Home', '#home');
        // Listener to the window object far handeling the back button
        // calls the poppin function below
        window.addEventListener('popstate', app.poppin);
    },
    // Clicking on links calls nav
    nav: function(ev) {
        // Prevent deafault event
        ev.preventDefault();
        // Get data target for the link we clicked
        const currentPage = ev.target.getAttribute('data-target');
        // Remove the active class from the page last active
        document.querySelector('.active').classList.remove('active');
        // Adding the active class to current page (data target)
        document.getElementById(currentPage).classList.add('active');
        // Changing the location bar to show current page
        history.pushState({}, currentPage, `#${currentPage}`);
    },
    // Function to handle the back and forward buttons
    poppin: function(ev) {
        // Remove the hastag from the url
        const hash = location.hash.replace('#', '');
        // Remove the active class from the page last active
        document.querySelector('.active').classList.remove('active');
        // Adding the active class to current hash (data target)
        document.getElementById(hash).classList.add('active');
    }
}

// Call the app init function when the page is finished loading
document.addEventListener('DOMContentLoaded', app.init);



let plants
// If plants are in local storage, get them. Else set them to local storage.
if (localStorage.getItem('plants')) {plants = JSON.parse(localStorage.getItem('plants'))} 
    else {
    plants = [
        { name:'Plant 1', image: 'images/plant1.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
        { name:'Plant 2', image: 'images/plant2.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
        { name:'Plant 3', image: 'images/plant3.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
        { name:'Plant 4', image: 'images/plant4.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
        { name:'Plant 5', image: 'images/plant5.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
        { name:'Plant 6', image: 'images/plant6.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
        { name:'Plant 7', image: 'images/plant7.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
        { name:'Plant 8', image: 'images/plant8.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
        { name:'Plant 9', image: 'images/plant9.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
        { name:'Plant 10', image: 'images/plant10.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
        { name:'Plant 11', image: 'images/plant11.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
        { name:'Plant 12', image: 'images/plant12.jpg', infoButton: 'More info', addButton: 'Add to favorites', isFavorite: false, info: 'Plants are multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food. They produce most of the world\'s oxygen, and are important in the food chain, as many organisms eat plants or eat organisms which eat plants' },
    ]
}
localStorage.setItem('plants', JSON.stringify(plants))


// This adds on plant to container
function addPlantToContainer(plantObject, currentGrid) {
    
    // Create all the elements and storing them in variables
    const divEl = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const infoBtn = document.createElement('button');
    const addBtn = document.createElement('button');
    const p = document.createElement('p');

    // Append the elements to parent nodes and giving them classes and attributes
    divEl.classList.add('grid-item');
    currentGrid.appendChild(divEl);

    img.classList.add('img');
    img.src = plantObject.image;
    divEl.appendChild(img);

    h2.innerHTML = plantObject.name;
    divEl.appendChild(h2);

    infoBtn.classList.add('info-btn');
    infoBtn.setAttribute('onclick', 'showInfo(this)');
    infoBtn.innerHTML = plantObject.infoButton;
    divEl.appendChild(infoBtn);
    
    addBtn.classList.add('add-btn');
    addBtn.setAttribute('onclick', 'chooseFavorite(this)');
    // Changing the add to favorites button for if the plant is favorite or not
    if (plantObject.isFavorite) {
        addBtn.innerHTML = 'Remove from favorites';
        addBtn.style.backgroundColor = '#c98a85';
    } else {
        addBtn.innerHTML = 'Add to favorites';
        addBtn.style.backgroundColor = '#33614b';
    }
    divEl.appendChild(addBtn);

    p.classList.add('plant-info');
    p.innerHTML = plantObject.info;
    divEl.appendChild(p); 
}


// Function to add all plants to container
function addAllPlantsToContainer() {
    // First clear everything
    plantGrid.innerHTML = '';
    // Loop through array and call the add plant to container function abowe
    for (let i = 0; i < plants.length; i++) {        
        addPlantToContainer(plants[i], plantGrid);
    }
}


// Function to add favorites plants to another container
function addFavoritePlantsToContainer() {
    // First clear everything
    favGrid.innerHTML = '';
    // Loop through array and if plant is favorite add plant to container
    for (let i = 0; i < plants.length; i++) {        
        if ( plants[i].isFavorite === true) {
            
            addPlantToContainer(plants[i], favGrid);
           
        }
    }
}
// Calling the functions
addFavoritePlantsToContainer();
addAllPlantsToContainer(); 



// Function to show more info about plant and hide again
// The button has a onclick attrebute
function showInfo(btnClicked) {
    // Get the button clicked parent node
    const thisGridItem = btnClicked.parentNode;
    // Get the p element of this item
    const infoToShow = thisGridItem.querySelector('p');
    const currentDisplay = infoToShow.style.display;
    
    // Change the display of p element
    infoToShow.style.display = 'block';
    // Change the button clicked
    btnClicked.innerHTML = 'Hide info';
    
    // Changing everythin back if button clicked again.
    if (currentDisplay === 'block') {
        infoToShow.style.display = 'none';
        btnClicked.innerHTML = 'More info';
    }      
}



// Add to favorites
// The button has a onclick attribute
function chooseFavorite(btnClicked) {
    // Get the button clicked parent node
    const thisGridItem = btnClicked.parentNode;
    // Get the name of the plant which the button clicked belongs to
    const plantName = btnClicked.parentNode.querySelector('h2').innerHTML;
    
    // Loop through the array and if plant name matches, set the isFavorite to true
    // and set it to local storage
    for (let i = 0; i < plants.length; i++) {  
         
        if (plantName === plants[i].name) {
            plants[i].isFavorite = !plants[i].isFavorite; 
            localStorage.setItem('plants', JSON.stringify(plants))
        }
    }

    // Calling the functions abowe
    addFavoritePlantsToContainer();
    addAllPlantsToContainer()
}

