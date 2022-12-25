const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}
function muteUnmute() {
  var video = document.getElementById("video");
  var speaker = document.getElementById("speaker");
  if (video.muted) {
    video.muted = false;
    speaker.className = "fa fa-volume-up";
  } else {
    video.muted = true;
    speaker.className = "fa fa-volume-mute";
  }
}