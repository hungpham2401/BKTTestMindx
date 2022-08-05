console.log('BÀI 1');
const unevenArray = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
x = Math.floor(Math.random() * 17) + 4;
console.log(x)
console.log('Số chẵn từ 4 đến', x);
let evenArray = [];

function findEven(array) {
    for (i = 0; i <= x - 4; i++) {
        if (array[i] % 2 == 0) {
            console.log(array[i]);
            evenArray.push(array[i]);
        } else {};
    }
};
findEven(unevenArray);
console.log(evenArray);

// BÀI 3
console.log('');
console.log('BÀI 3');
let s = 0;

function numberOneTriangle(a) {
    for (i = 0; i < a; i++) {
        s = s * 10 + 1;
        console.log(s);
    }
};
numberOneTriangle(3);