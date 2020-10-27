// Getting containers from DOM
const plantGrid = document.querySelector('#plant-container');
const favGrid = document.querySelector('#favorites-grid');

// Creating an app object for the SPA
const app = {
    pages: [],
    show: new Event('show'),
    init: function() {
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'Home', '#home');
        window.addEventListener('popstate', app.poppin);
    },
    nav: function(ev) {
        ev.preventDefault();
        const currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    },
    poppin: function(ev) {
        const hash = location.hash.replace('#', '');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        document.getElementById(hash).dispatchEvent(app.show);
    }
}

document.addEventListener('DOMContentLoaded', app.init);





// Set favorites to local storage
// Get favorites from local storage
// Remove local storage


let plants

const data = JSON.parse(localStorage.getItem('favorites'))

if (localStorage.getItem('plants')) {
  plants = JSON.parse(localStorage.getItem('plants'))
} else {
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


function addPlantToContainer(plantObject, currentGrid) {

    const divEl = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const infoBtn = document.createElement('button');
    const addBtn = document.createElement('button');
    const p = document.createElement('p');

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
    if (plantObject.isFavorite) {
        addBtn.innerHTML = 'Remove from favorites';
        addBtn.style.backgroundColor = '#c98a85';
        //addBtn.parentNode.classList.add('favorite');
       
          

    } else {
        addBtn.innerHTML = 'Add to favorites';
        addBtn.style.backgroundColor = '#33614b';
        //thisGridItem.classList.remove('favorite');
        
    }
    //addBtn.innerHTML = plantObject.addButton;
    divEl.appendChild(addBtn);

    p.classList.add('plant-info');
    p.innerHTML = plantObject.info;
    divEl.appendChild(p);
    
    
}

function addAllPlantsToContainer() {
    plantGrid.innerHTML = '';
    for (let i = 0; i < plants.length; i++) {        
        addPlantToContainer(plants[i], plantGrid);
    }
}


function addFavoritePlantsToContainer() {
    favGrid.innerHTML = '';
    for (let i = 0; i < plants.length; i++) {        
        if ( plants[i].isFavorite === true) {
            
            addPlantToContainer(plants[i], favGrid);
           
        }
    }
}
addFavoritePlantsToContainer();
addAllPlantsToContainer(); 


// 1) Transform plant information into a data structure

// 2) Create a function to add one plant to the container (argument should be plant object) 

// 3) Create a function to add all plants to the container

// 4) Create a function to add all the favorite plants to the container

// 5) Create a function to favorite/unfavorite a plant
//      - Get the target plant object 
//      - Find its index in the plants array
//      - Change the isFavorite property to true/false
//      - Save the newest information in localStorage
//      - Update the interface




// Show more info and hide again

function showInfo(btnClicked) {
    const thisGridItem = btnClicked.parentNode;
    const infoToShow = thisGridItem.querySelector('p');
    const currentDisplay = infoToShow.style.display;
    
    infoToShow.style.display = 'block';
    btnClicked.innerHTML = 'Hide info';
    
    if (currentDisplay === 'block') {
        infoToShow.style.display = 'none';
        btnClicked.innerHTML = 'More info';
    }      
}



// Add to favorites and remove again
function chooseFavorite(btnClicked) {
    const thisGridItem = btnClicked.parentNode;
    const plantName = btnClicked.parentNode.querySelector('h2').innerHTML;
    
    for (let i = 0; i < plants.length; i++) {  
        
         
        if (plantName === plants[i].name) {
            plants[i].isFavorite = !plants[i].isFavorite; 
            localStorage.setItem('plants', JSON.stringify(plants))
            
        }
    }
    addFavoritePlantsToContainer();

    addAllPlantsToContainer()
   
}

