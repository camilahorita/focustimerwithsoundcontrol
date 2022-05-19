import Sounds from './sounds.js'
import Controls from'./controls.js'

let modeNight = false; 

Controls()

const modeN = document.querySelector('.modeN');
const modeD = document.querySelector('.modeD');
const bodyBackground = document.querySelector('body');
const buttonsBackground = document.querySelectorAll(".buttonsBackground");
const buttonsColor = document.querySelectorAll(".buttonsColor");
const modeNightWhite = document.querySelectorAll(".modeNightWhite");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
const point = document.querySelector(".point");
const svgFillForest= document.querySelector("#forestSvgBackground");
const svgFillRain= document.querySelector("#rainSvgBackground");
const svgFillCoffe= document.querySelector("#coffeSvgBackground");
const svgFillFire= document.querySelector("#fireSvgBackground");
const fillButtonSoundsNight = "#29292E";
const fillButtonSoundsDay = "#E1E1E6";
let volForestSound = document.querySelector("#vol-control-forest");
let volRainSound = document.querySelector("#vol-control-rain");
let volFireSound = document.querySelector("#vol-control-fire");
let volCoffeSound = document.querySelector("#vol-control-coffe");
let sounds = Sounds({modeNight})


volForestSound.addEventListener('change',function() {
  var volumeValueSliderForest = volForestSound.value;
  sounds.thisVolumeForest(volumeValueSliderForest);
} );

volRainSound.addEventListener('change',function() {
  var volumeValueSliderRain = volRainSound.value;
  sounds.thisVolumeRain(volumeValueSliderRain);
} );

volCoffeSound.addEventListener('change',function() {
  var volumeValueSliderCoffe = volCoffeSound.value;
  sounds.thisVolumeCoffe(volumeValueSliderCoffe);
} );
volFireSound.addEventListener('change',function() {
  var volumeValueSliderFire = volFireSound.value;
  sounds.thisVolumeFire(volumeValueSliderFire);
} );

function modeNightFunc (){
  bodyBackground.style.background = "#000000";
  document.documentElement.style.setProperty('--colorSelForest', '#C4C4CC');
  document.documentElement.style.setProperty('--colorSelRain', '#C4C4CC');
  document.documentElement.style.setProperty('--colorSelCoffe', '#C4C4CC');
  document.documentElement.style.setProperty('--colorSelFire', '#C4C4CC');
  modeD.classList.remove('displaynone');
  modeN.classList.add('displaynone');
  for ( let n =0; n < buttonsBackground.length; n++){
    buttonsBackground[n].style.background ="#000";
  };
  for (let i = 0 ; i < buttonsColor.length; i++ ){
    buttonsColor[i].style.fill = "#C4C4CC"
  }
  for (let i = 0 ; i < modeNightWhite.length; i++ ){
    modeNightWhite[i].style.fill = "#FFF"
  }
  minutes.style.color = "#FFF";
  seconds.style.color = "#FFF";
  point.style.color = "#FFF";

  svgFillForest.style.fill = fillButtonSoundsNight;
  svgFillRain.style.fill = fillButtonSoundsNight
  svgFillCoffe.style.fill = fillButtonSoundsNight
  svgFillFire.style.fill = fillButtonSoundsNight
  
}

function modeDay (){
  document.documentElement.style.setProperty('--color', '#323238');
  document.documentElement.style.setProperty('--colorSelForest', '#323238');
  document.documentElement.style.setProperty('--colorSelRain', '#323238');
  document.documentElement.style.setProperty('--colorSelCoffe', '#323238');
  document.documentElement.style.setProperty('--colorSelFire', '#323238');
  bodyBackground.style.background = "#FFF";
  modeD.classList.add('displaynone');
  modeN.classList.remove('displaynone');

  for ( let n =0; n < buttonsBackground.length; n++){
    buttonsBackground[n].style.background ="#FFF";
  };
  for (let i = 0 ; i < buttonsColor.length; i++ ){
    buttonsColor[i].style.fill = "#323238"
  }
  for (let i = 0 ; i < modeNightWhite.length; i++ ){
    modeNightWhite[i].style.fill = "#323238"
  }
  minutes.style.color = "#323238";
  seconds.style.color = "#323238";
  point.style.color = "#323238";

  svgFillForest.style.fill = fillButtonSoundsDay;
  svgFillRain.style.fill = fillButtonSoundsDay;
  svgFillCoffe.style.fill = fillButtonSoundsDay;
  svgFillFire.style.fill = fillButtonSoundsDay;
}
modeN.addEventListener('click', function(){

  modeNightFunc();
  modeNight = true;
  sounds.disableMusics()
})

modeD.addEventListener('click', function(){

  modeDay();
  modeNight = false;
  sounds.disableMusics()
})
