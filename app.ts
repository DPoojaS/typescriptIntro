let cl = console.log;

let num1 = document.getElementById('num1')! as HTMLInputElement;
let num2 = <HTMLInputElement>document.getElementById('num2')!;

let btn = document.getElementById('btn')!;

// const add = () =>{
//     let n1 = +num1.value;
//     let n2 = +num2.value;
//     cl(n1 + n2)

// }

// btn.addEventListener('click', add)

const add = (n1:number,n2:number) =>{
    return n1 + n2
}

btn.addEventListener('click', () =>{
    cl(add(+num1.value, +num2.value));
})