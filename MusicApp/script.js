console.log("WELCOME TO SPOTIFY");
//Initialize the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songsItem=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Chaiya Chaiya", filePath: "songs/1.mp3" , coverPath: "cover/cover1.jpg"},
    {songName:"Baadshah O Baadshah", filePath: "songs/2.mp3" , coverPath: "cover/cover2.jpg"},
    {songName:"Main Koi Aisa Geet Gaon", filePath: "songs/3.mp3" , coverPath: "cover/cover3.jpg"},
    {songName:"Ye Kaali Kaali Aankhen", filePath: "songs/4.mp3" , coverPath: "cover/cover4.jpg"},
    {songName:"Apun Bola", filePath: "songs/5.mp3" , coverPath: "cover/cover5.jpg"},
]
songsItem.forEach((element ,i)=>{
element.getElementsByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// audioElement.play();
//handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
// listen to event
audioElement.addEventListener('timeupdate', ()=>{
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
    })
    myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime=myProgressBar.value * audioElement.duration/100; 
    }
    )
    
    const makeAllPlays=()=>{
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
    })
}
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
makeAllPlays();
songIndex=parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src='songs/${songIndex+1}.mp3';
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
    })

    document.getElementById('next').addEventListener('click',()=>{
        if(songIndex>=4){
            songIndex=0
        }
        else{
            songIndex +=1;
        }

audioElement.src='songs/${songIndex+1}.mp3';
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex -=1;
    }

audioElement.src='songs/${songIndex+1}.mp3';
masterSongName.innerText=songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})
    