
export default function( {modeNight}
  
){
  const modeN = document.querySelector('.modeN');
  const modeD = document.querySelector('.modeD');
  const musicForest = new Audio("./sounds/Floresta.wav");
  const musicRain = new Audio("./sounds/Chuva.wav");
  const musicCoffe = new Audio("./sounds/Cafeteria.wav");
  const musicFire = new Audio("./sounds/Lareira.wav");
  const buttonForest = document.querySelector(".forest");
  const buttonRain = document.querySelector(".rain");
  const buttonCoffe = document.querySelector(".coffe");
  const buttonFire = document.querySelector(".fire");
  let buttonForestActived = false;
  let buttonRainActived = false;
  let buttonCoffeActived = false;
  let buttonFireActived = false;
  let colorCleanBack = "#E1E1E6";
  let colorCleanImage ="#323238";
  let colorSelectBack = "#02799D";
  let colorWhite = "#FFF"
  let colorCleanBackNight = "#29292E";
  let colorCleanImageNight ="#C4C4CC";
  let colorSelectBackNight = "#0A3442";
  let forestSvgBackground = document.querySelector("#forestSvgBackground")
  let forestSvgColorImage = document.querySelector("#forestSvgColorImage")
  let rainSvgBackground = document.querySelector("#rainSvgBackground")
  let rainSvgColorImage = document.querySelector("#rainSvgColorImage")
  let coffeSvgBackground = document.querySelector("#coffeSvgBackground")
  let coffeSvgColorImage = document.querySelector("#coffeSvgColorImage")
  let fireSvgBackground =document.querySelector("#fireSvgBackground")
  let fireSvgColorImage = document.querySelector("#fireSvgColorImage")


  function thisVolumeForest(volume_value)
  {
    musicForest.volume = volume_value / 100;
    
  }
  function thisVolumeRain(volume_value)
  {
    musicRain.volume = volume_value / 100;
    
  }
  function thisVolumeCoffe(volume_value)
  {
    musicCoffe.volume = volume_value / 100;
    
  }
  function thisVolumeFire(volume_value)
  {
    musicFire.volume = volume_value / 100;
    
  }
  modeN.addEventListener('click', function(){
    modeNight = true;
  })
  
  modeD.addEventListener('click', function(){
    modeNight = false;
  })


  function disableMusics() {
    musicForest.pause();
    musicRain.pause();
    musicCoffe.pause();
    musicFire.pause();
    document.querySelector('#vol-control-forest').value = 0;
    document.querySelector('#vol-control-rain').value = 0;
    document.querySelector('#vol-control-coffe').value = 0;
    document.querySelector('#vol-control-fire').value = 0;
  }

  function cleanSelectedButtons(colorBackground, colorImage){
    document.querySelector("#forestSvgBackground").style.fill = colorBackground;
    document.querySelector("#forestSvgColorImage").style.fill = colorImage;
    document.querySelector("#rainSvgBackground").style.fill = colorBackground;
    document.querySelector("#rainSvgColorImage").style.fill = colorImage;
    document.querySelector("#coffeSvgBackground").style.fill = colorBackground;
    document.querySelector("#coffeSvgColorImage").style.fill = colorImage;
    document.querySelector("#fireSvgBackground").style.fill = colorBackground;
    document.querySelector("#fireSvgColorImage").style.fill = colorImage;
    document.documentElement.style.setProperty('--colorSelForest', colorImage);
    document.documentElement.style.setProperty('--colorSelRain', colorImage);
    document.documentElement.style.setProperty('--colorSelCoffe', colorImage);
    document.documentElement.style.setProperty('--colorSelFire', colorImage);
  
  }  
  function colorSelectedButtonDay (buttonBackground, buttonImage) {
    buttonBackground.style.fill = colorSelectBack
    buttonImage.style.fill =colorWhite
  }
  function colorSelectedButtonDNight (buttonBackground, buttonImage) {
    buttonBackground.style.fill = colorSelectBackNight
    buttonImage.style.fill =colorWhite
  }

  buttonForest.addEventListener('click', function(){
    disableMusics();
    musicForest.play();
    document.querySelector('#vol-control-forest').value = 50;

    if(buttonForestActived==false){
      buttonForestActived=true;
      if(modeNight==false){
        cleanSelectedButtons(colorCleanBack, colorCleanImage);
        colorSelectedButtonDay(forestSvgBackground, forestSvgColorImage);
      }else { 
        cleanSelectedButtons(colorCleanBackNight, colorCleanImageNight); 
        colorSelectedButtonDNight(forestSvgBackground, forestSvgColorImage)
      }
      document.documentElement.style.setProperty('--colorSelForest', '#FFF');
    }else{
      disableMusics();
      document.querySelector('#vol-control-forest').value = 0;
      if(modeNight==false){
        cleanSelectedButtons(colorCleanBack, colorCleanImage);
        document.documentElement.style.setProperty('--colorSelForest', '#323238'); 
      }else { 
        cleanSelectedButtons(colorCleanBackNight, colorCleanImageNight);
      }
      buttonForestActived =false;
    }
  })

  buttonRain.addEventListener('click', function(){
    disableMusics();
    musicRain.play();
    document.querySelector('#vol-control-rain').value = 50;

    if(buttonRainActived==false){
      buttonRainActived=true;
      if(modeNight==false){
        cleanSelectedButtons(colorCleanBack, colorCleanImage);
        colorSelectedButtonDay(rainSvgBackground, rainSvgColorImage);
      }else { 
        cleanSelectedButtons(colorCleanBackNight, colorCleanImageNight); 
        colorSelectedButtonDNight(rainSvgBackground, rainSvgColorImage)
      }
      document.documentElement.style.setProperty('--colorSelRain', '#FFF');
    }else{
      disableMusics();
      document.querySelector('#vol-control-rain').value = 0;
      if(modeNight==false){
        cleanSelectedButtons(colorCleanBack, colorCleanImage);
        document.documentElement.style.setProperty('--colorSelRain', '#323238'); 
      }else { 
        cleanSelectedButtons(colorCleanBackNight, colorCleanImageNight); 
      }
      buttonRainActived =false;
    }
  })
  
  buttonCoffe.addEventListener('click', function(){
    disableMusics();
    musicCoffe.play();
    document.querySelector('#vol-control-coffe').value = 50;

    if(buttonCoffeActived==false){
      buttonCoffeActived=true;
      if(modeNight==false){
        cleanSelectedButtons(colorCleanBack, colorCleanImage);
        colorSelectedButtonDay(coffeSvgBackground, coffeSvgColorImage);
      }else { 
        cleanSelectedButtons(colorCleanBackNight, colorCleanImageNight); 
        colorSelectedButtonDNight(coffeSvgBackground, coffeSvgColorImage)
      }
      document.documentElement.style.setProperty('--colorSelCoffe', '#FFF');
    }else{
      disableMusics();
      document.querySelector('#vol-control-coffe').value = 0;
      if(modeNight==false){
        cleanSelectedButtons(colorCleanBack, colorCleanImage);
        document.documentElement.style.setProperty('--colorSelCoffe', '#323238'); 
      }else { 
        cleanSelectedButtons(colorCleanBackNight, colorCleanImageNight); 
      }
      buttonCoffeActived =false;
    }
  })
  buttonFire.addEventListener('click', function(){
    disableMusics();
    musicFire.play();
    document.querySelector('#vol-control-fire').value = 50;

    if(buttonFireActived==false){
      buttonFireActived=true;
      if(modeNight==false){
        cleanSelectedButtons(colorCleanBack, colorCleanImage);
        colorSelectedButtonDay(fireSvgBackground, fireSvgColorImage);
      }else { 
        cleanSelectedButtons(colorCleanBackNight, colorCleanImageNight); 
        colorSelectedButtonDNight(fireSvgBackground, fireSvgColorImage)
      }
      document.documentElement.style.setProperty('--colorSelFire', '#FFF');
    }else{
      disableMusics();
      document.querySelector('#vol-control-fire').value = 0;
      if(modeNight==false){
        cleanSelectedButtons(colorCleanBack, colorCleanImage);
        document.documentElement.style.setProperty('--colorSelFire', '#323238'); 
      }else { 
        cleanSelectedButtons(colorCleanBackNight, colorCleanImageNight); 
      }
      buttonFireActived =false;
    }
  })
  
  return {
    disableMusics, 
    
    thisVolumeForest,
  
    thisVolumeRain,
  
    thisVolumeFire,

    thisVolumeCoffe
    
  }
}