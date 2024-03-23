let a = ''; // Первое число
let b = ''; // Второе число
let sign = ''; // Знак операции
let finish = false; //Доп переменная которая = по умолчанию фолс

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','x','/','%'];

// для получения экрана 
const out = document.querySelector('.calc-screen p')

//для создании функции "ac" (clear all) я использую 
function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

const ac = document.querySelector('#ac');

ac.addEventListener('click',(e) => {
    clearAll();
})

//я обратился к док-ту т.е. к индекс с классом батонс и нужно поставить задачу нажата кнопка или область и поэтому я конкретизирую с помошью if event target classlist contains ('btn') return
document.querySelector('.buttons').addEventListener('click', (event) => {
    //нажата не кнопка 
    if (!event.target.classList.contains ('btn')) return;
    // нажата кнопка клер ол ас
    if (event.target.classList.contains('ac')) return;
    const key = event.target.textContent;

    out.textContent = '';
    // получаю нажатую кнопку 
    console.log(key, digit.includes(key));
    //если нажата кнопка 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a+=key;
            out.textContent = a;
            console.log (a, b, sign);
        } else if (a !== '' && b !== '' && finish === true) {
            console.log('test');
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
            console.log (a, b, sign);
        }
        console.log (a, b, sign);
        return;
    }
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log (a, b, sign);
        return
    }

    if (key === '=') {
        if (b === '') {
            b = a;
        }
        switch(sign) {
            case '+':
                a = +a + +b;
                break;
            case '-':
                a = +a - +b;
                break;
            case '*':
                a = +a * +b;
                break;
            case '/':
                a = +a / +b;
                break;
            case '%':
                a = +a % +b;
                break;
        }
        finish = true;
        out.textContent = a;
    }
})