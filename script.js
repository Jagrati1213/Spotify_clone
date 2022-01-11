// GET the MenuBar 
let menuBar_open = document.querySelector(".menuBar-open");
let menuBox      = document.querySelector(".Menu-box");

//Show & Hide the menuBox 
menuBar_open.addEventListener('click',()=>{
  menuBox.classList.toggle("menushow-bar");
});

//GET the Song-List
let song_box          = Array.from(document.getElementsByClassName("song-box"));
let song_name         = document.getElementsByClassName("song-name");
let singer_name       = document.getElementsByClassName("singer-name");
let display_song_img  = document.getElementsByClassName("display-song-Img");
let display_song_name = document.getElementsByClassName("display-Song-name")
let gif_box           = document.querySelector(".gif-box");
let masterPlayBtn     = document.querySelector(".master-play-btn i");
let music_track         = document.querySelector(".music-Track input");

// let master_Fordword_Btn = document.querySelector(".master-forword-btn");
// let master_Backword_Btn = document.querySelector(".master-backword-btn");

let currentAudio      = new Audio(); //update with click

//Song playing Fun
song_box.forEach((ele,i)=>{

  ele.addEventListener('click',(e)=>{
  
    let display_song   = song_name[i].textContent;
    let display_singer = singer_name[i].textContent;

    display_song_name[0].textContent    =  display_song;
    display_song_img[0].children[0].src = `images_clone/${display_singer}/${display_singer}.jpg`;
    currentAudio.src   = `audio/${display_singer}/${display_song}.mp3`;

     masterPlay(currentAudio); //called the masterBtn

    //Updates the Audio time
    currentAudio.addEventListener('timeupdate', () => {
      music_track.value = (currentAudio.currentTime / currentAudio.duration) * 100;
    });

  });
});

// master play btn
masterPlayBtn.addEventListener('click',masterPlay)

function masterPlay(){

       if (currentAudio.paused|| currentAudio.currentTime<=0) {
         currentAudio.play();
         masterPlayBtn.classList.remove("fa-play-circle");
         masterPlayBtn.classList.add("fa-pause-circle");
         gif_box.style.opacity=1;

       }
       else{
        currentAudio.pause();
        masterPlayBtn.classList.add("fa-play-circle");
        masterPlayBtn.classList.remove("fa-pause-circle");
        gif_box.style.opacity=0;
      }
}

//Change The Music Track
music_track.addEventListener('change',tracking_Fun);

function tracking_Fun(){
    currentAudio.currentTime = (music_track.value * currentAudio.duration) / 100;
    music_track.value = currentAudio.currentTime; 
  }


//FOR FUTURE....

// master_Fordword_Btn.addEventListener('click',master_Fordword_Play);
// function master_Fordword_Play(){
//   console.log("forword")
//   music_track.value =((currentAudio.currentTime / currentAudio.duration) * 100)*10;
// };

// master_Backword_Btn.addEventListener('click',master_backword_Play);
// function master_backword_Play(){
//   console.log("backword")
//   music_track.value =((currentAudio.currentTime / currentAudio.duration) * 100)/10;  
// }

