document.addEventListener( "DOMContentLoaded", function () {
  var pop = Popcorn( "#video" );

  pop.googlemap({
    start: 9.5,
    end: 16.55,
    type: "STAMEN-TONER",
    target: "google",
    lat: 38.79062,
    lng: -77.173505,
    zoom: "15",
    heading: "0",
    pitch: "1",
  });
  pop.d3({
    start: 1,
    end: 9,
    target: "d3"
  });
  /* Subtitles */
  pop.subtitle({
    "start": 124.74,
    "end": 126.73,
    "text": "I do not want to move",
    "target": "subs"
  });
  pop.subtitle({
    "start": 127.76,
    "end": 131.64,
    "text": "Because I am not going to get<br>a house like the one I have now",
    "target": "subs"
  });
  pop.subtitle({
    "start": 131.8,
    "end": 136.85,
    "text": "with a garden like the one I have in the back<br> and with an entry like this",
    "target": "subs"
  });
  pop.subtitle({
    "start": 136.89,
    "end": 141.69,
    "text": "Where do you think they are going to send me?<br> I am 71 years old",
    "target": "subs"
  });
  pop.subtitle({
    "start": 142.73,
    "end": 145.63,
    "text": "I am going to be send to a cheap nursing home",
    "target": "subs"
  });
  pop.subtitle({
    "start": 220.3,
    "end": 228.81,
    "text": "Reducing the volume of transport allows the<br>reconstruction of a less invasive smaller infrastructure",
    "target": "subs"
  });
  pop.subtitle({
    "start": 228.82,
    "end": 233.96,
    "text": "The number of access roads will change gradually one at a time",
    "target": "subs"
  });
  pop.subtitle({
    "start": 234.01,
    "end": 240.3,
    "text": "By redirecting the access roads we<br>reduce the impact in residential areas",
    "target": "subs"
  });
  pop.subtitle({
    "start": 240.52,
    "end": 249.11,
    "text": "This illustrates the possibility of conceiving a project<br>founded on the principles of sustainable urban development",
    "target": "subs"
  });
  pop.subtitle({
    "start": 249.21,
    "end": 256.81,
    "text": "Studies show the possibility of reducing by<br>30% the number of cars using the new Turcot",
    "target": "subs"
  });
  pop.subtitle({
    "start": 256.82,
    "end": 264.51,
    "text": "This reduction is possible due to a shift<br> from private car to public transportation",
    "target": "subs"
  });
  pop.subtitle({
    "start": 264.57,
    "end": 270.4,
    "text": "And also due to a redirection of local traffic to an optimized arterial system",
    "target": "subs"
  });
  pop.play();

}, false );