//Constants
const basketball = document.getElementById("track");

const handleOnDown = e => basketball.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  basketball.dataset.mouseDownAt = "0";  
  basketball.dataset.prevPercentage = basketball.dataset.percentage;
}

const handleOnMove = e => {
  if(basketball.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(basketball.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(basketball.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  basketball.dataset.percentage = nextPercentage;
  
  basketball.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of basketball.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

//Mouse Tracking

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);
