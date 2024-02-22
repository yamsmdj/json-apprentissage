let telephone = {
    marque: "Iphone",
    prix: 1200,
    couleur: "bleu",
    a: () => console.log(this.prix, this, "stop"),

    b: function () {
    console.log(this.prix, this);
    }
};
// telephone.a()
const {marque,prix,couleur}=telephone

console.log(prix);