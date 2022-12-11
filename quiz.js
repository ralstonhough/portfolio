let stage = document.getElementById("stage");
let topRow = document.getElementById("topRow");
let bottomRow = document.getElementById("bottomRow");
let leftColumn = document.getElementById("leftColumn");
let rightColumn = document.getElementById("rightColumn");
let nameContainer = document.getElementById("nameContainer");
let gameTitles = document.getElementsByClassName("gameTitle");
let nameTitle = document.getElementById("nameTitle");
let thatContainer = document.getElementById("thatContainer");
let thatTitle = document.getElementById("thatTitle");
let movieContainer = document.getElementById("movieContainer");
let movieTitle = document.getElementById("movieTitle");
let textContainer = document.getElementById("textContainer");
let gameText = document.getElementById("gameText");
let bulbs = document.getElementsByClassName("bulb");
let startButton = document.getElementById("startButton");
let answerBox = document.getElementById("answerBox");
let answerContainer = document.getElementById("answerContainer");
let bulb1 = document.getElementById("bulb1");
let bulb2 = document.getElementById("bulb2");
let bulb3 = document.getElementById("bulb3");
let bulb4 = document.getElementById("bulb4");
let bulb5 = document.getElementById("bulb5");
let bulb6 = document.getElementById("bulb6");
let bulb7 = document.getElementById("bulb7");
let bulb8 = document.getElementById("bulb8");
let bulb9 = document.getElementById("bulb9");
let bulb10 = document.getElementById("bulb10");
let bulb11 = document.getElementById("bulb11");
let bulb12 = document.getElementById("bulb12");
let bulb13 = document.getElementById("bulb13");
let bulb14 = document.getElementById("bulb14");
let bulb15 = document.getElementById("bulb15");
let bulb16 = document.getElementById("bulb16");
let bulb17 = document.getElementById("bulb17");
let bulb18 = document.getElementById("bulb18");
let bulb19 = document.getElementById("bulb19");
let bulb20 = document.getElementById("bulb20");
let bulb21 = document.getElementById("bulb21");
let bulb22 = document.getElementById("bulb22");
let bulb23 = document.getElementById("bulb23");
let bulb24 = document.getElementById("bulb24");
let bulb25 = document.getElementById("bulb25");
let bulb26 = document.getElementById("bulb26");
let bulb27 = document.getElementById("bulb27");
let bulb28 = document.getElementById("bulb28");
let bulb29 = document.getElementById("bulb29");
let bulb30 = document.getElementById("bulb30");
let bulb31 = document.getElementById("bulb31");
let bulb32 = document.getElementById("bulb32");
let bulb33 = document.getElementById("bulb33");
let bulb34 = document.getElementById("bulb34");
let bulb35 = document.getElementById("bulb35");
let bulb36 = document.getElementById("bulb36");
let bulb37 = document.getElementById("bulb37");
let bulb38 = document.getElementById("bulb38");
let bulb39 = document.getElementById("bulb39");
let bulb40 = document.getElementById("bulb40");
let bulb41 = document.getElementById("bulb41");
let bulb42 = document.getElementById("bulb42");
let bulb43 = document.getElementById("bulb43");
let bulb44 = document.getElementById("bulb44");
let bulb45 = document.getElementById("bulb45");
let bulb46 = document.getElementById("bulb46");
let youGot = document.getElementById("youGot");
let finalScore = document.getElementById("finalScore");
let message = document.getElementById("message");
let affirmations = ["Well done, you!","Jolly good show.","Impressive. Most impressive.","How about that?","You did it!","I&#8217m so proud of you.","Not bad! Not bad at all!","The bards shall sing <br>of your deeds.","Pretty good!","Nice!"];
let randomAffirmation = affirmations[Math.floor(Math.random() * (affirmations.length - 0) + 0)];
let seconds = 0;
let score = 0;
let correctAnswer;
let randomMovie;
let randomObject;

let movies = [{name:"Gone with the Wind", hint:"Frankly, my dear, I don't give a damn."},
              {name:"The Godfather", hint:"I&#8217m going to make him an offer he can&#8217t refuse."},
              {name:"On the Waterfront", hint:"You don&#8217t understand!  I coulda had class. I coulda been a contender. I could&#8217ve been somebody, instead of a bum, which is what I am."},
              {name:"The Wizard of Oz", hint:"Toto, I&#8217ve got a feeling we&#8217re not in Kansas anymore."},
              {name:"Casablanca", hint:"Here&#8217s looking at you, kid."},
              {name:"Sudden Impact", hint:"Go ahead, make my day."},
              {name:"Sunset Blvd.", hint:"All right, Mr. DeMille, I'm ready for my closeup."},
              {name:"Star Wars", hint:"May the Force be with you."},
              {name:"All About Eve", hint:"Fasten your seatbelts. It&#8217s going to be a bumpy night."},
              {name:"Taxi Driver", hint:"You talking to me?"},
              {name:"Cool Hand Luke", hint:"What we&#8217ve got here is failure to communicate."},
              {name:"Apocalypse Now", hint:"I love the smell of napalm in the morning."},
              {name:"Love Story", hint:"Love means never having to say you&#8217re sorry."},
              {name:"The Maltese Falcon", hint:"The stuff that dreams are made of."},
              {name:"E.T. the Extraterrestrial", hint:"E.T. phone home."},
              {name:"In the Heat of the Night", hint:"They call me Mister Tibbs!"},
              {name:"Citizen Kane", hint:"Rosebud."},
              {name:"White Heat", hint:"Made it, Ma! Top of the world!"},
              {name:"Network", hint:"I&#8217m as mad as hell, and I&#8217m not going to take this anymore!"},
              {name:"Casablanca", hint:"Louis, I think this is the beginning of a beautiful friendship."},
              {name:"The Silence of the Lambs", hint:"A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti."},
              {name:"Dr. No", hint:"Bond. James Bond."},
              {name:"The Wizard of Oz", hint:"There&#8217s no place like home."},
              {name:"Sunset Blvd.", hint:"I am big!  It&#8217s the pictures that got small."},
              {name:"Jerry Maguire", hint:"Show me the money!"},
              {name:"She Done Him Wrong", hint:"Why don&#8217t you come up sometime and see me?"},
              {name:"Midnight Cowboy", hint:"I&#8217m walking here!  I&#8217m walking here!"},
              {name:"Casablanca", hint:"Play it, Sam.  Play &#8216As Time Goes By.&#8217"},
              {name:"A Few Good Men", hint:"You can&#8217t handle the truth!"},
              {name:"Grand Hotel", hint:"I want to be alone."},
              {name:"Gone with the Wind", hint:"After all, tomorrow is another day!"},
              {name:"Casablanca", hint:"Round up the usual suspects."},
              {name:"When Harry Met Sally", hint:"I&#8217ll have what she&#8217s having."},
              {name:"To Have and Have Not", hint:"You know how to whistle, don&#8217t you, Steve? You just put your lips together and blow."},
              {name:"Jaws", hint:"You&#8217re gonna need a bigger boat."},
              {name:"The Treasure of the Sierra Madre", hint:"Badges? We ain&#8217t got no badges! We don&#8217t need no badges! I don&#8217t have to show you any stinking badges!"},
              {name:"The Terminator", hint:"I&#8217ll be back."},
              {name:"The Pride of the Yankees", hint:"Today, I consider myself the luckiest man on the face of the earth."},
              {name:"Field of Dreams", hint:"If you build it, he will come."},
              {name:"Forrest Gump", hint:"Mama always said life was like a box of chocolates. You never know what you&#8217re gonna get."},
              {name:"Bonnie and Clyde", hint:"We rob banks."},
              {name:"The Graduate", hint:"Plastics."},
              {name:"Casablanca", hint:"We&#8217ll always have Paris."},
              {name:"The Sixth Sense", hint:"I see dead people."},
              {name:"A Streetcar Named Desire", hint:"Stella!  Hey, Stella!"},
              {name:"Now, Voyager", hint:"Oh, Jerry, don&#8127t let&#8217s ask for the moon. We have the stars."},
              {name:"Shane", hint:"Shane.  Shane.  Come back!"},
              {name:"Some Like It Hot", hint:"Well, nobody&#8217s perfect."},
              {name:"Frankenstein", hint:"It&#8217s alive!  It&#8217s alive!"},
              {name:"Apollo 13", hint:"Houston, we have a problem."},
              {name:"Dirty Harry", hint:"You&#8217ve got to ask yourself one question: &#8216Do I feel lucky?&#8217 Well, do ya, punk?"},
              {name:"Jerry Maguire", hint:"You had me at &#8216hello.&#8217"},
              {name:"Animal Crackers", hint:"One morning I shot an elephant in my pajamas. How he got in my pajamas, I don&#8217t know."},
              {name:"A League of Their Own", hint:"There&#8217s no crying in baseball!"},
              {name:"Annie Hall", hint:"La-dee-da, la-dee-da."},
              {name:"Psycho", hint:"A boy&#8217s best friend is his mother."},
              {name:"Wall Street", hint:"Greed, for lack of a better word, is good."},
              {name:"The Godfather II", hint:"Keep your friends close, but your enemies closer."},
              {name:"Gone with the Wind", hint:"As God is my witness, I&#8217ll never be hungry again."},
              {name:"Sons of the Desert", hint:"Well, here&#8217s another nice mess you&#8217ve gotten me into!"},
              {name:"Scarface", hint:"Say &#8216hello&#8217 to my little friend!"},
              {name:"Beyond the Forest", hint:"What a dump."},
              {name:"The Graduate", hint:"Mrs. Robinson, you&#8217re trying to seduce me. Aren&#8217t you?"},
              {name:"Dr. Strangelove", hint:"Gentlemen, you can&#8217t fight in here! This is the War Room!"},
              {name:"The Adventures of Sherlock Holmes", hint:"Elementary, my dear Watson."},
              {name:"Planet of the Apes", hint:"Take your stinking paws off me, you damned dirty ape."},
              {name:"Casablanca", hint:"Of all the gin joints in all the towns in all the world, she walks into mine."},
              {name:"The Shining", hint:"Here&#8217s Johnny!"},
              {name:"Poltergeist", hint:"They&#8217re here!"},
              {name:"Marathon Man", hint:"Is it safe?"},
              {name:"The Jazz Singer", hint:"Wait a minute, wait a minute.  You ain&#8217t heard nothin&#8217 yet!"},
              {name:"Mommie Dearest", hint:"No wire hangers, ever!"},
              {name:"Little Caesar", hint:"Mother of mercy, is this the end of Rico?"},
              {name:"Chinatown", hint:"Forget it, Jake, it&#8217s Chinatown."},
              {name:"A Streetcar Named Desire", hint:"I have always depended on the kindness of strangers."},
              {name:"Terminator 2: Judgment Day", hint:"Hasta la vista, baby."},
              {name:"Soylent Green", hint:"Soylent Green is people!"},
              {name:"2001: A Space Odyssey", hint:"Open the pod bay doors, HAL."},
              {name:"Airplane!", hint:"Striker: Surely you can&#8217t be serious. Rumack: I am serious…and don&#8217t call me Shirley."},
              {name:"Rocky", hint:"Yo, Adrian!"},
              {name:"Funny Girl", hint:"Hello, gorgeous."},
              {name:"National Lampoon's Animal House", hint:"Toga! Toga!"},
              {name:"Dracula", hint:"Listen to them.  Children of the night.  What music they make."},
              {name:"King Kong", hint:"Oh, no, it wasn&#8217t the airplanes. It was Beauty killed the Beast."},
              {name:"The Two Towers", hint:"My precious."},
              {name:"Dog Day Afternoon", hint:"Attica! Attica!"},
              {name:"42nd Street", hint:"Sawyer, you&#8217re going out a youngster, but you&#8217ve got to come back a star!"},
              {name:"On Golden Pond", hint:"Listen to me, mister. You&#8217re my knight in shining armor.  Don&#8217t you forget it.  You&#8217re going to get back on that horse, and I&#8217m going to be right behind you, holding on tight, and away we&#8217re gonna go, go, go!"},
              {name:"Knute Rockne All American", hint:"Tell &#8217em to go out there with all they got and win just one for the Gipper."},
              {name:"Goldfinger", hint:"A martini.  Shaken, not stirred."},
              {name:"The Naughty Nineties", hint:"Who&#8217s on first."},
              {name:"Caddyshack", hint:"Cinderella story.  Outta nowhere.  A former greenskeeper, now, about to  become the Masters champion.  It looks like a mirac…It&#8217s in the hole!  It&#8217s in the hole!  It&#8217s in the hole!"},
              {name:"Auntie Mame", hint:"Life is a banquet, and most poor suckers are starving to death!"},
              {name:"Top Gun", hint:"I feel the need — the need for speed!"},
              {name:"Dead Poets Society", hint:"Carpe diem.  Seize the day, boys.  Make your lives extraordinary."},
              {name:"Moonstruck", hint:"Snap out of it!"},
              {name:"Yankee Doodle Dandy", hint:"My mother thanks you. My father thanks you. My sister thanks you. And I thank you."},
              {name:"Dirty Dancing", hint:"Nobody puts Baby in a corner."},
              {name:"The Wizard of Oz", hint:"I&#8217ll get you, my pretty, and your little dog, too!"},
              {name:"Titanic", hint:"I&#8217m king of the world!"},
             ];

function endgame(){
    gameText.style.opacity = 0;
    answerBox.style.opacity = 0;
    youGot.style.opacity = 1;
    message.style.opacity = 1;
    finalScore.style.opacity = 1;
    finalScore.innerHTML = score;
    message.innerHTML = randomAffirmation;
    console.log(movies);
};

function timer() {
  seconds += 1;
  if (seconds < 47) {
    let targetBulb = document.getElementById("bulb" + seconds);
    targetBulb.style.opacity = 0;
  } else if(seconds > 47) {
    endgame();
  };
};

startButton.onclick = function() {
  setInterval(timer, 1000);
  for (gameTitle of gameTitles){
    gameTitle.style.opacity = 0;
  };
  startButton.style.opacity = 0;
  gameText.style.opacity = 1;
  randomObject = Math.floor(Math.random() * (movies.length - 0) + 0);
  randomMovie = movies[randomObject];
  correctAnswer = randomMovie.name;
  gameText.innerHTML = "&#8220" + randomMovie.hint + "&#8221";
  answerBox.style.opacity = 1;
  movies.splice(randomObject,1);
};

answerBox.addEventListener("keydown", function(e){
    if(e.key == "Enter"){
      if(answerBox.value.toLowerCase() == correctAnswer.toLowerCase()){
        score += 1;
      } else {
        gameText.style.color = "red";
        gameText.style.textShadow = "0 0 1.25vw red";
        answerBox.style.border = "3px solid red";
        answerBox.style.boxShadow = "0 0 1.25vw red";
        for (let bulb of bulbs) {
          bulb.style.background = "red";
          bulb.style.boxShadow = "0 0 1.25vw red";
        };
        setInterval(function() {
          gameText.style.color = "white";
          gameText.style.textShadow = "0 0 1.25vw white";
          answerBox.style.border = "3px solid white";
          answerBox.style.boxShadow = "0 0 1.25vw white";
          for (let bulb of bulbs) {
            bulb.style.background = "white";
            bulb.style.boxShadow = "0 0 1.25vw white";
          };
        }, 500);
      };
      movies.splice(randomObject,1); 
      randomObject = Math.floor(Math.random() * (movies.length - 0) + 0);
      randomMovie = movies[randomObject];
      correctAnswer = randomMovie.name;
      gameText.innerHTML = "&#8220" + randomMovie.hint + "&#8221";
      answerBox.value = "";
   };
});