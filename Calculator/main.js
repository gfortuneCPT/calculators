let res = document.getElementById('res');

document.getElementById('btn0').onclick = function() {
    res.innerHTML += 0;
};

document.getElementById('btn1').onclick = function() {
    res.innerHTML += 1;
};
document.getElementById('btn2').onclick = function() {
    res.innerHTML += 2;
};
document.getElementById('btn3').onclick = function() {
    res.innerHTML += 3;
};
document.getElementById('btn4').onclick = function() {
    res.innerHTML += 4;
};
document.getElementById('btn5').onclick = function() {
    res.innerHTML += 5;
};document.getElementById('btn6').onclick = function() {
    res.innerHTML += 6;
};
document.getElementById('btn7').onclick = function() {
    res.innerHTML += 7;
};
document.getElementById('btn8').onclick = function() {
    res.innerHTML += 8;
};
document.getElementById('btn9').onclick = function() {
    res.innerHTML += 9;
};
document.getElementById('btnClr').onclick = function() {
    res.innerHTML = '';
};
document.getElementById('btnPnt').onclick = function() {
    res.innerHTML += ",";
};

document.getElementById('btnEql').onclick = function() {
    var expr = res.innerHTML
    
    res.innerHTML = eval(expr);
};
document.getElementById('btnSum').onclick = function() {
    res.innerHTML += '+';
}
document.getElementById('btnSub').onclick = function() {
    res.innerHTML += '-';
}
document.getElementById('btnMul').onclick = function() {
    res.innerHTML += '*';
}
document.getElementById('btnDiv').onclick = function() {
    res.innerHTML += '/';
}
document.getElementById('btnPer').onclick = function() {
    res.innerHTML += '%';
}

