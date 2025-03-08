document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const images = document.querySelectorAll(".carousel img");

    function showSlide(i) {
        images.forEach(img => img.classList.remove("active"));
        images[i].classList.add("active");
    }

    window.prevSlide = function () {
        index = (index - 1 + images.length) % images.length;
        showSlide(index);
    };

    window.nextSlide = function () {
        index = (index + 1) % images.length;
        showSlide(index);
    };
});

//Click/Touch the guitar, or any key to play!

//Note to self: Name stuff better in illustrator!
//Varibles for the animation
stringStringyness = 2;
guitar = document.getElementById('Bass_Guitar_1_');
stringStraight_1 = document.getElementById('stringStraight_1');
stringPlucked_1 = document.getElementById('stringPlucked_1');
stringStraight_2 = document.getElementById('stringStraight_2');
stringPlucked_2 = document.getElementById('stringPlucked_2');
stringStraight_3 = document.getElementById('stringStraight_3');
stringPlucked_3 = document.getElementById('stringPlucked_3');
stringStraight_4 = document.getElementById('stringStraight_4');
stringPlucked_4 = document.getElementById('stringPlucked_4');
speaker_1 = document.getElementById('speaker-1');
note_1 = document.getElementById('note-1_1_');
note_2 = document.getElementById('note-2_1_');
note_3 = document.getElementById('note-3_1_');
note_4 = document.getElementById('note-4_1_');
spark_1 = document.getElementById('spark-1_2_');
spark_2 = document.getElementById('spark-3_2_');
spark_3 = document.getElementById('spark-4_2_');
speaker_1 = document.getElementById('bass-Amp-Speaker');

//Declare timeline
var pluck = new TimelineMax({
	paused: true
})

//String Animtaions
pluck.to(stringStraight_1, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_1.getAttribute('points')}})
					.to(stringStraight_1, 1, {morphSVG: {points: stringStraight_1.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)})

					.to(stringStraight_2, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_2.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_2, 1, {morphSVG: {points: stringStraight_2.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness,0.04)}, "-=1")

					.to(stringStraight_3, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_3.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_3, 1, {morphSVG: {points: stringStraight_3.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")

					.to(stringStraight_4, 0.1, {ease: Expo.easeOut,morphSVG: {points: stringPlucked_4.getAttribute('points')}}, "-=1.1")
					.to(stringStraight_4, 1, {morphSVG: {points: stringStraight_4.getAttribute('points')},ease: Elastic.easeOut.config(stringStringyness, 0.04)}, "-=1")

//Note Animations
					.to(note_1, 0.4, {x:"-50%", y:"-50%"}, "-=1.1")
					.to(note_1, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_1, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(note_2, 0.4, {x:"50%", y:"-50%"}, "-=1.1")
					.to(note_2, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_2, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(note_3, 0.4, {x:"-20%", y:"-50%"}, "-=1.1")
					.to(note_3, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_3, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(note_4, 0.4, {x:"50%", y:"-25%"}, "-=1.1")
					.to(note_4, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(note_4, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

//Sparks Animations
					.to(spark_1, 0.4, {x:"-50%", y:"50%"}, "-=1.1")
					.to(spark_1, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(spark_1, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(spark_2, 0.4, {x:"-50%", y:"-50%"}, "-=1.1")
					.to(spark_2, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(spark_2, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

					.to(spark_3, 0.4, {x:"50%", y:"-50%"}, "-=1.1")
					.to(spark_3, 0.2, {opacity:1 , ease:SlowMo.easeIn}, "-=1.1")
					.to(spark_3, 0.2, {opacity:0 , ease:SlowMo.easeOut}, "-=0.9")

//Speaker Animtaions
					.to(speaker_1, 0.1, {scale: 1.015, transformOrigin: "50% 50%", ease: Expo.easeOut}, "-=1.1")
	    .to(speaker_1, 0.3, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut}, "-=1");

bassAudioE1 = document.getElementById("Bass-E1");
bassAudioF1 = document.getElementById("Bass-F1");
bassAudioFS1 = document.getElementById("Bass-FS1");
bassAudioG1 = document.getElementById("Bass-G1");
bassAudioA1 = document.getElementById("Bass-A1");
bassAudioAS1 = document.getElementById("Bass-AS1");
bassAudioC2 = document.getElementById("Bass-C2");

//Trigger Audio
var i = 0;
function playAudio() {
	++i;
	if (i === 1) {
		bassAudioE1.currentTime = 0;
		bassAudioE1.play();
	} else if (i === 2) {
		bassAudioF1.currentTime = 0;
		bassAudioF1.play();
	} else if (i === 3) {
		bassAudioFS1.currentTime = 0;
		bassAudioFS1.play();
	} else if (i > 3 && i < 21) {
		bassAudioG1.currentTime = 0;
		bassAudioG1.play();
	} else if (i === 21 || i === 22 || i === 23) {
		bassAudioC2.currentTime = 0;
		bassAudioC2.play();
	} else if (i === 24) {
		bassAudioAS1.currentTime = 0;
		bassAudioAS1.play();
	} else if (i > 24 && i < 29) {
		bassAudioG1.currentTime = 0;
		bassAudioG1.play();
	} else if (i === 29 ) {
		bassAudioA1.currentTime = 0;
		bassAudioA1.play();
		i = 0;
	}
}

function rockOut() {
	pluck.restart();
	pluck.play();
	playAudio();
}

//Do the stuff when clicked
guitar.addEventListener("click", rockOut);