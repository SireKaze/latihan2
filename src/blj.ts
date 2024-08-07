// Base class
class Smartphone {
    color: string;
    brand: string;
    model: string;
    isTKDN: boolean;

    constructor(color: string, brand: string, model: string) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.isTKDN = true;
    }

    charging(): void {
        console.log(`Smartphone ${this.model} lagi di cas`);
    }

    showBrand(): void {
        console.log(`Brand handphone ini adalah ${this.brand}`);
    }
}

// Android subclass
class Android extends Smartphone {
    layar: number; // Ensure layar is a number

    constructor(color: string, brand: string, model: string, layar: number) {
        super(color, brand, model);
        this.layar = layar;
    }

    splitScreen(): void {
        console.log("Split screen berhasil!");
    }

    // Override showBrand method to include layar
    showBrand(): void {
        console.log(`Brand handphone ini adalah ${this.brand} dan ukuran layar ${this.layar} inci`);
    }
}

// iOS subclass
class Ios extends Smartphone {
    airDrop(): void {
        console.log("AirDrop berhasil!");
    }
}

// Example usage
const poco = new Smartphone('gray', 'POCO', 'X6 Pro 5G');
console.log('poco', poco);
poco.charging();
poco.showBrand();

const xiaomi = new Android('white', 'Xiaomi', '14T', 6.67);
console.log('xiaomi', xiaomi);
xiaomi.charging();
xiaomi.splitScreen();
xiaomi.showBrand();

const asus = new Android('navy', 'Asus', 'Rog Phone 8', 7);
console.log('asus', asus);
asus.charging();
asus.splitScreen();
asus.showBrand();

const iphone = new Ios('black', 'Apple', 'iPhone 15');
console.log('iphone', iphone);
iphone.charging();
iphone.airDrop();
iphone.showBrand();


// Chatgpt Support:

// class Smartphone {
//     color: string;
//     brand: string;
//     model: string;
//     isTKDN: boolean;

//     constructor(color: string, brand: string, model: string) {
//         this.color = color;
//         this.brand = brand;
//         this.model = model;
//         this.isTKDN = true;  // Changed comma to semicolon
//     }

//     charging(): void {
//         console.log(`Smartphone ${this.model} lagi di cas`);  // Fixed string interpolation
//     }
// }

// const poco = new Smartphone('gray', 'POCO', 'X6 Pro 5G')
// console.log('poco', poco);  // Output: poco Smartphone { color: 'gray', brand: 'POCO', model: 'X6 Pro 5G', isTKDN: true }
// poco.charging();  // Output: Smartphone X6 Pro 5G lagi di cas

// // Subclass Android
// class Android extends Smartphone {
//     constructor(color: string, brand: string, model: string) {
//         super(color, brand, model);
//     }

//     useGooglePlayStore(): void {
//         console.log(`Mengakses Google Play Store pada ${this.model}`);
//     }
// }

// // Subclass iOS
// class Ios extends Smartphone {
//     constructor(color: string, brand: string, model: string) {
//         super(color, brand, model);
//     }

//     useAppStore(): void {
//         console.log(`Mengakses App Store pada ${this.model}`);
//     }
// }

// // Example usage
// const androidPhone = new Android('black', 'Samsung', 'Galaxy S21');
// console.log('androidPhone', androidPhone);  // Output: androidPhone Android { color: 'black', brand: 'Samsung', model: 'Galaxy S21', isTKDN: true }
// androidPhone.charging();  // Output: Smartphone Galaxy S21 lagi di cas
// androidPhone.useGooglePlayStore();  // Output: Mengakses Google Play Store pada Galaxy S21

// const iosPhone = new Ios('white', 'Apple', 'iPhone 13');
// console.log('iosPhone', iosPhone);  // Output: iosPhone Ios { color: 'white', brand: 'Apple', model: 'iPhone 13', isTKDN: true }
// iosPhone.charging();  // Output: Smartphone iPhone 13 lagi di cas
// iosPhone.useAppStore();  // Output: Mengakses App Store pada iPhone 13
