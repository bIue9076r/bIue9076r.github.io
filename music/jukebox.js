// Song - {
//	name, year, index, album/game, location(url)
// }

var SongList = [];

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

AddSong("Waltz in B","20XX",1,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/waltz%20in%20b.mp3");
AddSong("In","20XX",2,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/in.mp3");
AddSong("Buyin' Store","20XX",3,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/buyinstore.mp3");
AddSong("Boss Groove","20XX",4,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/bgroov.mp3");
AddSong("Bt","20XX",5,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/bt.mp3");
AddSong("Level Up","20XX",6,"RPGIdk","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/levelup.mp3");
AddSong("Ice","20XX",7,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/ice.mp3");
AddSong("March of the Drowned","20XX",8,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/march%20of%20the%20drowned.mp3");
AddSong("Oh","20XX",9,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/oh.mp3");
AddSong("Ub","20XX",10,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/ub.mp3");
AddSong("Gameover","20XX",11,"RPGIdk OST","https://github.com/bIue9076r/Rpgidk/raw/refs/heads/stable/Audio/Sound/gameover.mp3");

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

function GetSound(i){
	var s = SongList[i];
	if(s != null){
		return new Howl({src: [s.url]});
	}
}

function ToggleSong(i){
	var s = SongList[i];
	if(s != null){
		s.play = !(s.play);
	}
}
