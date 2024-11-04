function createCard(id, question, answers, correctAnswer) {
    return {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    };
}

// Example usage
const card = createCard(1, 'What is the primary purpose of the NIST Cybersecurity Framework (CSF)?', ['To serve as a translation layer for multidisciplinary teams'], 'To serve as a translation layer for multidisciplinary teams');

// Asserting the properties
console.assert(card.id === 1, 'Card ID is not 1');
console.assert(card.question === 'What is the primary purpose of the NIST Cybersecurity Framework (CSF)?', 'Card question is not correct');
console.assert(Array.isArray(card.answers) && card.answers.length === 1 && card.answers[0] === 'To serve as a translation layer for multidisciplinary teams', 'Card answers are not correct');
console.assert(card.correctAnswer === 'To serve as a translation layer for multidisciplinary teams', 'Card correct answer is not correct');
