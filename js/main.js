'use strict';
console.log('main.js');



// let i=1;
// while (i<11) {
//     console.log(i, 'As esu while');
//     i++;
// }



// // 14-35
// let i1=14;
// while (i1<36) {
//     console.log(i1);
//     i1++;
// }

// // // 2. atspausdinti skaicius nuo 0 iki 100, kas trecia skaiciu
// let i2=0;
// while (i2<101) {
//     console.log(i2);
//     i2+=3;
// }

// // 3. atspausdinti skaicius nuo 50 iki 24

// let i3=50;
// while (i3>23) {
//     console.log(i3);
//     i3--;
// }



// 14-35

// for (let i1=14;i1<36;i1++) {
//     console.log(i1);
// }

// // // // 2. atspausdinti skaicius nuo 0 iki 100, kas trecia skaiciu
// for (let i2=0;i2<101;i2++) {
//     console.log(i2);
// }


// // 3. atspausdinti skaicius nuo 50 iki 24
// for (let i3=50; i3>23 ;  i3--) {
//     console.log(i3);
// }


// // 4. atspausdinti 15 random verciu nuo 1 iki 10
// for (let a = 0; a < 15; a++) {
// console.log(   (Math.random()*10).toFixed(0)  );
// }

// // 4.1 atspausdinti verciu vidurki
// let x=0;
// let times=0
// let average
// for (let a = 0; a < 15; a++) {

//     times++;

//         x+=+(Math.random()*10).toFixed(0)
//         console.log(`skaicius ${times} lygus  ${x}  `);

//         average=(x/times).toFixed(2);
//         console.log(`vidurkis yra ${average}`);


//     }















// // 5. atspausdinti nuo 47 iki 68 visus lyginius skaicius

// for(let i=47;i<=68;i++){
// if (i%2===0) {
//     console.log(i)
// }

// }


// // 6. sudeti visus skaicius nuo 0 iki 10, atspusdinti rezultata



// let x=0;
// let y=0;
// for(let i=0;i<=10;i++){
// y+=x;
// console.log(x);
// x++
// }
// console.log(y);


// // 7. su while loop. parasyti cikla kuris meta kauliukus ir galimos reiksmes yra nuo 2 iki 12.

// let kl1;
// let kl2;
// let sum=0;
// let operaciju=0;
// while(sum  < 6){

//     // random kauliukas 1
//     kl1=+(Math.random()*0.5*10).toFixed(0)+1;
//     // console.log(kl1);
//     // random kauliukas 2
//     kl2=+(Math.random()*0.5*10).toFixed(0)+1;
//     // console.log(kl2);
//     // sumu skaiciuokle
//     sum=kl1+kl2
//     console.log(sum);
    
//     // kiek operaciju
//     operaciju++

// }

// console.log(operaciju);





// [09:44] Marius Kuzminskas
// // 7.1 kiek kartu kompiuteris mes kauliukus kol ismes 12?
//  like 2

// [09:44] Marius Kuzminskas
// // 7.2 kiek kartu kompiuteris mes kauliukus kol daugiau nei 6?
//  like 2

// sukuriam cikla kuris tesiasi 20kartu
// nespausdinti skaiciau 17

// for (let i=0;i<=20;i++){
// if (i===17) {
//     continue;
// }
// console.log(i);
// }


// for(let i=0;i<30;i++){
// if (i===17||i===5||i===15) {
//     continue;
// }

// console.log(i);

// }














// Suskaiciuoti kiek skaiciau 4 kartotiniu nuo 0 iki 160
// let x=0;
// for(let i=0;i<=160;i++){
// if (i%4===0 && i!=0) {
//     x++;
// }

// }
// console.log(x);
// console.log(0%4);




// sugeneruoti stringa kuris turetu tokia struktura:

// 4
// 5
// 6






// Surasyti i kintamaji myString visus skaicius nuo -10 iki 35 atskirtus kableliu ir tarpu pvz, -10, -9, -8, ....

// Sudeti skaicius nuo 10 iki 20.

// sudedant atspausdinti kievieno zingsnio informacija pvz "Ciklo numeris 1, prie 0 pridedu 10 ir gaunu 10" pvz "Ciklo numeris 2, prie 10 pridedu 11 ir gaunu 21" pvz "Ciklo numeris 3, prie 21 pridedu 12 ir gaunu 33" ....
// atspausdinti galutini rezultata