
 function searchMovie() {
    const inputMovie=movie.value.trim();
    const key='7cd29652';
    console.log(inputMovie);
   if (movie.value != "") {
      spinnerLoad();

    fetch(`https://www.omdbapi.com/?t=${inputMovie}&apikey=${key}`)
    .then(data=> data.json())
    .then(arrayData=>displayMovie(arrayData))
    .catch(err=>alert('Movie not found'))
    .finally(()=>{
      spinnerHide();
    })
    document.getElementById('warning').style.display="none";
    
   }
   else{
      document.getElementById('result').style.display = "none";
      document.getElementById('warning').style.display="block";
    
   }
 }
 function displayMovie(arrayData) {
    console.log(arrayData);
    document.getElementById('result').style.display = "block";
    document.getElementById('poster').src=`${arrayData.Poster}`;
    document.getElementById('title').innerHTML=`${arrayData.Title}`;
    document.getElementById('Director').innerHTML=`Director :${arrayData.Director}`;
    document.getElementById('Writer').innerHTML=`Writer :${arrayData.Writer}`;
    document.getElementById('Year').innerHTML=`Year :${arrayData.Year}`;
    document.getElementById('Genre').innerHTML=`Genre :${arrayData.Genre}`;
    document.getElementById('Actors').innerHTML=`Cast :${arrayData.Actors}`;
    document.getElementById('imdbRating').innerHTML=`Rating :${arrayData.imdbRating}`;
    
 }
 function pageLoad() {
   
    document.getElementById('warning').style.display="none";
    
 }
 function display() {
    document.getElementById('result').style.display = "none";
    
 }

 function spinnerLoad() {
   document.getElementById('spinner').style.display="block"
   
 }
 function spinnerHide() {
   document.getElementById('spinner').style.display="none"
   
 }