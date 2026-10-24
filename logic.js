document.addEventListener('DOMContentLoaded', () => {
    
    /*-- ПЕРЕМЕННЫЕ --*/
    let r = 225;
    let g = 225;
    let b = 225;

    let shadowR = 0;
    let shadowG = 0;
    let shadowB = 0;

    let box = document.getElementById('box');
    let codeOutput = document.getElementById('code-output');

    /*-- Background --*/
    let Plains = document.getElementById('bg-plains')
    let Sky = document.getElementById('bg-sky')
    let Colors = document.getElementById('bg-colors')

    /*-- Color --*/
    let colorButton = document.getElementById('toggle-color');
    let colorOpen = document.getElementById('color-section');

    /*-- Blur --*/
    let blurBg = document.getElementById('blur-bg');
    let blurBgValue = document.getElementById('value-bg-blur');
    let blurButton = document.getElementById('toggle-blur');
    let blurOpen = document.getElementById('blur-section');
    let opacityBg = document.getElementById('opacity-bg');
    let opacityBgValue = document.getElementById('value-bg-opacity');

    /*-- Shadow --*/
    let shadowButton = document.getElementById('toggle-shadow');
    let shadowOpen = document.getElementById('shadow-section');
    
    let xPos = document.getElementById('x-pos');
    let xPosValue = document.getElementById('value-pos-x');
    
    let yPos = document.getElementById('y-pos');
    let yPosValue = document.getElementById('value-pos-y');
    
    let shadowBlur = document.getElementById('shadow-blur');
    let shadowBlurValue = document.getElementById('value-shadow-blur');
    
    let shadowSpread = document.getElementById('shadow-spread');
    let shadowSpreadValue = document.getElementById('value-shadow-spread');
    
    let shadowOpacity = document.getElementById('shadow-opacity');
    let shadowOpacityValue = document.getElementById('value-shadow-opacity');
    
    let shadowInset = document.getElementById('shadow-inset');

    /*-- COLOR PICKER --*/
    let pickerBg = new iro.ColorPicker('#color-picker', {
        width: 150,
        color: `rgb(${r}, ${g}, ${b})`
    });

    pickerBg.on('color:change', function(color) {
        r = color.red;
        g = color.green;
        b = color.blue;
        updateColor();
    });

    /*-- SHADOW COLOR PICKER --*/
    let pickerShadow = new iro.ColorPicker('#color-picker-shadow', {
        width: 150,
        color: `rgb(${shadowR}, ${shadowG}, ${shadowB})`
    });

    pickerShadow.on('color:change', function(color) {
        shadowR = color.red;
        shadowG = color.green;
        shadowB = color.blue;
        updateShadow();
    });

    /*-- CHECKER --*/

    opacityBg.oninput = updateColor;
    xPos.oninput = updateShadow;
    yPos.oninput = updateShadow;
    shadowBlur.oninput = updateShadow;
    shadowSpread.oninput = updateShadow;
    shadowOpacity.oninput = updateShadow;
    shadowInset.oninput = updateShadow;

    /*-- FUNCTIONS --*/

    Sky.onclick = function () {
    document.getElementById('previewPanel').style.backgroundImage = 'url("sky.jpg")';
    }

    Plains.onclick = function () {
    document.getElementById('previewPanel').style.backgroundImage = 'url("plains.jpg")';
    }
    
    Colors.onclick = function () {
    document.getElementById('previewPanel').style.backgroundImage = 'url("colors_bg.jpg")';
    }
    
    blurBg.oninput = function() {
        blurBgValue.textContent = blurBg.value + 'px';
        box.style.backdropFilter = 'blur(' + blurBg.value + 'px)';
        updateCode(); // Обновляем код внизу
    }

    blurButton.onclick = function() {
        blurOpen.classList.toggle('open');
    }

    colorButton.onclick = function() {
        colorOpen.classList.toggle('open');
    }

    shadowButton.onclick = function() {
        shadowOpen.classList.toggle('open');
    }

    function updateColor() {
        opacityBgValue.textContent = opacityBg.value;
        box.style.backgroundColor = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + opacityBg.value + ')';
        updateCode();
    }

    function updateShadow() {
        xPosValue.textContent = xPos.value + 'px';
        yPosValue.textContent = yPos.value + 'px';
        shadowBlurValue.textContent = shadowBlur.value + 'px';
        shadowSpreadValue.textContent = shadowSpread.value + 'px';
        shadowOpacityValue.textContent = shadowOpacity.value;
        box.style.boxShadow =
            xPos.value + 'px ' + 
            yPos.value + 'px ' + 
            shadowBlur.value + 'px ' + 
            shadowSpread.value + 'px ' + 
             'rgba(' + shadowR + ', ' + shadowG + ', ' + shadowB + ', ' + shadowOpacity.value + ') ' + 
            (shadowInset.checked ? 'inset' : '');
        updateCode();
    }

    function updateCode() {
        codeOutput.textContent = `#box {
    background: rgba(${r}, ${g}, ${b}, ${opacityBg.value});
    backdrop-filter: blur(${blurBg.value}px);
    box-shadow: ${xPos.value}px ${yPos.value}px ${shadowBlur.value}px ${shadowSpread.value}px rgba(${shadowR}, ${shadowG}, ${shadowB}, ${shadowOpacity.value}) ${shadowInset.checked ? 'inset' : ''};
}`;
    }

    updateColor();
    updateShadow();
    updateCode();
});