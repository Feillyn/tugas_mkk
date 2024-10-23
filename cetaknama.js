class cetakNama {
    #name;
    constructor(name) {
        this.#name = name;
    }
    get getNme() {
        return this.#name;
    }
    set setName(value) {
        this.#name = value;
    }
    #sayHello(name) {
        console.log(`hello, ${name}`);
    }
    #sayBye() {
        console.log('Good Bye!');
    }
   say(name) {
    if (name){
    this.#sayHello(name);
   } else {
    this.#sayBye();
   } 
}
}

const nama1  = new cetakNama('Lamira');
const nama2 = new cetakNama('Suwendo');
 nama2.say('abi');