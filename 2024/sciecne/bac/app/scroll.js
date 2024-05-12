$(document).ready(function() {
  const introFrontalLobe = document.querySelector(".intro-frontal-lobe");
  const video = introFrontalLobe.querySelector('video');

  const controllerFrontalLobe = new ScrollMagic.Controller();

  const h1 = introFrontalLobe.querySelector("h1");
  const p1 = introFrontalLobe.querySelector(".p1");
  const p2 = introFrontalLobe.querySelector(".p2");
  const p3 = introFrontalLobe.querySelector(".p3");

  let sceneFrontalLobe = new ScrollMagic.Scene({
      duration: 6000,
      triggerElement: introFrontalLobe,
      triggerHook: 0
  })
  .setPin(introFrontalLobe)
  .addTo(controllerFrontalLobe);

  let accelamount = 0.1;
  let scrollpos = 0;
  let delay = 0;

  sceneFrontalLobe.on("update", function(e) {   
    scrollpos = (e.scrollPos)/1000;
  });

  setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
    
    if(video.currentTime > 9) {
      h1.classList.add('show');
      h1.classList.remove('hide');

      p1.classList.add('show');
      p1.classList.remove('hide');

      p2.classList.add('show');
      p2.classList.remove('hide');
      
      p3.classList.add('show');
      p3.classList.remove('hide');
    } else {
      h1.classList.add('hide');
      h1.classList.remove('show');

      p1.classList.add('hide');
      p1.classList.remove('show');

      p2.classList.add('hide');
      p2.classList.remove('show');

      p3.classList.add('hide');
      p3.classList.remove('show');
    }
  }, 33.3);

});