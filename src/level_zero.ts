
// Soal 1
function minImal(a: number, b: number): number {
    return a < b ? a : b;
}

const minImal1 = minImal(3, 4);
const minImal2 = minImal(6, 5);
const minImal3 = minImal(3, 1);

console.log(minImal1);
console.log(minImal2); 
console.log(minImal3); 

// Soal 2

function power(a: number, b: number,): number {
    return Math.pow(a, b);
}

const power1 = power(7,3)
const power2 = power(3,3)
const power3 = power(4,0.5)

console.log(power1);
console.log(power2);
console.log(power3);

// Soal 3

function penjumlahanBilangan(a: number[], b: string,){
    return a.reduce((acc, current) => acc + current) + b;
}

const penjumlahanbilangan1 = penjumlahanBilangan([1,2,3], "ganjil")
const penjumlahanbilangan2 = penjumlahanBilangan([1,2,3,4,5,6,7], "genap")
const penjumlahanbilangan3 = penjumlahanBilangan([1,2,3,4,5], "ganjil")

console.log(penjumlahanbilangan1);
console.log(penjumlahanbilangan2);

// Soal 4

class Animal {
    name: string;
    age: number;
    isMammal: boolean;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.isMammal = true;
    }

}

// Soal 5

// class Rabbit extends Animal {
//     constructor(name: string, age: number) {
//         super(name, age, true);
//     }

//     isMammal: boolean = true;

//     eat(): void {
//         console.log(`${this.name} yang berumur ${this.age} sedang makan!`);
//     }
// }

// Soal 6

// class Eagle extends Animal {
//     constructor(name: string, age: number,) {
//         super(name, age, false);
//     }

//     fly(): void {
//         console.log(`${this.name} yang berumur sedang terbang!`);
//     }
// }

// const elang = new Animal(Eagle,12,false);
// console.log('hewan',elang);
// elang.fly();

