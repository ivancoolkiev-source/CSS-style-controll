document.addEventListener('DOMContentLoaded', () => {

    /*-- BOX RGB --*/
    let r = 225;
    let g = 225;
    let b = 225;

    let box = document.getElementById('box')

    /*-- COLOR SECTION --*/
    let colorButton = document.getElementById('toggle-color')
    let colorOpen = document.getElementById('color-section')

    let colorRed = document.getElementById ('red')
    let redValue = document.getElementById ('value-color-r')

    let colorGreen = document.getElementById ('green')
    let greenValue = document.getElementById ('value-color-g')

    let colorBlue = document.getElementById ('blue')
    let blueValue = document.getElementById ('value-color-b')

    /*-- BLUR SECTION --*/
    let blurBg = document.getElementById('blur-bg')
    let blurBgValue = document.getElementById('value-bg-blur')

    let blurButton = document.getElementById('toggle-blur')
    let blurOpen = document.getElementById('blur-section')

    let opacityBg = document.getElementById('opacity-bg')
    let opacityBgValue = document.getElementById('value-bg-opacity')

    /*-- SHADOW SECTION --*/
    

    /*-- Обработчики --*/
    colorRed.oninput = updateColor;
    colorGreen.oninput = updateColor;
    colorBlue.oninput = updateColor;
    opacityBg.oninput = updateColor;

    /*-- FUNCTIONS --*/
    blurBg.oninput = function() {
        blurBgValue.textContent = blurBg.value + 'px';
        box.style.backdropFilter = 'blur(' + blurBg.value + 'px)';
    }

    blurButton.onclick = function() {
        blurOpen.classList.toggle('open')
    }

    colorButton.onclick = function() {
        colorOpen.classList.toggle('open')
    }

    function updateColor () {
       r = colorRed.value;
       g = colorGreen.value;
       b = colorBlue.value;

       redValue.textContent = colorRed.value;
       blueValue.textContent = colorBlue.value;
       greenValue.textContent = colorGreen.value;
       opacityBgValue.textContent = opacityBg.value;

       box.style.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacityBg.value + ')';
    }
    updateColor(); 
});