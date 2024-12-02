document.addEventListener("DOMContentLoaded", function () {
    const players = [
        { id: 1, name: "Jean", email: "jean@example.com", Motdepasse:"12345" },
        { id: 2, name: "Marie", email: "marie@example.com",Motdepasse:"123"}
    ];

    const playerList = document.getElementById("player-list");
    const editModal = document.getElementById("edit-player-modal");
    const closeModal = document.querySelector(".close");
    const editForm = document.getElementById("edit-player-form");
    const editPlayerId = document.getElementById("edit-player-id");
    const editPlayerName = document.getElementById("edit-player-name");
    const editPlayerEmail = document.getElementById("edit-player-email");

    // Charger la liste des joueurs
    function loadPlayers() {
        playerList.innerHTML = "";
        players.forEach(player => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${player.id}</td>
                <td>${player.name}</td>
                <td>${player.email}</td>
                <td>${player.Motdepasse}</td>
                <td>
                    <button onclick="editPlayer(${player.id})">Modifier</button>
                    <button onclick="deletePlayer(${player.id})">Supprimer</button>
                </td>
            `;
            playerList.appendChild(row);
        });
    }

    loadPlayers();

    // Afficher le modal pour modifier un joueur
    window.editPlayer = function (id) {
        const player = players.find(p => p.id === id);
        if (player) {
            editPlayerId.value = player.id;
            editPlayerName.value = player.name;
            editPlayerEmail.value = player.email;
            editPlayerMotdepasse.value = player.Motdepasse;
            editModal.style.display = "flex";
        }
    };

    // Fermer le modal
    closeModal.onclick = function () {
        editModal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === editModal) {
            editModal.style.display = "none";
        }
    };

    // Sauvegarder les modifications
    editForm.onsubmit = function (e) {
        e.preventDefault();
        const id = parseInt(editPlayerId.value);
        const updatedName = editPlayerName.value;
        const updatedEmail = editPlayerEmail.value;

        const playerIndex = players.findIndex(p => p.id === id);
        if (playerIndex !== -1) {
            players[playerIndex].name = updatedName;
            players[playerIndex].email = updatedEmail;
            loadPlayers();
            editModal.style.display = "none";
            alert("Joueur modifié avec succès !");
        }
    };

    // Supprimer un joueur
    window.deletePlayer = function (id) {
        const confirmation = confirm("Êtes-vous sûr de vouloir supprimer ce joueur ?");
        if (confirmation) {
            const playerIndex = players.findIndex(p => p.id === id);
            if (playerIndex !== -1) {
                players.splice(playerIndex, 1);
                loadPlayers();
                alert("Joueur supprimé avec succès !");
            }
        }
    };
});
