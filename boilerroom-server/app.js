const express = require("express")

// initialise express which I used to allow cross origin calls from seperate react server
var app = express();

// set data
var boilerRoomSets = {
	"sets": [
		{
			"title": "Objekt Boiler Room x Dekmantel Festival DJ Set",
			"artist": "Objekt",
			"location": "Amsterdam",
			"description" : "Objekt can do no wrong. His Dekmantel set has all the qualities we love him for: playfulness, technicality, depth & unique timelessness. Highly recommended!",
			"url": "https://www.youtube.com/watch?v=Pb_697GBaxE",
			"img": "https://mixmag.net/assets/uploads/images/_fullX2/0119_Objekt_Digital_Layout2.jpg"
		},
		{
			"title": "Optimo b2b Harri & Domenic Sub Club x Boiler Room Glasgow DJ Set",
			"artist": "Optimo b2b Harri & Domenic",
			"location": "Glasgow",
			"description" : "Optimo, Harri & Domenic going b2b right in the heart of Glasgow's beloved Sub Club.",
			"url": "https://youtu.be/HXphA_kIng8",
			"img": "https://i.ytimg.com/vi/AOqrDk_Q5d0/maxresdefault.jpg"
		},
		{
			"title": "Omar S Boiler Room BUD x New Delhi DJ Set",
			"artist": "Omar S",
			"location": "New Delhi",
			"description" : "Detroit's don papi back on our airwaves once again.",
			"url": "https://www.youtube.com/watch?v=exP5Oi4SL6I",
			"img": "https://i.ytimg.com/vi/aTVRJWHaUXI/maxresdefault.jpg"	
		}
	]
}

// when a client makes a requiest, respond with the set data
app.get("/get_boiler_room_sets", function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.json(boilerRoomSets);
})

// activate the server on port 4000
app.listen(4000, function(){
	console.log("server on port 4000")
})

