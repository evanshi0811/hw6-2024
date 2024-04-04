var video;
let volume = 1;
let mute = false;
let speed = 1;

window.addEventListener("load", function() {
	console.log("Page Loaded");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Playing Video");
	video.play();
	video.volume = volume;
	document.querySelector("#volume").innerHTML = volume * 100 + "%";
	video.mute = mute;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pausing Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowing Video");
	speed *= 0.9;
	video.playbackRate = speed;
	console.log("Speed: " + speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speeding Up Video");
	speed /= 0.9;
	video.playbackRate = speed;
	console.log("Speed: " + speed);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping Ahead");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("Current Location: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (mute) {
		mute = false;
		video.muted = mute;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Unmuted Video");
	} else {
		mute = true;
		video.muted = mute;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted Video");
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	volume = document.querySelector("#slider").value / 100;
	video.volume = volume;
	document.querySelector("#volume").innerHTML = volume * 100 + "%";
	console.log("Volume: " + volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Applied Vintage Filter");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removed Vintage Filter");
	video.classList.remove("oldSchool");
});