//code for square
console.group('square')

function perimeterSquare(squareSide) {
    return squareSide*4;
}

function areaSquare(squareSide) {
    return squareSide*squareSide;
}

console.groupEnd();

//code for triangle
console.group('triangle')

function high(side1, side2, base){
    if(side1 === side2 && side1 != base){
        const high = Math.sqrt(side1**2 - base**2/ 4);
        return high;
    }
    else{
        const message = 'it is not isosceles triangle';
        return message;
    }
}

function perimeterTriangle(side1, side2, base) {
    return side1 + side2 + base;
}

function areaTriangle(side1, side2, base) {
    const triangleType = parseInt(high(side1, side2, base));

    if(Number.isInteger(triangleType)){
        return (base*triangleType)/2;
    }
    else{
        const message = 'it is not possible to calculate the area'
        return message
    }
}

console.groupEnd();

//code for circle
console.group('circle')

const pi = Math.PI;

function perimeterCircle(radius) {
    return radius*2*pi;
};

function areaCircle(radius) {
    return pi*radius*radius;
};

console.groupEnd();

//HTML interaction

//square
function calcPerimeterSquare(){
    const input =document.getElementById('InputSquare');
    const value = input.value;

    const perimeter = perimeterSquare(value);
    alert(perimeter);
};

function calcAreaSquare(){
    const input = document.getElementById('InputSquare');
    const value = input.value;

    const area = areaSquare(value);
    alert(area);
};

//triangle
function calcPerimeterTriangle(){
    const input1 =document.getElementById('InputTriangle1');
    const value1 = parseInt(input1.value);

    const input2 =document.getElementById('InputTriangle2');
    const value2 = parseInt(input2.value);

    const input3 =document.getElementById('InputTriangleBase');
    const value3 = parseInt(input3.value);

    const perimeter = perimeterTriangle(value1, value2, value3);
    alert(perimeter);
};

function calcAreaTriangle(){
    const input1 =document.getElementById('InputTriangle1');
    const value1 = parseInt(input1.value);

    const input2 =document.getElementById('InputTriangle2');
    const value2 = parseInt(input2.value);

    const input3 =document.getElementById('InputTriangleBase');
    const value3 = parseInt(input3.value);

    const area = areaTriangle(value1, value2, value3);
    alert(area);
};

//circle
function calcPerimeterCircle(){
    const input =document.getElementById('InputCircle');
    const value = input.value;

    const perimeter = perimeterCircle(value);
    alert(perimeter);
};

function calcAreaCircle(){
    const input =document.getElementById('InputCircle');
    const value = input.value;

    const area = areaCircle(value);
    alert(area);
};