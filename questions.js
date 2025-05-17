const quizQuestions = [
    {
        category: 'html',
        question: "HTML nə deməkdir?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Modern Language"
        ],
        correctIndex: 0
    },
    {
        category: 'html',
        question: "HTML-də link yaratmaq üçün hansı teq istifadə olunur?",
        options: [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        correctIndex: 0
    },
    {
        category: 'css',
        question: "CSS nə deməkdir?",
        options: [
            "Cascading Style Sheet",
            "Colorful Style Sheet",
            "Creative Style Syntax",
            "Computer Style Sheet"
        ],
        correctIndex: 0
    },
    {
        category: 'css',
        question: "Mətn rəngini dəyişdirmək üçün hansı CSS xüsusiyyəti istifadə olunur?",
        options: [
            "font-color",
            "text-color",
            "color",
            "text-style"
        ],
        correctIndex: 2
    },
    {
        category: 'javascript',
        question: "JavaScript-də dəyişən təyin etmək üçün hansı açar söz istifadə olunur?",
        options: [
            "var",
            "let",
            "const",
            "Hamısı"
        ],
        correctIndex: 3
    },
    {
        category: 'javascript',
        question: "JavaScript-də şərhlər necə yazılır?",
        options: [
            "// Bu bir şərhdir",
            "# Bu bir şərhdir",
            "/* Bu bir şərhdir */",
            "-- Bu bir şərhdir"
        ],
        correctIndex: 0
    },
    {
        category: 'html',
        question: "HTML-də şəkil əlavə etmək üçün hansı teq istifadə olunur?",
        options: [
            "<img>",
            "<image>",
            "<picture>",
            "<photo>"
        ],
        correctIndex: 0
    },
    {
        category: 'css',
        question: "Elementin arxa fon rəngini dəyişdirmək üçün hansı CSS xüsusiyyəti istifadə olunur?",
        options: [
            "background-color",
            "bgcolor",
            "color-background",
            "background"
        ],
        correctIndex: 0
    },
    {
        category: 'javascript',
        question: "JavaScript-də bir arrayin sonuna element əlavə etmək üçün hansı metod istifadə olunur?",
        options: [
            "push()",
            "append()",
            "add()",
            "insert()"
        ],
        correctIndex: 0
    },
    {
        category: 'html',
        question: "HTML-də form yaratmaq üçün hansı teq istifadə olunur?",
        options: [
            "<form>",
            "<input>",
            "<submit>",
            "<button>"
        ],
        correctIndex: 0
    },
    {
        category: 'css',
        question: "CSS-də xarici stil faylı necə əlavə olunur?",
        options: [
            "<style src='styles.css'>",
            "<link rel='stylesheet' href='styles.css'>",
            "<stylesheet>styles.css</stylesheet>",
            "@import 'styles.css'"
        ],
        correctIndex: 1
    },
    {
        category: 'javascript',
        question: "JavaScript-də şərt ifadəsi necə yazılır?",
        options: [
            "if x = 5 then",
            "if x == 5",
            "if (x == 5)",
            "if x = 5"
        ],
        correctIndex: 2
    },
    {
        category: 'html',
        question: "HTML5-də video əlavə etmək üçün hansı teq istifadə olunur?",
        options: [
            "<video>",
            "<media>",
            "<movie>",
            "<play>"
        ],
        correctIndex: 0
    },
    {
        category: 'css',
        question: "Responsive dizayn üçün istifadə olunan CSS xüsusiyyəti hansıdır?",
        options: [
            "responsive-design",
            "media-query",
            "@media",
            "screen-size"
        ],
        correctIndex: 2
    },
    {
        category: 'javascript',
        question: "JavaScript-də DOM nədir?",
        options: [
            "Data Object Model",
            "Document Object Model",
            "Display Object Management",
            "Document Orientation Model"
        ],
        correctIndex: 1
    }
];

const quizQuestionsEn = [
    {
        category: 'html',
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Modern Language"
        ],
        correctIndex: 0
    },
    {
        category: 'html',
        question: "Which tag is used to create a link in HTML?",
        options: [
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        correctIndex: 0
    },
    {
        category: 'css',
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheet",
            "Colorful Style Sheet",
            "Creative Style Syntax",
            "Computer Style Sheet"
        ],
        correctIndex: 0
    },
    {
        category: 'css',
        question: "Which CSS property is used to change text color?",
        options: [
            "font-color",
            "text-color",
            "color",
            "text-style"
        ],
        correctIndex: 2
    },
    {
        category: 'javascript',
        question: "Which keyword is used to define a variable in JavaScript?",
        options: [
            "var",
            "let",
            "const",
            "All of them"
        ],
        correctIndex: 3
    },
    {
        category: 'javascript',
        question: "How do you write comments in JavaScript?",
        options: [
            "// This is a comment",
            "# This is a comment",
            "/* This is a comment */",
            "-- This is a comment"
        ],
        correctIndex: 0
    },
    {
        category: 'html',
        question: "Which tag is used to insert an image in HTML?",
        options: [
            "<img>",
            "<image>",
            "<picture>",
            "<photo>"
        ],
        correctIndex: 0
    },
    {
        category: 'css',
        question: "Which CSS property is used to change the background color of an element?",
        options: [
            "background-color",
            "bgcolor",
            "color-background",
            "background"
        ],
        correctIndex: 0
    },
    {
        category: 'javascript',
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        options: [
            "push()",
            "append()",
            "add()",
            "insert()"
        ],
        correctIndex: 0
    },
    {
        category: 'html',
        question: "Which tag is used to create a form in HTML?",
        options: [
            "<form>",
            "<input>",
            "<submit>",
            "<button>"
        ],
        correctIndex: 0
    },
    {
        category: 'css',
        question: "How do you link an external style sheet in CSS?",
        options: [
            "<style src='styles.css'>",
            "<link rel='stylesheet' href='styles.css'>",
            "<stylesheet>styles.css</stylesheet>",
            "@import 'styles.css'"
        ],
        correctIndex: 1
    },
    {
        category: 'javascript',
        question: "How do you write a conditional statement in JavaScript?",
        options: [
            "if x = 5 then",
            "if x == 5",
            "if (x == 5)",
            "if x = 5"
        ],
        correctIndex: 2
    },
    {
        category: 'html',
        question: "Which tag is used to add video in HTML5?",
        options: [
            "<video>",
            "<media>",
            "<movie>",
            "<play>"
        ],
        correctIndex: 0
    },
    {
        category: 'css',
        question: "Which CSS feature is used for responsive design?",
        options: [
            "responsive-design",
            "media-query",
            "@media",
            "screen-size"
        ],
        correctIndex: 2
    },
    {
        category: 'javascript',
        question: "What is DOM in JavaScript?",
        options: [
            "Data Object Model",
            "Document Object Model",
            "Display Object Management",
            "Document Orientation Model"
        ],
        correctIndex: 1
    }
];
