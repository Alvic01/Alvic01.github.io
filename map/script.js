function checkAnswers() {
    let score = 0;
    const totalQuestions = 3;


    const q1 = document.querySelector('input[name="question1"]:checked');

    const q2 = document.querySelector('input[name="question2"]:checked');

    const q3 = document.querySelector('input[name="question3"]:checked');


    console.log("q1 sélectionné :", q1);
    console.log("q2 sélectionné :", q2);
    console.log("q3 sélectionné :", q3);


    if (q1 && q1.value === "a") {
        console.log("Bonne réponse pour question 1 !");
        score++;
    }

    if (q2 && q2.value === "c") {
        console.log("Bonne réponse pour question 2 !");
        score++;
    }

    if (q3 && q3.value === "a") {
        console.log("Bonne réponse pour question 3 !");
        score++;
    }
    console.log("Final score :", score)
    const result = document.getElementById("result");
    result.innerHTML = `You have a total of ${score} correct answers out of 3.`;
}