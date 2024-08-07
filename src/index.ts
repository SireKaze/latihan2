// // let age : number = 12345
// // let nama : string = '12345'

// // let siswa : {
// //     nama : string,
// //     umur : number,
// //     isPelajar : boolean;
// // } = {
// //     nama : "faizal",
// //     umur : 17,
// //     isPelajar : false,
// // };

// // siswa = { 
// //     nama: "akbar",
// //     umur: 18,
// //     isPelajar: true,
// // };

// // // interface untuk mendifinisikan tipe data object

// // interface product {
// //     id : number
// //     nama : string
// //     price : number
// //     note : string
// //     isPremium : boolean
// // }

// // const product1 : product = {
// //     id : 2,
// //     nama : 'TV',
// //     price : 5000000,
// //     isPremium : false,
// //     note : 'bagus'
// // }
// // const product2 : product = {
// //     id : 2,
// //     nama : 'HP',
// //     price : 5000000,
// //     isPremium : false,
// //     note : 'bagus'
// // }

// // //Nested object

// // interface productDetail {
// //     manufacture : string,
// //     year : number
// // }

// // interface ProductItem  {
// //     id : number
// //     productName : string
// //     price : number
// //     detail : productDetail
// // }

// // const product3 : ProductItem = {
// //     id : 4,
// //     productName : "mobil",
// //     price : 500000000,
// //     detail : {
// //         year : 2024,
// //         manufacture : "toyota"
// //     }
// // }

// // console.log('pabrik', product3.detail.manufacture);

// // // array

// // const a = [1,2,3,4,5]

// // //square bracket

// // let b : number[]
// // b = [1,2,3,4,5]

// // let c : string[]
// // c = ['faris','achmad']

// // let d : (string | number | boolean)[]
// // d = [1,'satu',2, false]

// // let e :{nama : string; umur: number}[] = [{nama : 'akbar', umur : 17}]

// // interface status {
// //     isSekolah :boolean
// // }[];

// // interface dataDiri {
// //     nama : string,
// //     alamat : string, 
// //     umur : number,
// //     status : status
// // }[];



// // // Function


// //  function rumusLuaspp(panjang: number, lebar: number,){
// //    const alas = panjang * lebar;
// //    return alas;
// // }

// // const persegi1 = rumusLuaspp(10, 2);
// // const persegi2 = rumusLuaspp(10, 6);
// // const persegi3 = rumusLuaspp(0, 4);

// // console.log(persegi1);
// // console.log(persegi2);
// // console.log(persegi3);

// // //lihatlah function yang menghitung luas balok

// // function volumebalok(panjang:number,lebar:number,tinggi:number){
// //     const volume = panjang * lebar * tinggi;
// //     return volume;
// //     }


// // function perjumlahan(a: number, b: number, c = 0) {
// //     const hasil = a + b + c;
// //     return hasil;
// // }

// // const hasil1 = perjumlahan(10, 5, 2)

// // const hasil2 = perjumlahan(10, 5)

// // console.log(hasil1, hasil2);

// // function pembagian({ a, b, c = 1 }: { a: number; b: number; c?: number }) {
// //     const hasil = (a / b) * c;
// //     return hasil;
// // }

// // const kali1 = pembagian({ a: 5, b: 10, c: 2 });
// // const kali2 = pembagian({ a: 5, b: 10 });

// // console.log("kali1", kali1);
// // console.log("kali2", kali2);

// // interface satuInterface {
// //     a: number;
// //     b: string;
// // }

// // interface responseAPI {
// //     msg: string;
// //     status: string;
// // }

// // function empat({a, b}: satuInterface): responseAPI {
// //     return {
// //         msg: "berhasil!",
// //         status: "ok",
// //     };
// // }

// // function lima(): responseAPI {
// //     return {
// //         msg: 'ok',
// //         status: 'ok'
// //     }
// // }


// // empat({a: 1, b: "2"});



// //soal 1


// function cekBilanganDalamArray(arr: number[], bilangan: number): boolean {
//     return arr.includes(bilangan);
// }

// // Contoh penggunaan:
// const array = [1,3,5,6,7,8,2,9];
// const bilangan = 7;

// const hasil = cekBilanganDalamArray(array, bilangan);
// console.log(hasil); // Output: true


// class User {
//     id: number;
//     firstName: string;
//     lastName: string;
  
//     constructor(id: number, firstName: string, lastName: string) {
//       (this.id = id), (this.firstName = firstName), (this.lastName = lastName);
//     }

//     login(): boolean {
//         if (this.id === 1){
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// const zerllz = new User(7, "Zelexia", "farz");
// const farz = new User(7, "fa", "rz");


class Profile {
    user: {
        Username: string,
        password: string
    }[]

    constructor() {
        this.user = [{
            Username: "admin",
            password: "admin"
        },
        {
            Username: "user",
            password: "user"
        },
        {
            Username: "admin2",
            password: "admin2"
        },
        {
            Username: "zerllz",
            password: "lafarz"
        }]
    }

    login({ username, password }: { username: string, password: string }) {
        const user = this.user.find(u => u.Username === username && u.password === password);
        if (user) {
            return {
                status: "berhasil",
                msg: "berhasil login ke akun ini"
            };
        } else {
            return {
                status: "gagal",
                msg: "username dan password berbeda"
            };
        }
    }
}

const profile = new Profile();
console.log(profile.login({ username: "admin", password: "admin" })); 
console.log(profile.login({ username: "user", password: "user" })); 
