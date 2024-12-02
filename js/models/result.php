<?php
class Result {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Ajouter un résultat pour un joueur
    public function addResult($user_id, $level, $score, $status) {
        $sql = "INSERT INTO results (user_id, level, score, status) 
                VALUES (:user_id, :level, :score, :status)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([
            'user_id' => $user_id,
            'level' => $level,
            'score' => $score,
            'status' => $status
        ]);
    }

    // Obtenir les résultats d'un joueur
    public function getResultsByUser($user_id) {
        $sql = "SELECT * FROM results WHERE user_id = :user_id";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['user_id' => $user_id]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Obtenir les joueurs qualifiés pour un niveau
    public function getQualifiedPlayers($level) {
        $sql = "SELECT * FROM results WHERE level = :level AND status = 'qualifié'";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['level' => $level]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
?>
