let res = document.getElementById('res');

document.getElementById('btn0').onclick = function() {
    res.innerHTML += 0;
};

document.getElementById('btn1').onclick = function() {
    res.innerHTML += 1;
};

document.getElementById('btnClr').onclick = function() {
    res.innerHTML = '';
};

document.getElementById('btnEql').onclick = function() {
    var expr = res.innerHTML
    var nums = /(\d+)/g;
    expr = expr.replace(nums, function(match) {
        return parseInt(match, 2);
    })
    res.innerHTML = eval(expr).toString(2);
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