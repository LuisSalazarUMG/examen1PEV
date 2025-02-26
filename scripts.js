document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let results = [];
    let correctAnswers = {
        q1: ['David Mason', 'Raul Menéndez'],
        q2: 'Raul Menendez',
        q3: 'Javier Salazar',
        q4: 'Haití',
        q5: 'Joséfina'
    };

    let q1 = Array.from(document.querySelectorAll('input[name="q1"]:checked')).map(input => input.value);
    let q2 = document.querySelector('input[name="q2"]').value.trim();
    let q3 = document.querySelector('input[name="q3"]:checked');
    let q4 = document.querySelector('input[name="q4"]:checked');
    let q5 = document.querySelector('input[name="q5"]:checked');

    if (q1.length === 0 || q2 === '' || !q3 || !q4 || !q5) {
        alert('Por favor, conteste todas las preguntas.');
        return;
    }

    // Comparar las respuestas de la primera pregunta
    if (q1.length === correctAnswers.q1.length && q1.every(answer => correctAnswers.q1.includes(answer))) {
        results.push({ question: 1, correct: true });
    } else {
        results.push({ question: 1, correct: false, correctAnswer: correctAnswers.q1.join(', ') });
    }

    if (q2 === correctAnswers.q2) {
        results.push({ question: 2, correct: true });
    } else {
        results.push({ question: 2, correct: false, correctAnswer: correctAnswers.q2 });
    }

    if (q3 && q3.value === correctAnswers.q3) {
        results.push({ question: 3, correct: true });
    } else {
        results.push({ question: 3, correct: false, correctAnswer: correctAnswers.q3 });
    }

    if (q4 && q4.value === correctAnswers.q4) {
        results.push({ question: 4, correct: true });
    } else {
        results.push({ question: 4, correct: false, correctAnswer: correctAnswers.q4 });
    }

    if (q5 && q5.value === correctAnswers.q5) {
        results.push({ question: 5, correct: true });
    } else {
        results.push({ question: 5, correct: false, correctAnswer: correctAnswers.q5 });
    }

    let resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    results.forEach((result, index) => {
        let p = document.createElement('p');
        if (result.correct) {
            p.textContent = `Pregunta ${index + 1}: Correcta`;
        } else {
            p.textContent = `Pregunta ${index + 1}: Incorrecta. Respuesta correcta: ${result.correctAnswer}`;
        }
        resultsDiv.appendChild(p);
    });
});