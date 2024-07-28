function calculateRectangleArea(){
    // get length
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // get width
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // calculate area
    const area = length * width;
    console.log('area of the rec', area);

    // display
    const recAreaSpan = document.getElementById('recrangle-area');
    recAreaSpan.innerText = area;
}