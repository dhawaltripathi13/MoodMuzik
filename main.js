var happy = [{
    'name': 'The Motto',
    'artist': 'Drake feat. Lil Wayne',
    'album': 'Take Care',
    'duration': '3:01',
   'fileName': 'happy1.mp3',
   'image' : 'happy1.jpg',
},
{
    'name': 'Count On Me',
    'artist': 'Bruno Mars',
    'album': 'Doo Woops and Hooligans',
    'duration': '3:19',
    'fileName': 'happy2.mp3',
    'image' : 'happy2.jpg',
},
{
    'name': 'Just Like That',
    'artist': 'R. Kelly',
    'album': 'Love Letter',
    'duration': '5:01',
    'fileName': 'happy3.mp3',
    'image' : 'happy3.jpg',
},
{
    'name': 'G.O.M.D',
    'artist': 'J. Cole',
    'album': 'Forest Hill Drive 2014',
    'duration': '3:17',
    'fileName': 'happy4.mp3',
    'image' : 'happy4.jpg' ,
}]
var sad = [{
        'name': 'Find Your Love',
        'artist': 'Drake',
        'album': 'Thank Me Later',
        'duration': '4:12',
       'fileName': 'sad1.mp3',
       'image' : 'sad1.jpg',
    },
    {
        'name': 'Ascension',
        'artist': 'Flatbush Zombies',
        'album': '3001 : A Space Odyssey',
        'duration': '3:35',
        'fileName': 'sad2.mp3',
        'image' : 'sad2.jpg',
    },
    {
        'name': 'Just Can\'t Get Enough',
        'artist': 'Black Eyed Peas',
        'album': 'The Beginning',
        'duration': '4:07',
        'fileName': 'sad3.mp3',
        'image' : 'sad3.jpg',
    },
    {
        'name': 'Bullsh*t',
        'artist': 'Raz Simone',
        'album': 'Cognitive Dissonance',
        'duration': '3:40',
        'fileName': 'sad4.mp3',
        'image' : 'sad4.jpg' ,
    }]
var relax = [{
            'name': 'Delusional',
            'artist': 'Tech N9ne',
            'album': 'All 6s and 7s',
            'duration': '4:12',
           'fileName': 'relax1.mp3',
           'image' : 'relax1.jpg',
        },
        {
            'name': 'Beggin',
            'artist': 'Madcon',
            'album': 'Remix Vol. 1',
            'duration': '3:35',
            'fileName': 'relax2.mp3',
            'image' : 'relax2.jpg',
        },
        {
            'name': 'Sing About Me',
            'artist': 'Mateo',
            'album': 'Madness',
            'duration': '4:07',
            'fileName': 'relax3.mp3',
            'image' : 'relax3.jpg',
        },
        {
            'name': 'Groovy Sauce',
            'artist': 'J. Dilla',
            'album': 'Boom-Bap',
            'duration': '3:40',
            'fileName': 'relax4.mp3',
            'image' : 'relax4.jpg' ,
        }]
var party = [
    {
        'name': 'Don\'t Stop The Party',
        'artist': 'Black Eyed Peas',
        'album': 'The Beginning',
        'duration': '6:07',
        'fileName': 'party1.mp3',
        'image' : 'party1.jpg',
    },
    {
        'name': 'In Da Club',
        'artist': '50 Cent',
        'album': 'Get Rich Or Die Tryin\'',
        'duration': '3:13',
        'fileName': 'party2.mp3',
        'image' : 'party2.jpg',
    },
    {
            'name': 'Club Can\'t Handle Me',
            'artist': 'Flo Rida',
            'album': 'Step Up 3D (OST)',
            'duration': '3:52',
           'fileName': 'party3.mp3',
           'image' : 'party3.jpg',
    },
    {
        'name': 'DJ Got Us Fallin\'',
        'artist': 'Usher',
        'album': 'Confessions',
        'duration': '3:40',
        'fileName': 'party4.mp3',
        'image' : 'party4.jpg' ,
    }]

// Function to switch between pause and play a song
// variable song has the audio tag selected from this html document.
// song.paused returns a boolean value which displays true if the file is paused and false if it's playing.
function toggleSong() {
  var song = document.querySelector('audio');
  if(song.paused == true) {
  console.log('Playing');
  $('.play-icon').removeClass('fa-play').addClass('fa-pause');
  song.play();
  }
  else {
  console.log('Pausing');
  $('.play-icon').removeClass('fa-pause').addClass('fa-play');
  song.pause();
  }
  }

// function which updates current playing time
//calling another function within this function to resolve time formatting issue.
function updateCurrentTime(){
  var song= document.querySelector('audio');
  var currentTime = Math.floor(song.currentTime);
  currentTime = fancyTimeFormat(currentTime);
  var duration = Math.floor(song.duration);
  duration = fancyTimeFormat(duration)
  $('.time-elapsed').text(currentTime);
  $('.song-duration').text(duration);
}

//function to change time formatting
function fancyTimeFormat(time)
{
var hrs = ~~(time / 3600);
var mins = ~~((time % 3600) / 60);
var secs = time % 60;
var ret = "";
if (hrs > 0) {
  ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
}
ret += "" + mins + ":" + (secs < 10 ? "0" : "");
ret += "" + secs;
return ret;
}

function addSongNameClickEventHappy(songObj,position) {
var songName = songObj.fileName;
var id = '#happy' + position;
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
changeCurrentSongDetails(songObj);
}
});
}

function addSongNameClickEventParty(songObj,position) {
var songName = songObj.fileName;
var id = '#party' + position;
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
changeCurrentSongDetails(songObj);
}
});
}

function addSongNameClickEventSad(songObj,position) {
var songName = songObj.fileName;
var id = '#sad' + position;
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
changeCurrentSongDetails(songObj);
}
});
}

function addSongNameClickEventRelax(songObj,position) {
var songName = songObj.fileName;
var id = '#relax' + position;
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
changeCurrentSongDetails(songObj);
}
});
}
function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image)
    $('.current-song-name').text(songObj.name)
    $('.current-song-album').text(songObj.album)
  }


  $('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
  if(name.length > 3) {
  var message = "Welcome, " +  name + ".";
  $('.gallery .user-name').text(message);
  $('.welcome-screen').addClass('hidden');
  $('.gallery').removeClass('hidden');
  }
  else {
  $('#name-input').addClass('error');
  $('#name-input').val('');
  $('#name-input').attr("placeholder", "Name too short! Try Again.");
  }
  });

  $('body').on('keypress', function() {
    var name = $('#name-input').val();
    if(event.keyCode==13)
    {
      if(name.length > 3) {
      var message = "Welcome, " +  name + ".";
      $('.gallery .user-name').text(message);
      $('.welcome-screen').addClass('hidden');
      $('.gallery').removeClass('hidden');
      }
      else {
      $('#name-input').addClass('error');
      $('#name-input').val('');
      $('#name-input').attr("placeholder", "Name too short! Try Again.");
      }
    }


  });

  $('.play-icon').on('click',function()
  {
  toggleSong();
  });


  $('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});
$('#back-happy').on('click',function()
{
  $('.gallery').removeClass('hidden');
  $('.happy').addClass('hidden');
})
$('#back-sad').on('click',function()
{
  $('.gallery').removeClass('hidden');
  $('.sad').addClass('hidden');
})
$('#back-relax').on('click',function()
{
  $('.gallery').removeClass('hidden');
  $('.relax').addClass('hidden');
})
$('#back-party').on('click',function()
{
  $('.gallery').removeClass('hidden');
  $('.party').addClass('hidden');
})
  // $('#name-input').on('keypress', function() {
  // var name = $('#name-input').val();
  // if(name.length > 2 && event.keyCode == 13)
  // {
  // var message = "Welcome, " +  name;
  // $('.main .user-name').text(message);
  // $('.welcome-screen').addClass('hidden');
  // $('.main').removeClass('hidden');
  // }
  // else {
  // $('#name-input').addClass('error');
  // }
  // });


$('#happy').on('click',function()
{
  $('.happy').removeClass('hidden');
  $('.gallery').addClass('hidden');
  changeCurrentSongDetails(happy[0]);
  updateCurrentTime();
  setInterval(function()
  {
    updateCurrentTime();
  },1000);
  for(var i=0; i < happy.length;i++) {
        var obj = happy[i];
        var name = '#happy' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEventHappy(obj,i+1);
    };
    $('#happytable').DataTable({
        paging: false
    });
})

$('#sad').on('click',function()
{
  $('.sad').removeClass('hidden');
  $('.gallery').addClass('hidden');
  changeCurrentSongDetails(sad[0]);
  updateCurrentTime();
  setInterval(function()
  {
    updateCurrentTime();
  },1000);
  for(var i=0; i < sad.length;i++) {
        var obj = sad[i];
        var name = '#sad' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEventSad(obj,i+1);
    };
    $('#sadtable').DataTable({
        paging: false
    });
})

$('#relax').on('click',function()
{
  $('.relax').removeClass('hidden');
  $('.gallery').addClass('hidden');
  changeCurrentSongDetails(relax[0]);
  updateCurrentTime();
  setInterval(function()
  {
    updateCurrentTime();
  },1000);
  for(var i=0; i < relax.length;i++) {
        var obj = relax[i];
        var name = '#relax' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEventRelax(obj,i+1);
    };
    $('#relaxtable').DataTable({
        paging: false
    });
})

$('#party').on('click',function()
{
  $('.party').removeClass('hidden');
  $('.gallery').addClass('hidden');
  changeCurrentSongDetails(party[0]);
  updateCurrentTime();
  setInterval(function()
  {
    updateCurrentTime();
  },1000);
  for(var i=0; i < party.length;i++) {
        var obj = party[i];
        var name = '#party' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEventParty(obj,i+1);
    };
    $('#partytable').DataTable({
        paging: false
    });
})
