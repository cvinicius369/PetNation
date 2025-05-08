document.addEventListener("DOMContentLoaded", () => {
    fetch("src/data.json")
        .then(response => response.json())
        .then(data => {
            const animalList = document.getElementById("animal-list");
            data.forEach(animal => {
                const animalDiv = document.createElement("div");
                animalDiv.className = "animal";
                animalDiv.innerHTML = `
                    <img src="${animal.imagem}" alt="Animal para adoção">
                    <p>${animal.descricao}</p>
                    <strong>Contato: ${animal.contato}</strong>
                `;
                animalList.appendChild(animalDiv);
            });
        })
        .catch(error => console.error("Erro ao carregar os dados:", error));
});
