
// Top Artists Menu Appear 

const topArtists = document.getElementById("top-artists");

topArtists.addEventListener("click", menuOpenArtists);

function menuOpenArtists (){
  document.querySelector(".top-artists-menu").classList.toggle("show-menu-artists");
}


// Genres Menu Appear 

const genres = document.getElementById("genres");

genres.addEventListener("click", menuOpenGenres);

function menuOpenGenres (){
  document.querySelector(".genres-menu").classList.toggle("show-menu-genres");
}


// Buble Tile 

const buble = document.getElementById("buble");

buble.addEventListener("click", bubleOpen);

function bubleOpen (){
  document.querySelector(".video").classList.toggle("show-video");
}


// Advent Calendar 

const pres = document.getElementById("pres");

pres.addEventListener("click", presOpen);

function presOpen (){
  document.querySelector(".video").classList.toggle("show-video");
}



// Date validation for advent calendar 

const d = new Date();
d.getDate();



