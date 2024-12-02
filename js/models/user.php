<?php
class User {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Créer un nouvel utilisateur
    public function createUser($name, $email, $password_hash, $role = 'joueur') {
        $sql = "INSERT INTO users (name, email, password_hash, role) VALUES (:name, :email, :password_hash, :role)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([
            'name' => $name,
            'email' => $email,
            'password_hash' => $password_hash,
            'role' => $role
        ]);
    }

    // Lire les informations d'un utilisateur
    public function getUserByEmail($email) {
        $sql = "SELECT * FROM users WHERE email = :email";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['email' => $email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Vérifier l'existence d'un utilisateur
    public function userExists($email) {
        $sql = "SELECT COUNT(*) FROM users WHERE email = :email";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['email' => $email]);
        return $stmt->fetchColumn() > 0;
    }

    // Supprimer un utilisateur
    public function deleteUser($id) {
        $sql = "DELETE FROM users WHERE id = :id";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute(['id' => $id]);
    }
}
?>
