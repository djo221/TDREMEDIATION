const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById('main')

const searchInput = document.getElementById('search');


let i = 1;

let dataMovies = getMovies(APIURL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
             showsMovies(data.results);
        
        })
}


function showsMovies(datas) {

    datas.forEach(movie => {
       
        const movieEl = document.createElement('div');
        const image = document.createElement('img')
        image.classList.add('img')
        image.src = IMGPATH+movie.poster_path;

        const movieInfo = document.createElement('div')
        const h3 = document.createElement('h3')
        const span = document.createElement('span') 
        const overviewEl = document.createElement('div')
    
        h3.textContent=movie.title;
        span.textContent=movie.vote_average;
        //ajout des elements au niveau de leur div parent
        movieInfo.appendChild(h3);
        movieInfo.appendChild(span);

        movieEl.className = 'movie';
        movieInfo.className = 'movie__info';
        overviewEl.className = 'overview';
        overviewEl.textContent = movie.overview


        movieEl.appendChild(image)
        movieEl.appendChild(movieInfo)
        movieEl.appendChild(overviewEl)

        main.appendChild(movieEl)
    });
  
}
searchInput.addEventListener("keyup",function(){
    if (searchInput.value) {
          var url=`https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${searchInput.value}`;
          main.innerHTML="";
          getMovies(url);
       
     } else{
         getMovies(url)
     }
        
})
// searchInput.addEventListener("keyup'', function(){
  
//     // const valid=searchInput.value;
    
//     if (valid) {
//         var url="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=valid";
//         getMovies(url);
//         console.log(url);
//     } else {
//         // getMovies(APIURL);
//     }
// });

window.onscroll = function () {
    if ((document.body.scrollHeight) <= (window.innerHeight+window.scrollY) )  {
   
        i++;
        getMovies(APIURL+i);
    } 
}

function getColor(vote) {
    if (vote >= 7) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}
