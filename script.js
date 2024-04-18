const genderIdentities = [
    "Male", "Female",
    "Dog", "Cat", "Batman", "Spiderman",
    "Abinary", "Agender", "Ambigender", "Androgyne", "Androgynous", "Aporagender", "Autigender",
    "Bakla", "Bigender", "Binary", "Bissu", "Butch", "Calabai", "Calalai", "Cis", "Cisgender", "Cis female", "Cis male", "Cis man", "Cis woman",
    "Demi-boy", "Demiflux", "Demigender", "Demi-girl", "Demi-guy", "Demi-man", "Demi-woman", "Dual gender",
    "Eunuch",
    "Faʻafafine", "Female to male", "Femme", "FTM",
    "Gender bender", "Gender diverse", "Gender gifted", "Genderfae", "Genderfluid", "Genderflux", "Genderfuck", "Genderless", "Gender nonconforming", "Genderqueer", "Gender questioning", "Gender variant", "Graygender",
    "Hijra",
    "Intergender", "Intersex", "Ipsogender", "Kathoey",
    "Māhū", "Male to female", "Man", "Man of trans experience", "Maverique", "Meta-gender", "MTF", "Multigender", "Muxe", "Neither", "Neurogender", "Neutrois", "Non-binary", "Non-binary transgender",
    "Omnigender", "Other",
    "Pangender", "Person of transgendered experience", "Polygender",
    "Queer",
    "Sekhet",
    "Third gender", "Trans", "Trans*", "Trans female", "Trans male", "Trans man", "Trans person", 
    "Trans woman","Transgender","Transgender female","Transgender male","Transgender man","Transgender person","Transgender woman","Transfeminine","Transmasculine","Transsexual","Transsexual female","Transsexual male","Transsexual man","Transsexual person","Transsexual woman","Travesti","Trigender","Tumtum","Two spirit",
    "Vakasalewalewa","Waria","Winkte","Woman","Woman of trans experience","X-gender","X-jendā","Xenogender"
];

const dropdown=document.getElementById("dropdown");
genderIdentities.forEach(element => {
    let ident=document.createElement("option");
    let text = document.createTextNode(element);
    ident.appendChild(text);
    dropdown.appendChild(ident);
});
