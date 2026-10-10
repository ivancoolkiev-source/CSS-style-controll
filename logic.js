document.addEventListener('DOMContentLoaded', () => {
    
    let r = 225;
    let g = 225;
    let b = 225;

    let shadowR = 0;
    let shadowG = 0;
    let shadowB = 0;

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
    let shadowButton = document.getElementById ('toggle-shadow')
    let shadowOpen = document.getElementById ('shadow-section')

    let xPos =  document.getElementById ('x-pos')
    let xPosValue = document.getElementById ('value-pos-x')

    let yPos = document.getElementById ('y-pos')
    let yPosValue = document.getElementById ('value-pos-y')

    let shadowBlur = document.getElementById ('shadow-blur')
    let shadowBlurValue = document.getElementById ('value-shadow-blur')

    let shadowSpread = document.getElementById ('shadow-spread')
    let shadowSpreadValue = document.getElementById ('value-shadow-spread')
    
    let colorRedShadow = document.getElementById ('red-shdw')
    let redValueShadow = document.getElementById ('value-color-r-shdw')

    let colorGreenShadow = document.getElementById ('green-shdw')
    let greenValueShadow = document.getElementById ('value-color-g-shdw')

    let colorBlueShadow = document.getElementById ('blue-shdw')
    let blueValueShadow = document.getElementById ('value-color-b-shdw')

    let shadowOpacity = document.getElementById ('shadow-opacity')
    let shadowOpacityValue = document.getElementById ('value-shadow-opacity')

    let shadowInset = document.getElementById ('shadow-inset')

    /*-- Обработчики --*/
    colorRed.oninput = updateColor;
    colorGreen.oninput = updateColor;
    colorBlue.oninput = updateColor;
    opacityBg.oninput = updateColor;

    colorRedShadow.oninput = updateShadow;
    colorGreenShadow.oninput = updateShadow;
    colorBlueShadow.oninput = updateShadow;

    xPos.oninput = updateShadow;
    yPos.oninput = updateShadow;
    shadowBlur.oninput = updateShadow;
    shadowSpread.oninput = updateShadow;
    shadowOpacity.oninput = updateShadow;
    shadowInset.oninput = updateShadow;
    

    /*-- Функции --*/
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

    shadowButton.onclick = function () {
        shadowOpen.classList.toggle('open')
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

    function updateShadow () {
       shadowR = colorRedShadow.value
       shadowG = colorGreenShadow.value
       shadowB = colorBlueShadow.value

       xPosValue.textContent = xPos.value + 'px';
       yPosValue.textContent = yPos.value + 'px';

       shadowBlurValue.textContent = shadowBlur.value + 'px';
       shadowSpreadValue.textContent = shadowSpread.value + 'px';
       shadowOpacityValue.textContent = shadowOpacity.value;

       redValueShadow.textContent = colorRedShadow.value
       greenValueShadow.textContent = colorGreenShadow.value
       blueValueShadow.textContent = colorBlueShadow.value

       box.style.boxShadow = xPos.value + 'px ' + yPos.value + 'px ' + shadowBlur.value + 'px ' + shadowSpread.value + 'px ' + 'rgba(' + shadowR + ', ' + shadowG + ', ' + shadowB + ', ' + shadowOpacity.value + ')' + (shadowInset.checked ? 'inset' : '');
    }
    updateShadow();

    
});