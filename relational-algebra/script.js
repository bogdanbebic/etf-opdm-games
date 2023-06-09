// Define an array of quiz questions and their respective correct answers
var quizData = [
    // Question 1
    {
        question: "Consider the following table 'Employees':<br><br><table><tr><th>ID</th><th>Name</th><th>Salary</th></tr><tr><td>1</td><td>Alice</td><td>5000</td></tr><tr><td>2</td><td>Bob</td><td>6000</td></tr><tr><td>3</td><td>Charlie</td><td>5500</td></tr></table><br>Which relational algebra expression selects employees with a salary greater than 5500?",
        choices: ["π Name (σ Salary > 5500 (Employees))", "π Salary (σ Salary > 5500 (Employees))", "π ID (σ Salary > 5500 (Employees))", "σ Salary > 5500 (Employees)"],
        correctAnswer: 0
    },
    // Question 2
    {
        question: "Consider the following tables 'Students' and 'Courses':<br><br><table><caption>Students</caption><tr><th>ID</th><th>Name</th></tr><tr><td>100</td><td>Alice</td></tr><tr><td>101</td><td>Bob</td></tr></table><br><table><caption>Courses</caption><tr><th>CID</th><th>Course</th></tr><tr><td>1</td><td>Math</td></tr><tr><td>2</td><td>Science</td></tr></table><br>Which relational algebra expression combines the 'Students' and 'Courses' tables to get the cartesian product?",
        choices: ["Students × Courses", "Students ⋂ Courses", "Students ⋃ Courses", "Students - Courses"],
        correctAnswer: 0
    },
    // Question 3
    {
        question: "Consider the following table 'Orders':<br><br><table><tr><th>OrderID</th><th>Product</th><th>Price</th></tr><tr><td>1</td><td>Apple</td><td>1.99</td></tr><tr><td>2</td><td>Orange</td><td>0.99</td></tr><tr><td>3</td><td>Banana</td><td>0.49</td></tr></table><br>Which relational algebra expression selects orders with a price less than or equal to 1?",
        choices: ["π Product (σ Price ≤ 1 (Orders))", "π Price (σ Price ≤ 1 (Orders))", "π OrderID (σ Price ≤ 1 (Orders))", "σ Price ≤ 1 (Orders)"],
        correctAnswer: 3
    },
    // Question 4
    {
        question: "Consider the following tables 'Customers' and 'Orders':<br><br><table><caption>Customers</caption><tr><th>CustomerID</th><th>Name</th></tr><tr><td>1</td><td>Alice</td></tr><tr><td>2</td><td>Bob</td></tr></table><br><table><caption>Orders</caption><tr><th>OrderID</th><th>CustomerID</th><th>Product</th></tr><tr><td>1</td><td>1</td><td>Apple</td></tr><tr><td>2</td><td>2</td><td>Orange</td></tr></table><br>Which relational algebra expression combines the 'Customers' and 'Orders' tables to get the natural join?",
        choices: ["Customers ⨝ Orders", "Customers ⋂ Orders", "Customers ⋃ Orders", "Customers - Orders"],
        correctAnswer: 0
    },
    // Question 5
    {
        question: "Consider the following table 'Products':<br><br><table><tr><th>ProductID</th><th>Name</th><th>Price</th></tr><tr><td>1</td><td>Apple</td><td>1.99</td></tr><tr><td>2</td><td>Orange</td><td>0.99</td></tr><tr><td>3</td><td>Banana</td><td>0.49</td></tr></table><br>Which relational algebra expression selects products with a price between 1 and 2?",
        choices: ["π Name (σ Price > 1 ∧ Price < 2 (Products))", "π Price (σ Price > 1 ∧ Price < 2 (Products))", "π ProductID (σ Price > 1 ∧ Price < 2 (Products))", "σ Price > 1 ∧ Price < 2 (Products)"],
        correctAnswer: 3
    },
    // Question 6
    {
        question: "Consider the following tables 'Employees' and 'Projects':<br><br><table><caption>Employees</caption><tr><th>EmployeeID</th><th>Name</th></tr><tr><td>1</td><td>Alice</td></tr><tr><td>2</td><td>Bob</td></tr></table><br><table><caption>Projects</caption><tr><th>ProjectID</th><th>Name</th></tr><tr><td>1</td><td>Project 1</td></tr><tr><td>2</td><td>Project 2</td></tr></table><br>Which relational algebra expression combines the 'Employees' and 'Projects' tables to get the cross join?",
        choices: ["Employees × Projects", "Employees ⨝ Projects", "Employees ⋃ Projects", "Employees - Projects"],
        correctAnswer: 0
    },
    // Question 7
    {
        question: "Consider the following table 'Students':<br><br><table><tr><th>ID</th><th>Name</th><th>Age</th></tr><tr><td>1</td><td>Alice</td><td>20</td></tr><tr><td>2</td><td>Bob</td><td>22</td></tr><tr><td>3</td><td>Charlie</td><td>18</td></tr></table><br>Which relational algebra expression selects students whose age is greater than 20?",
        choices: ["π Name (σ Age > 20 (Students))", "π Age (σ Age > 20 (Students))", "π ID (σ Age > 20 (Students))", "σ Age > 20 (Students)"],
        correctAnswer: 0
    },
    // Question 8
    {
        question: "Consider the following tables 'Employees' and 'Departments':<br><br><table><caption>Employees</caption><tr><th>EmployeeID</th><th>Name</th></tr><tr><td>1</td><td>Alice</td></tr><tr><td>2</td><td>Bob</td></tr></table><br><table><caption>Departments</caption><tr><th>DeptID</th><th>Department</th></tr><tr><td>1</td><td>HR</td></tr><tr><td>2</td><td>IT</td></tr></table><br>Which relational algebra expression combines the 'Employees' and 'Departments' tables to get the natural join?",
        choices: ["Employees ⨝ Departments", "Employees ⋂ Departments", "Employees ⋃ Departments", "Employees - Departments"],
        correctAnswer: 0
    },
    // Question 9
    {
        question: "Consider the following table 'Products':<br><br><table><tr><th>ProductID</th><th>Name</th><th>Price</th></tr><tr><td>1</td><td>Apple</td><td>1.99</td></tr><tr><td>2</td><td>Orange</td><td>0.99</td></tr><tr><td>3</td><td>Banana</td><td>0.49</td></tr></table><br>Which relational algebra expression selects products with a price greater than or equal to 1?",
        choices: ["π Name (σ Price ≥ 1 (Products))", "π Price (σ Price ≥ 1 (Products))", "π ProductID (σ Price ≥ 1 (Products))", "σ Price ≥ 1 (Products)"],
        correctAnswer: 3
    },
    // Question 10
    {
        question: "Consider the following tables 'Students' and 'Courses':<br><br><table><caption>Students</caption><tr><th>ID</th><th>Name</th></tr><tr><td>100</td><td>Alice</td></tr><tr><td>101</td><td>Bob</td></tr></table><br><table><caption>Courses</caption><tr><th>CID</th><th>Course</th></tr><tr><td>1</td><td>Math</td></tr><tr><td>2</td><td>Science</td></tr></table><br>Which relational algebra expression combines the 'Students' and 'Courses' tables to get the union?",
        choices: ["Students ⨝ Courses", "Students ⋂ Courses", "Students ⋃ Courses", "Students - Courses"],
        correctAnswer: 2
    },
    // Add more quiz questions here...
];

var currentQuestion = 0;
var score = 0;

var questionElement = document.getElementById("question");
var choicesElement = document.getElementById("choices");
var resultElement = document.getElementById("result");
var scoreElement = document.getElementById("score");

// Function to display the current question and choices
function displayQuestion() {
    var currentQuizData = quizData[currentQuestion];

    questionElement.innerHTML = currentQuizData.question;

    // Clear previous choices
    choicesElement.innerHTML = "";

    // Display choices as radio buttons
    for (var i = 0; i < currentQuizData.choices.length; i++) {
        var choice = currentQuizData.choices[i];
        var radioBtn = document.createElement("input");
        radioBtn.setAttribute("type", "radio");
        radioBtn.setAttribute("name", "choice");
        radioBtn.setAttribute("value", i);
        choicesElement.appendChild(radioBtn);

        var choiceLabel = document.createElement("label");
        choiceLabel.innerHTML = choice;
        choicesElement.appendChild(choiceLabel);
        choicesElement.appendChild(document.createElement("br"));
    }
}

// Function to check the selected answer and move to the next question
function checkAnswer() {
    var selectedChoice = document.querySelector('input[name="choice"]:checked');

    if (selectedChoice) {
        var choiceIndex = parseInt(selectedChoice.value);
        var currentQuizData = quizData[currentQuestion];

        if (choiceIndex === currentQuizData.correctAnswer) {
            score++;
            resultElement.innerHTML = "Correct!";
        } else {
            resultElement.innerHTML = "Incorrect!";
        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {
            displayQuestion();
        } else {
            displayResult();
        }
    }
}

// Function to display the final quiz score
function displayResult() {
    resultElement.innerHTML = "Quiz completed! Your score: " + score + " out of " + quizData.length;
    scoreElement.innerHTML = "Score: " + score + " out of " + quizData.length;
}

// Start the quiz by displaying the first question
displayQuestion();
