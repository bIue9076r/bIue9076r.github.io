// Song - {
//	name, year, index, album/game, location(url)
// }

var SongList = [];
var SongListLocked = [];
var CurrentSong = null;
var CurrentSong_Id = null;
var Currentinfo = null;
var Cooloff = false

function AddSong(name,year,index,album,location){
	SongList.push({
		name: name,
		year: year,
		index: index,
		album: album,
		url: location,

		play: true,
	});
}

function LockSongs(){
	for(var i = 0; i < SongList.length; i++){
		SongListLocked[i] = SongList[i];
	}
}

function ShuffleSongs(){
	SongList.sort((a,b) => Math.random() >= 0.5);
}

function GetSound(i){
	var s = SongList[i];
	if(s != null){
		return new Howl({src: [s.url]});
	}
}

function GetSoundFromInfo(info){
	return new Howl({src: [info.url]});
}

function ToggleSong(i){
	var s = SongList[i];
	if(s != null){
		s.play = !(s.play);
	}
}

function GenerateQueueItem(i){
	// <div id="queueItem"><button>x</button><p>Name - Album, #1, Year</p></div>
	var s = SongList[i];
	if(s != null){
		// <button onclick="ToggleSong(${i})">x</button>
		return `<div id="queueItem"><p>"${s.name}" - ${s.album}, no. ${s.index}, ${s.year}</p></div>`;
	}
}

AddSong("Waltz in B","2022",1,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/waltz%20in%20b.mp3");
AddSong("In","2022",2,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/in.mp3");
AddSong("Buyin' Store","2022",3,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/buyinstore.mp3");
AddSong("Boss Groove","2022",4,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/bgroov.mp3");
AddSong("Bt","2022",5,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/bt.mp3");
AddSong("Level Up","2022",6,"RPGIdk","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/levelup.mp3");
AddSong("Ice","2022",7,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/ice.mp3");
AddSong("March of the Drowned","2022",8,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/march%20of%20the%20drowned.mp3");
AddSong("Oh","2022",9,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/oh.mp3");
AddSong("Ub","2022",10,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/ub.mp3");
AddSong("Gameover","2022",11,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/gameover.mp3");

AddSong("We Wish You a Merry Christmas","2024",1,"Hearts of Iron 4 - Christmas Music Mod","https://github.com/bIue9076r/winter-hoi4-mod/raw/refs/heads/main/winter-mod/music/chrs1.ogg");
AddSong("Carol of the Bombs","2024",2,"Hearts of Iron 4 - Christmas Music Mod","https://github.com/bIue9076r/winter-hoi4-mod/raw/refs/heads/main/winter-mod/music/chrs2.ogg");
AddSong("March of the Sugar Plum Army","2025",3,"Hearts of Iron 4 - Christmas Music Mod","https://github.com/bIue9076r/winter-hoi4-mod/raw/refs/heads/main/winter-mod/music/chrs3.ogg");
AddSong("O' Artillery","2025",4,"Hearts of Iron 4 - Christmas Music Mod","https://github.com/bIue9076r/winter-hoi4-mod/raw/refs/heads/main/winter-mod/music/chrs4.ogg");

AddSong("Intro","2024",1,"Generic Tower Defense Game ST","https://github.com/bIue9076r/gtdg/raw/refs/heads/main/Assets/intro.mp3");
AddSong("Idle Tropical Defense","2024",2,"Generic Tower Defense Game ST","https://github.com/bIue9076r/gtdg/raw/refs/heads/main/Assets/menu.mp3");
AddSong("Coconut Shop","2024",3,"Generic Tower Defense Game ST","https://github.com/bIue9076r/gtdg/raw/refs/heads/main/Assets/shop.mp3");
AddSong("File Storage","2024",4,"Generic Tower Defense Game ST","https://github.com/bIue9076r/gtdg/raw/refs/heads/main/Assets/save.mp3");
AddSong("Coconut Invasion","2024",5,"Generic Tower Defense Game ST","https://github.com/bIue9076r/gtdg/raw/refs/heads/main/Assets/level.mp3");
AddSong("Tropical Punch","2024",6,"Generic Tower Defense Game ST","https://github.com/bIue9076r/gtdg/raw/refs/heads/main/Assets/level2.mp3");
AddSong("Tropical Mission","2024",7,"Generic Tower Defense Game ST","https://github.com/bIue9076r/gtdg/raw/refs/heads/main/Assets/level3.mp3");
AddSong("Victory Intro","2024",8,"Generic Tower Defense Game ST","https://github.com/bIue9076r/gtdg/raw/refs/heads/main/Assets/victory.mp3");
AddSong("Loss Intro","2024",9,"Generic Tower Defense Game ST","https://github.com/bIue9076r/gtdg/raw/refs/heads/main/Assets/loss.mp3");

AddSong("Kairos Koffee","2025",1,"Kairos Koffee OST","https://github.com/bIue9076r/woods/raw/refs/heads/main/Assets/cafe.mp3");
AddSong("Out of Time","2025",2,"Kairos Koffee OST","https://github.com/bIue9076r/woods/raw/refs/heads/main/Assets/end.mp3");
AddSong("Setting Calibration","2025",3,"Kairos Koffee OST","https://github.com/bIue9076r/woods/raw/refs/heads/main/Assets/settings.mp3");

AddSong("Beep Boop","2026",1,"Help From A Terrestrial OST","https://github.com/bIue9076r/space-vet/raw/refs/heads/main/Assets/beepboop.mp3");
AddSong("Gloorp","2026",2,"Help From A Terrestrial OST","https://github.com/bIue9076r/space-vet/raw/refs/heads/main/Assets/gloorp.mp3");
AddSong("Pit Stop","2026",3,"Help From A Terrestrial OST","https://github.com/bIue9076r/space-vet/raw/refs/heads/main/Assets/pit_stop.mp3");
AddSong("Saturn's Regards","2026",4,"Help From A Terrestrial OST","https://github.com/bIue9076r/space-vet/raw/refs/heads/main/Assets/saturns_regards.mp3");
AddSong("Planet X","2026",5,"Help From A Terrestrial OST","https://github.com/bIue9076r/space-vet/raw/refs/heads/main/Assets/planetx.mp3");
AddSong("Bad Ache","2026",6,"Help From A Terrestrial OST","https://github.com/bIue9076r/space-vet/raw/refs/heads/main/Assets/ache.mp3");
SongList.reverse();
LockSongs();

var cont = document.getElementById('currentInfo');
var el = document.getElementById('queue');
var sortable = Sortable.create(el, {
	onEnd: function(evt){
		var t = SongList[SongList.length - evt.oldIndex - 1];
		SongList[SongList.length - evt.oldIndex - 1] = SongList[SongList.length - evt.newIndex - 1];
		SongList[SongList.length - evt.newIndex - 1] = t;

		el.innerHTML = "";
		for(var i = SongList.length - 1; i >= 0; i--){
			el.innerHTML = el.innerHTML + GenerateQueueItem(i);
		}
	}
});

function GenerateQueue(shuf){
	for(var i = 0; i < SongListLocked.length; i++){
		SongList[i] = SongListLocked[i];
	}
	if(shuf){
		ShuffleSongs();
	}
	el.innerHTML = "";
	for(var i = SongList.length - 1; i >= 0; i--){
		el.innerHTML = el.innerHTML + GenerateQueueItem(i);
	}
}
GenerateQueue();

function PopSongFromList(){
	var s = SongList.pop();
	if(el.children[0] != null){
		el.children[0].remove();
	}
	return s;
}

function SongNext(){
	Currentinfo = PopSongFromList();
	if(Currentinfo != null){
		CurrentSong = GetSoundFromInfo(Currentinfo);
		CurrentSong.once("end",function(id){
			CurrentSong.unload();
			CurrentSong = null;
			SongNext();
		});
		CurrentSong.on("play",function(id){
			SongUpdate(id);
			Cooloff = false;
		});
		CurrentSong.once("load",function(){
			CurrentSong_Id = CurrentSong.play();
		});
	}else{
		if(SongList.length == 0){
			el.innerHTML = "<p>You've Reached the End!</p><p>Shuffle for more.</p>"
			cont.innerHTML = `<img><h2>Nothing</h2><p>Year: </p><p>Album: XXXX</p><p>Duration: -:--</p>`;
			Cooloff = false;
		}
	}
}

function SongUpdate(id){
	cont = document.getElementById('currentInfo');
	if(Currentinfo != null){
		var duration = "-:--";
		if(CurrentSong != null){
			var d = CurrentSong.duration(CurrentSong_Id);
			var s = Math.floor(d % 60);
			if(s < 10){ s = "0" + s;}
			duration = `${Math.floor(d/60)}:${s}`
		}
		cont.innerHTML = `<img><h2>${Currentinfo.name}</h2><p>Year: ${Currentinfo.year}</p><p>Album: ${Currentinfo.album}</p><p>Duration: ${duration}</p>`;
	}
}

function SongPlay(){
	if(CurrentSong != null){
		CurrentSong.play(CurrentSong_Id);
	}else{
		if(!Cooloff){
			Cooloff = true
			SongNext();
		}
	}
}

function SongPause(){
	if(CurrentSong != null){
		CurrentSong.pause(CurrentSong_Id);
	}
}

function SongSkip(){
	if(!Cooloff){
		if(CurrentSong != null){
			CurrentSong.stop(CurrentSong_Id);
			CurrentSong.unload();
			CurrentSong = null;
		}
		Cooloff = true
		SongNext();
	}
}