function checkAnswers() {
    console.log("la fonction est bien éxécutée");
    let score = 0;
    const totalQuestions = 3;


    const q1 = document.querySelector('input[name="question1"]:checked');

    const q2 = document.querySelector('input[name="question2"]:checked');

    const q3 = document.querySelector('input[name="question3"]:checked');

    if (q1 && q1.value === "a") {
        score++;
    }

    if (q2 && q2.value === "c") {
        score++;
    }

    if (q3 && q3.value === "a") {
        score++;
    }

    const result = document.getElementById("result");
    result.innerHTML = `You have a total of ${score} correct answers out of 3.`;
}