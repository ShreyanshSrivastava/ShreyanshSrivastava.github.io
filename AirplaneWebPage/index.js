var myImg = document.getElementById("myImg");

myImg.addEventListener("click", playPause);

function playPause(){

  if(document.getElementById("cloud").style.webkitAnimationPlayState == "paused"){

    document.getElementById("cloud").style.webkitAnimationPlayState =  "running";
    document.getElementById("airplane").style.webkitAnimationPlayState =  "running";
    document.getElementById("hotairballoon").style.webkitAnimationPlayState =  "running";
    document.getElementsByTagName("img")[12].setAttribute("src", "images/pause.png" );

  }else{

  document.getElementById("cloud").style.webkitAnimationPlayState = "paused";
  document.getElementById("airplane").style.webkitAnimationPlayState =  "paused";
  document.getElementById("hotairballoon").style.webkitAnimationPlayState = "paused";
  document.getElementsByTagName("img")[12].setAttribute("src", "images/play.png" );

  }
}
