/*Buildings organized by cost*/
oneDBuildings = ['small market', 'aqueduct'];
twoDBuildings = ['hacienda', 'construction hut', 'black market', 'forest house'];
threeDBuildings = ['small warehouse', 'storehouse'];
fourDBuildings = ['hospice', 'guest house'];
fiveDBuildings = ['office', 'large market', 'trading post', 'church' ];
sixDBuildings = ['large warehouse', 'small wharf'];
sevenDBuildings = ['factory', 'lighthouse'];
eightDBuildings = ['university', 'harbor', 'specialty factory', 'library'] ;
nineDBuildings = ['union hall','wharf'];
tenDBuildings = ['guild hall', 'residence', 'fortress', 'customs house', 'city hall', 'statue', 'cloister'];

/*Choosing the necessary number of buildings needed from each cost group*/
var i=0; 
var textOne="";
while (i<1) {
    var posOne = Math.floor(Math.random()*oneDBuildings.length);
    textOne += oneDBuildings[posOne];
    oneDBuildings.splice(posOne,1);
    document.getElementById("oneDollar").innerHTML=textOne;
    i++;  
}
var j=0; 
var textTwo="";
while (j<2) {
    var posTwo = Math.floor(Math.random()*twoDBuildings.length);
    textTwo += twoDBuildings[posTwo] + ", ";
    twoDBuildings.splice(posTwo,1);
    document.getElementById("twoDollar").innerHTML=textTwo;
    j++;  
}
var k=0; 
var textThree="";
while (k<1) {
    var posThree = Math.floor(Math.random()*threeDBuildings.length);
    textThree += threeDBuildings[posThree];
    threeDBuildings.splice(posThree,1);
    document.getElementById("threeDollar").innerHTML=textThree;
    k++;  
}
var l=0; 
var textFour="";
while (l<1) {
    var posFour = Math.floor(Math.random()*fourDBuildings.length);
    textFour += fourDBuildings[posOne];
    fourDBuildings.splice(posFour,1);
    document.getElementById("fourDollar").innerHTML=textFour;
    l++;  
}
var m=0; 
var textFive="";
while (m<2) {
    var posFive = Math.floor(Math.random()*fiveDBuildings.length);
    textFive += fiveDBuildings[posFive] + ", ";
    fiveDBuildings.splice(posFive,1);
    document.getElementById("fiveDollar").innerHTML=textFive;
    m++;  
}
var n=0; 
var textSix="";
while (n<1) {
    var posSix = Math.floor(Math.random()*sixDBuildings.length);
    textSix += sixDBuildings[posSix];
    sixDBuildings.splice(posSix,1);
    document.getElementById("sixDollar").innerHTML=textSix;
    n++;  
}
var o=0; 
var textSeven="";
while (o<1) {
    var posSeven = Math.floor(Math.random()*sevenDBuildings.length);
    textSeven += sevenDBuildings[posSeven];
    sevenDBuildings.splice(posSeven,1);
    document.getElementById("sevenDollar").innerHTML=textSeven;
    o++;  
}
var p=0; 
var textEight="";
while (p<2) {
    var posEight = Math.floor(Math.random()*eightDBuildings.length);
    textEight += eightDBuildings[posEight] + ", ";
    eightDBuildings.splice(posEight,1);
    document.getElementById("eightDollar").innerHTML=textEight;
    p++;  
}
var q=0; 
var textNine="";
while (q<1) {
    var posNine = Math.floor(Math.random()*nineDBuildings.length);
    textNine += nineDBuildings[posNine];
    nineDBuildings.splice(posNine,1);
    document.getElementById("nineDollar").innerHTML=textNine;
    q++;  
}
var r=0; 
var textTen="";
while (r<5) {
    var posTen = Math.floor(Math.random()*tenDBuildings.length);
    textTen += tenDBuildings[posTen] + ", ";
    tenDBuildings.splice(posTen,1);
    document.getElementById("tenDollar").innerHTML=textTen;
    r++;  
}
/*
var j=0; medium="";
while (j<4) {
    var posmedium = Math.floor(Math.random()*secondBuildings.length);
    medium += secondBuildings[posmedium] + ", ";
    secondBuildings.splice(posmedium,1);
    document.getElementById("c1r2").innerHTML=medium;
    j++;
}

var k=0; large="";
while (k<4) {
    var poslarge = Math.floor(Math.random()*thirdBuildings.length);
    large += thirdBuildings[poslarge] + ", ";
    thirdBuildings.splice(poslarge, 1);
    document.getElementById("c1r3").innerHTML=large;
    k++;
}
var l=0; giant="";
while (l<5) {
     var posgiant=Math.floor(Math.random()*largeBuildings.length);
    giant += largeBuildings[posgiant] + ", ";
    largeBuildings.splice(posgiant, 1);
    document.getElementById("c1r4").innerHTML=giant;
    l++;
}




/*

1 dollar:  1
small market
2 dollars: 2
hacienda
chut
3 dollars:  1
small warehouse
4 dollars: 1
hopice
5 dollars: 2
office
large market
6 dollars:  1
large warehouse
7 dollars:  1
factory
8 dollars:  2
university
harbor
9 dollars:  1
wharf
10 dollars:  5
guild hall
residence
fortress
customs house
city hall

var arrayPos = Math.floor(Math.random()*firstBuildings.length);
    var randc1r1 = firstBuildings[arrayPos];
    firstBuildings.splice(arrayPos, 1);
document.getElementById("c1r1").innerHTML=randc1r1;

var randc1r2=
console.log(firstBuildings);
*/
/* var rand = firstBuildings[Math.floor(Math.random() * firstBuildings.length)];
document.getElementById("c1r1").innerHTML=rand;
*/