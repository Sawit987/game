// ฟังก์ชันสุ่มตัวเลข
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ฟังก์ชันสุ่มเครื่องหมายการคำนวณ
function getRandomOperator() {
    const operators = ['+', '-', '*', '/'];
    const randomIndex = Math.floor(Math.random() * operators.length);
    return operators[randomIndex];
}

// ฟังก์ชันคำนวณผลลัพธ์ของข้อคำถาม
function calculateAnswer(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

// ฟังก์ชันสร้างข้อคำถามและตอบ
function generateQuestion() {
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operator = getRandomOperator();
    const answer = calculateAnswer(num1, num2, operator);

    return {
        question: `${num1} ${operator} ${num2}`,
        answer: answer
    };
}

// ตัวแปรสำหรับเก็บคะแนน
let score = 0;

// ตัวแปรสำหรับเก็บข้อคำถามปัจจุบัน
let currentQuestion = null;

// ฟังก์ชันเริ่มเกม
function startGame() {
    score = 0;
    updateScore(0);
    nextQuestion();
}

// ฟังก์ชันสร้างและแสดงข้อคำถามใหม่
function nextQuestion() {
    currentQuestion = generateQuestion();
    document.getElementById('question').textContent = `คำถาม: ${currentQuestion.question}`;
    document.getElementById('answer').value = '';
    document.getElementById('result').textContent = '';
}

// ฟังก์ชันตรวจสอบคำตอบ
function checkAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    if (userAnswer === currentQuestion.answer) {
        document.getElementById('result').textContent = 'ถูกต้อง!';
        score++;
        updateScore(score);
    } else {
        document.getElementById('result').textContent = 'ผิด!';
    }
}

// ฟังก์ชันอัปเดตคะแนนบนหน้าเว็บ
function updateScore(score) {
    document.getElementById('score-value').textContent = score;
}

// กำหนดการทำงานของปุ่ม "ตรวจสอบ" และ "ข้อถัดไป"
document.getElementById('submit').addEventListener('click', checkAnswer);
document.getElementById('next').addEventListener('click', nextQuestion);

// เริ่มเกม
startGame();
