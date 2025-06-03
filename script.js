function Pet(nome, especie, idade) {
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;

    this.falar = function() {
        return `Oi, eu sou ${this.nome} e sou um ${this.especie}`;
    };

    this.idadeHumana = function() {
        
        if (this.especie.toLowerCase() === "cachorro") {
            return this.idade * 7;
        } else if (this.especie.toLowerCase() === "gato") {
            return this.idade * 6;
        } else {
            return this.idade * 5;
        }
    };
}

const meusPets = [
    new Pet("Drao", "Cachorro", 5),
    new Pet("Edu", "Gato", 3),
    new Pet("Pedro Urquisa", "Coelho", 2)
];

const listarPets = () => {
    console.log("📋 Lista de Pets:");
    meusPets.forEach(pet => {
        console.log(`Nome: ${pet.nome}, Espécie: ${pet.especie}, Idade: ${pet.idade} anos`);
    });
};

const buscarPetPorNome = function(nomeBuscado) {
    const petEncontrado = meusPets.find(pet => pet.nome.toLowerCase() === nomeBuscado.toLowerCase());
    return petEncontrado || "Pet não encontrado";
};

function executarAcaoNosPets(acao) {
    meusPets.forEach(acao);
}

listarPets();

console.log("🔎 Buscando 'Edu':", buscarPetPorNome("Edu"));
console.log("🔎 Buscando 'Toby':", buscarPetPorNome("Toby"));

executarAcaoNosPets(pet => {
    console.log("🗣️", pet.falar());
});

executarAcaoNosPets(pet => {
    console.log(`📏 ${pet.nome} tem ${pet.idadeHumana()} anos humanos.`);
});
