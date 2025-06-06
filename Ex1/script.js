
const div = document.getElementById("n1");
const paragraphe = document.createElement("p");


paragraphe.textContent = "Ceci est un paragraphe";


div.appendChild(paragraphe);


paragraphe.textContent = "Le texte a été modifié";


paragraphe.style.backgroundColor = "lightblue";
paragraphe.style.textAlign = "center";

 

div.addEventListener("click", function () {
  paragraphe.textContent = "Un clic a été détecté";
});
