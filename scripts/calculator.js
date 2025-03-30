function equivalentCheck() {
    if (parseInt(document.getElementById('equivalent').value)) {
        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = parseFloat(document.getElementById('result').value);
    }
}

function input(x) {
    if (document.getElementById('equivalent').value == 1) {
        document.getElementById('result').value = x;
        document.getElementById('equivalent').value = 0;
    } else if (document.getElementById('result').value == "0") {
        document.getElementById('result').value = x;
    } else {
        document.getElementById('result').value += x;
    }
}

function AllClear() {
    document.getElementById('result').value = 0;
    document.getElementById('operand').value = "";
    document.getElementById('operations').value = 0;
    document.getElementById('equivalent').value = 0;
}

function plusminus() {
    let x = parseFloat(document.getElementById('result').value);
    x *= -1;
    document.getElementById('result').value = x;
}

function percent() {
    let x = parseFloat(document.getElementById('result').value);
    x *= 0.01;
    document.getElementById('result').value = x;
}

function Square() {
    let x = parseFloat(document.getElementById('result').value);
    x *= x;
    document.getElementById('result').value = x;
}

function equals() {
    if (document.getElementById('operations').value != 0) {
        operators(parseInt(document.getElementById('operations').value));
        document.getElementById('result').value = document.getElementById('operand').value;
        document.getElementById('operand').value = "";
        document.getElementById('operations').value = 0;
        document.getElementById('equivalent').value = 1;
    }
}

function operators(x) {
    document.getElementById('operations').value = x;
    document.getElementById('equivalent').value = 0; // Reset equivalent
    operandCheck();
}

function operandCheck() {
    if (document.getElementById('operand').value == "") {
        document.getElementById('operand').value = document.getElementById('result').value;
        document.getElementById('equivalent').value = 1;
    } else {
        operatorCheck();
    }
}

function operatorCheck() {
    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);

    switch (parseInt(document.getElementById('operations').value)) {
        case 1:
            a += b;
            break;
        case 2:
            a -= b;
            break;
        case 3:
            a *= b;
            break;
        case 4:
            if (b === 0) {
                alert("Error: Division by zero is not allowed.");
                return;
            }
            a /= b;
            break;
    }

    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value = 1;
}




   

    
