        const quizData = [
            // HTML Quiz Questions
            { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Markup Language", "Hyperlinks and Text Markup Language", "None of the above"], answer: "HyperText Markup Language" },
            { question: "Which of the following tags is used to define an internal style sheet in HTML?", options: ["<style>", "<css>", "<script>", "<styleSheet>"], answer: "<style>" },
            { question: "Which attribute is used to define the destination of a link in HTML?", options: ["href", "link", "destination", "src"], answer: "href" },
            { question: "Which tag is used to display images in HTML?", options: ["<img>", "<image>", "<picture>", "<src>"], answer: "<img>" },
            { question: "Which tag is used to create a table in HTML?", options: ["<tbl>", "<table>", "<tab>", "<tbody>"], answer: "<table>" },
            { question: "What is the correct HTML element for inserting a line break?", options: ["<br>", "<break>", "<lb>", "<hr>"], answer: "<br>" },
            { question: "Which of the following is the correct HTML tag for creating a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
            { question: "Which tag is used for defining a list item in an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: "<li>" },
            { question: "How do you create a comment in HTML?", options: ["<!-- comment -->", "/* comment */", "// comment", "/* comment */"], answer: "<!-- comment -->" },
            { question: "What does the alt attribute in the <img> tag do?", options: ["Specifies an alternative text for an image if the image cannot be displayed", "Changes the background color of the image", "Makes the image larger", "Specifies the image source"], answer: "Specifies an alternative text for an image if the image cannot be displayed" },

            // CSS Quiz Questions
            { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
            { question: "Which CSS property is used to change the background color of an element?", options: ["background-color", "color", "bgcolor", "background"], answer: "background-color" },
            { question: "How do you select an element with the class name 'example' in CSS?", options: [".example", "#example", "*example", "example"], answer: ".example" },
            { question: "Which CSS property is used to change the text color of an element?", options: ["text-color", "color", "font-color", "background-color"], answer: "color" },
            { question: "What is the correct CSS syntax to make a font bold?", options: ["font-weight: bold;", "font-style: bold;", "font: bold;", "text-weight: bold;"], answer: "font-weight: bold;" },
            { question: "How do you center a block element horizontally in CSS?", options: ["margin: 0 auto;", "center: true;", "align: center;", "margin-left: auto; margin-right: auto;"], answer: "margin: 0 auto;" },
            { question: "Which property is used to change the font size in CSS?", options: ["font-size", "text-size", "font", "size"], answer: "font-size" },
            { question: "Which of the following is the correct syntax for applying a CSS style to an element with the ID 'header'?", options: ["#header { color: blue; }", ".header { color: blue; }", "header { color: blue; }", "id='header' { color: blue; }"], answer: "#header { color: blue; }" },
            { question: "Which CSS property is used to add space inside an element, between the element's content and its border?", options: ["margin", "padding", "spacing", "border-spacing"], answer: "padding" },
            { question: "Which of the following CSS properties is used to align text horizontally in an element?", options: ["text-align", "vertical-align", "horizontal-align", "align-text"], answer: "text-align" },

            // JavaScript Quiz Questions
            { question: "Which of the following is a correct way to declare a variable in JavaScript?", options: ["var x;", "variable x;", "v x;", "x := 10;"], answer: "var x;" },
            { question: "How do you create a function in JavaScript?", options: ["function myFunction() {}", "function = myFunction() {}", "create function myFunction() {}", "function: myFunction() {}"], answer: "function myFunction() {}" },
            { question: "Which of the following is used to display an alert box in JavaScript?", options: ["alert()", "message()", "prompt()", "notify()"], answer: "alert()" },
            { question: "What does the == operator do in JavaScript?", options: ["Compares two values for equality (value only)", "Compares two values and types", "Assigns a value", "Checks if the variable is null"], answer: "Compares two values for equality (value only)" },
            { question: "How can you add a comment in JavaScript?", options: ["// comment", "/* comment */", "# comment", "/* comment */"], answer: "// comment" },
            { question: "What is the correct syntax for referring to an external script file in HTML?", options: ["<script href='script.js'>", "<script src='script.js'>", "<script ref='script.js'>", "<script file='script.js'>"], answer: "<script src='script.js'>" },
            { question: "Which of the following is not a JavaScript data type?", options: ["String", "Number", "Boolean", "Float64"], answer: "Float64" },
            { question: "What keyword is used to create a new object in JavaScript?", options: ["object", "new", "class", "function"], answer: "new" },
            { question: "Which method is used to add a new element at the end of an array in JavaScript?", options: ["push()", "append()", "add()", "insert()"], answer: "push()" },
            { question: "How can you write an infinite loop in JavaScript?", options: ["while (true) {}", "for (;;)", "while (false) {}", "Both a and b"], answer: "Both a and b" }
        ];

        function shuffleQuestions(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]; 
            }
        }

        shuffleQuestions(quizData);

        let currentQuestionIndex = 0;
        let score = 0;

        function loadQuestion() {
            const currentQuestion = quizData[currentQuestionIndex];
            document.getElementById("question").textContent = currentQuestion.question;
            const optionsContainer = document.getElementById("options");
            optionsContainer.innerHTML = "";
            currentQuestion.options.forEach((option, index) => {
                const div = document.createElement("div");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = "answer";
                input.id = `option${index}`;
                input.value = option;
                const label = document.createElement("label");
                label.setAttribute("for", `option${index}`);
                label.textContent = option;
                div.appendChild(input);
                div.appendChild(label);
                div.onclick = () => checkAnswer(option);
                optionsContainer.appendChild(div);
            });
        }

       
        function checkAnswer(selectedAnswer) {
            const correctAnswer = quizData[currentQuestionIndex].answer;
            if (selectedAnswer === correctAnswer) {
                score++;
            }
            document.getElementById("next-btn").style.display = "inline-block";
        }

        
        function nextQuestion() {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
                document.getElementById("next-btn").style.display = "none";
            } else {
                showResults();
            }
        }

        function showResults() {
            document.getElementById("quiz").style.display = "none";
            const scoreText = document.getElementById("score-text");
            scoreText.textContent = `You scored ${score} out of ${quizData.length}!`;

            const passMessage = document.getElementById("pass-message");
            if (score > 23) {
                passMessage.textContent = "You passed the exam!";
            } else {
                passMessage.textContent = "You did not pass the exam. Better luck next time!";
            }
            passMessage.style.display = "block";
            document.getElementById("results").style.display = "block";
        }

        // Function to restart quiz
        function restartQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            document.getElementById("quiz").style.display = "block";
            document.getElementById("results").style.display = "none";
            shuffleQuestions(quizData);
            loadQuestion();
            document.getElementById("next-btn").style.display = "none";
        }
        loadQuestion();
