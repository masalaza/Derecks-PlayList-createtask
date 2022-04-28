// $(".add").click(function() {
// });
//playlist.forEach(function(song){
//$('.songs').append("<li>" + song + "</li>");
/*let artists = ["Joeybadass", "Sweet William", "Asap Rocky"];
let songTitles = ["500 benz", "Amaneki", "Potato Salad"];
let songImages = [
  "<img src='https://i1.sndcdn.com/artworks-000232005136-bfpmog-t500x500.jpg'/>",
  "<img src='https://i.scdn.co/image/ab6761610000e5eb6cc5bc022d9428eb860cb467'/>",
  "<img src='https://i1.sndcdn.com/artworks-nyWDcGAzfsxVfbAp-G8kfyw-t500x500.jpg'/>",
];*/
let songOne = {
  title: "500 benz",
  artist: "Joeybadass",
  songImage: "https://i1.sndcdn.com/artworks-000232005136-bfpmog-t500x500.jpg",
  songLinks: "https://youtu.be/FK4CaraYWc4"
};

let songTwo = {
  title: "Amaneki",
  artist: "Sweet William",
  songImage: "https://i.scdn.co/image/ab6761610000e5eb6cc5bc022d9428eb860cb467",
  songLinks: "https://youtu.be/90sin6nP144"
};

let songThree = {
  title: "Potato Salad",
  artist: "Asap Rocky’ ft Tyler The Creator",
  songImage: "https://i1.sndcdn.com/artworks-nyWDcGAzfsxVfbAp-G8kfyw-t500x500.jpg",
  songLinks: "https://youtu.be/93M1QtYDtpU"
};

let everything = [songOne,songTwo,songThree];

function displaySongInfo() {
  
  // use for in loops
  for (let song of everything) {
    $(".songs").append(`<p> ${song.title}</p>` ); 
    $(".artists").append(` <p> ${song.artist} </p>`); 
     $(".images").append(` <p> <img src= "${song.songImage}" </p>`); 
       $(".links").append(` <a href = ${song.songLinks} target="_blank" > link   </a>`); 
    
    
   
  }
  
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that the playlist does not repeatedly add the data
  too many times.  */
  $(".songs").empty();
  $(".images").empty();
  $(".artists").empty();
  $(".links").empty();
}

function addSongInfo() {

  let collect = {
    title: $(".title").val(),
    artist: $(".artist").val(),
    songImage: $(".image").val(),
    songLinks: $(".link").val()
  };
   
  everything.push(collect);
  
  console.log(everything);
  
}


$("#add").click(function () {
  emptySongInfo();
  addSongInfo(); 
  displaySongInfo();
});

displaySongInfo();
//If else

let count = 0;
$("h1").click(function () {
    if(count % 2 === 0){
      $("h1").css("color","red");  
    }
    else{
    $("h1").css("color","blue");
         }
    count++; 
});





