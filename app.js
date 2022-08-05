var cl = console.log;
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var btn = document.getElementById('btn');
// const add = () =>{
//     let n1 = +num1.value;
//     let n2 = +num2.value;
//     cl(n1 + n2)
// }
// btn.addEventListener('click', add)
var add = function (n1, n2) {
    return n1 + n2;
};
btn.addEventListener('click', function () {
    cl(add(+num1.value, +num2.value));
});
