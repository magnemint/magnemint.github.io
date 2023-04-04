const cssbtn = document.querySelector('.cssbtn');
var cssbtna = document.querySelector('.cssbtn');

function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

cssbtn.innerHTML = "Light Mode";

cssbtn.addEventListener('click', () => {
    if(cssbtn.innerHTML == "Light Mode"){
        cssbtn.innerHTML = "Dark Mode";
        cssbtna.onclick = swapStyleSheet("./apps/lightstyle.css")
    } else {
        cssbtn.innerHTML = "Light Mode";
        cssbtna.onclick = swapStyleSheet("./apps/darkstyle.css")
    }
});
