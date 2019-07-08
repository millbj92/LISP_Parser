

const checkOpen = character => {
    const open = character === '(' ? true : false;
    return open;
}

const isParenthesis = char => {
    const check = '()';
    if(check.indexOf(char) > -1)
        return true;
    else
        return false;
}

const matches = (topOfStack, closedParenthesis) => {
    if(topOfStack === '(' && closedParenthesis === ')'){
        return true;
    }

    return false;
}

const printResult = value => {
    const resultDiv = document.getElementById('result');

    if(value)
        resultDiv.innerHTML = "The LISP Code is valid!"
    else
        resultDiv.innerHTML = "The LISP Code is not valid..."
}


const isValid = () => {
    const lispInput = document.getElementById('lisp-text');
    const lispCode = lispInput.value;

    if(lispCode === ''){
        document.getElementById('result').innerHTML = 'Please enter some LISP code to parse!'
        return;
    }

    const split = lispCode.split('');
    let parens = [];

    for(let i = 0; i < split.length; i++){
        if(isParenthesis(split[i])){
            if(checkOpen(split[i])){
                parens.push(split[i]);
            }else{
                if(parens.length === 0)
                    return printResult(false);
                
                const first = parens.pop();
                if(!matches(first, split[i])){
                    return printResult(false);
                }
            }
        }
    }

    const value = parens.length === 0 ? true : false;
    printResult(value);

}

const submit = document.getElementById('parse-button');
submit.addEventListener('click', isValid);