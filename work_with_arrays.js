let our_array = ['Apple', 'Orange', 'Pineapple', 'Plum'];
// console.log(our_array[0]);
// console.log(our_array.length);
our_array[2]  = 'Strawberry';
// console.log(our_array[2]);

let new_our_array = [];
new_our_array.push('Kodsod', 'fvb', 6575585, function() {console.log('Hello fron array')});
new_our_array.push('Kodffbsod');
// new_our_array.pop('4444Kodffbsod');
// new_our_array.shift('Kodffbsod');
// new_our_array.unshift('to the strart of array');
// console.log(new_our_array[3]());

// console.log(new_our_array.indexOf(6575585));
// new_our_array.forEach(console.log);

// for (var i = 0; i <= new_our_array.length; i++) {
//     if (i == 3) {
//         console.log('Index under number 3');
//     } else if (i == 2) {
//         console.log('Index number 2');
//     } else {
//         console.log('Else');
//     }
//  }

 for (var i = 0; i <= new_our_array.length; i++) {
    if (i ==10) {
        console.log('Index under number 3');
    } else if (i % 2 == 0) {
        continue
    } 
}
 
// console.log(i);

let sum = 0;
let number = 1;
while (number <= 10) {
    sum += number;
    number++;
    // console.log(number);
}
// console.log(sum);

let sum2 = 0;
let number2 = 1;
do {
    sum2 += number2;
    number2 ++;
} while (sum2 <= 3);
// console.log(sum2);