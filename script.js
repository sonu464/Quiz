const questions = [
    {
        'que': 'which of the following is markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'a'
    },
    {
        'que': 'CSS stands for?',
        'a': 'HTML',
        'b': 'Cascading Style Sheet',
        'c': 'Common Search start',
        'd': 'Python',
        'correct': 'b'
    },
    {
        'que': 'which of the following is scripting language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'Python',
        'correct': 'c'
    }

]

let right = 0, wrong = 0;
let total = questions.length;
let index = 0; // index of object
const quebox = document.getElementById('quebox'); // use to get element of question
const optionInputs = document.querySelectorAll('.option'); // use to get element of options
const next = document.querySelector('.next-btn'); // use to get element of next-btn
const pre = document.querySelector('.pre-btn'); // use to get element of pre-btn
const submitBtn = document.querySelector('.submit-btn'); // use to get element of submit-btn


function loadquestion() {
    if (index === total) {
        endQuiz();
    }
    reset(); // calling reset function
    const data = questions[index]; // use to get the whole question
    quebox.innerText = `${index + 1}) ${data.que}`; // select only that que data

    // Now add options
    optionInputs[0].nextElementSibling.innerText = data.a; // get options from obect of this projecti
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
// initialization call
loadquestion();

submitBtn.addEventListener('click', function () {
    const data = questions[index];
    let ans;

    optionInputs.forEach(input => {
        if (input.checked) {
            ans = input.value;
        }
    });

    console.log(ans);

    if (ans === data.correct) {
        right++;
        console.log('Right', right);
    } else {
        wrong++;
        console.log('Wrong', wrong);
    }

    index++;

    loadquestion();
})

// Reset Function
function reset() {
    optionInputs.forEach(input => {
        input.checked = false;
    });
}

// EventListener For next btn
next.addEventListener('click', function () {
    if (index === (total - 1)) {
        alert("Press Previous arrow key")
    } else {
        index++;
    }
    loadquestion();
})

// EventListener For Previous btn
pre.addEventListener('click', function () {
    if (index === 0) {
        alert("press Next arrow key")
    } else {
        index--;
    }
    loadquestion();
})

// End Quiz Function
function endQuiz() {
    document.querySelector('.container').innerHTML = `
        <h1>ThankYou For playing</h1>
        <h2>Right Marks ${right}/${total}</h2>
        
    `;
}
