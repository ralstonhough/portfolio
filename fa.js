let ratio;
let sentimentSlider = document.getElementById("sentimentSlider");
let goLive = document.getElementById("goLive");

let faRSS = `https://www.foreignaffairs.com/rss.xml`;
fetch(faRSS)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        console.log(data);
        let faText = "";
        let titles = data.querySelectorAll("title");
        let descriptions = data.querySelectorAll("description");
        for (let i = 1; i < 11; i++) {
            let desText = descriptions[i].innerHTML;
            let titText = titles[i].innerHTML
            console.log(desText);
            console.log(titText);
            faText += desText;
            faText += titText;
        };
        //Thanks to Chris Coyier for how to parse RSS to string
        let options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b156c9de98msh2063c059199c53ep1b56a0jsnace2ff8f093f',
                'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com'
            }
        };
        fetch(`https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=${faText}`, options)
            .catch(err => console.error(err))
            .then(response => response.json())
            .then(response => {
                score = response.score;
                ratio = response.ratio;
                console.log(response);
                console.log(`Score: ${score}`);
                console.log(`Ratio: ${ratio}`);
                sentimentSlider.value = map(ratio, -1,1,1,1000);
                goLive.onclick = function() {
                    ratio = response.ratio;
                    sentimentSlider.value = map(ratio, -1, 1, 1, 1000);
                  };
            });
    });

function setup() {
    createCanvas(350, 820);
    background('white');
};

function draw() {
    background('white');
    fill('black');

    let stemScaler = map(ratio, 1, -1, 92, 800);
    let armScaler = map(ratio, 1, -1, 42, 750);
    let topSerifScaler = map(ratio, 1, -1, 32, 740);
    let midSerifScaler = map(ratio, 1, -1, 56, 764);
    let bottomScaler = map(ratio, 1, -1, 80, 788);
    let quadScaler1 = map(ratio, 1, -1, 52, 760);
    let quadScaler2 = map(ratio, 1, -1, 55, 763);
    let rLegScaler = map(ratio, 1, -1, 58, 766);
    let gLegScaler = map(ratio, 1, -1, 62, 770);
    let sLegScaler = map(ratio, 1, -1, 58, 766);
    let sSpineScaler = map(ratio, 1, -1, 68, 776);
    
    //All crossbars
    //Top
    rect(26, 8, 308, 20);
    //F
    rect(34, topSerifScaler, 8, 20);
    rect(26, midSerifScaler, 16, 20);
    //O
    rect(50, bottomScaler, 16, 20);
    //R
    rect(74, midSerifScaler, 16, 20);
    //E
    rect(106, topSerifScaler, 8, 20);
    rect(98, midSerifScaler, 16, 20);
    rect(98, bottomScaler, 16, 20);
    //I
    //G
    rect(142, 32, 8, 20);
    rect(134, bottomScaler, 16, 20);
    //N
    //A
    rect(186, midSerifScaler, 16, 20);
    //F
    rect(218, topSerifScaler, 8, 20);
    rect(210, midSerifScaler, 16, 20);
    //F
    rect(242, topSerifScaler, 8, 20);
    rect(234, midSerifScaler, 16, 20);
    //A
    rect(258, midSerifScaler, 16, 20);
    //I
    //R
    rect(294, midSerifScaler, 16, 20);
    //S
    rect(326, topSerifScaler, 8, 20);
    rect(318, midSerifScaler, 16, 20);
    rect(318, bottomScaler, 16, 20);
    
    //All stems
    //F
    rect(26, 8, 4, stemScaler);
    rect(38, 8, 4, armScaler);
    //O
    rect(50, 8, 4, stemScaler);
    rect(62, 8, 4, stemScaler);
    //R
    rect(74, 8, 4, stemScaler);
    quad(86, 8, 90, 8, 90, quadScaler1, 86, quadScaler2);
    rect(86, rLegScaler, 4, 42);
    //E
    rect(98, 8, 4, stemScaler);
    rect(110, 8, 4, armScaler);
    //I
    rect(122, 8, 4, stemScaler);
    //G
    rect(134, 8, 4, stemScaler);
    rect(146, 38, 4, gLegScaler);
    //N
    rect(158, 8, 4, stemScaler);
    rect(170, 8, 4, stemScaler);
    //A
    rect(186, 8, 4, stemScaler);
    rect(198, 8, 4, stemScaler);
    //F
    rect(210, 8, 4, stemScaler);
    rect(222, 8, 4, armScaler);
    //F
    rect(234, 8, 4, stemScaler);
    rect(246,8, 4, armScaler);
    //A
    rect(258, 8, 4, stemScaler);
    rect(270, 8, 4, stemScaler);
    //I
    rect(282, 8, 4, stemScaler);
    //R
    rect(294, 8, 4, stemScaler);
    quad(306, 8, 310, 8, 310, quadScaler1, 306, quadScaler2);
    rect(306, rLegScaler, 4, 42);
    //S
    rect(318, 8, 4, sSpineScaler);
    rect(330, 8, 4, armScaler);
    rect(330, sLegScaler, 4, 42);
};

sentimentSlider.oninput = function() {
  let sliderValue = map(sentimentSlider.value,1,1000,-1,1);
  ratio = sliderValue;
};