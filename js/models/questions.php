<?php
class Question {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    // Ajouter une nouvelle question
    public function addQuestion($level, $question_text, $option_a, $option_b, $option_c, $option_d, $correct_option) {
        $sql = "INSERT INTO questions (level, question_text, option_a, option_b, option_c, option_d, correct_option) 
                VALUES (:level, :question_text, :option_a, :option_b, :option_c, :option_d, :correct_option)";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute([
            'level' => $level,
            'question_text' => $question_text,
            'option_a' => $option_a,
            'option_b' => $option_b,
            'option_c' => $option_c,
            'option_d' => $option_d,
            'correct_option' => $correct_option
        ]);
    }

    // Obtenir toutes les questions pour un niveau donné
    public function getQuestionsByLevel($level) {
        $sql = "SELECT * FROM questions WHERE level = :level";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute(['level' => $level]);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    // Supprimer une question
    public function deleteQuestion($id) {
        $sql = "DELETE FROM questions WHERE id = :id";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute(['id' => $id]);
    }
}
?>
