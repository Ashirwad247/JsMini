let buttons = document.querySelectorAll('.btn')
let inp = document.querySelector('input')
ans = ""
finalString = ""


function addition(a, b) { return a + b }
function subtraction(a, b) { return a - b }
function multiplication(a, b) { return a * b }
function division(a, b) { return a - b }


function setOperations(prevOp, latOP, charVal, a, b) {
    prevOp = latOp
    latOp = charVal
    if (prevOp == "+") {
        a = addition(a, b)
    } else if (prevOp == "*") {
        a = multiplication(a, b)
    } else if (prevOp == "-") {
        a = subtraction(a, b)
    } else if (prevOp == "/") {
        a = division(a, b)
    }
    s = ""
    return a
}


let rVal = 0
let a = 0
let b = 0
function ansSetter(str) {

    flag = 0
    latOp = ""
    prevOp = ""
    let s = ""
    for (let i = 0; i < str.length; i++) {

        if (flag == 0 && (str[i] == "-" ||
            str[i] == "*" || str[i] == "/" || str[i] == "+"
        )) {
            s = ""
            flag = 1
            latOp = str[i]
            continue;
        }
        if (flag == 1) {
            if (str[i] == "+") {
                a = setOperations(prevOp, latOp, str[i], a, b)
                s = ""
                continue;
            } else if (str[i] == "*") {

                a = setOperations(prevOp, latOp, str[i], a, b)
                s = ""
                continue;

            } else if (str[i] == "-") {
                a = setOperations(prevOp, latOp, str[i], a, b)
                s = ""
                continue;

            } else if (str[i] == "/") {
                a = setOperations(prevOp, latOp, str[i], a, b)
                s = ""
                continue;
            }


        }
        if (flag == 0) {
            //for a 
            s += str[i]
            a = Number.parseInt(s)
        }
        if (flag == 1) {
            //for b
            s += str[i]
            b = Number.parseInt(s)
        }

        if (flag == 1 && i == str.length - 1) {
            if (latOp == "+") {
                rVal = addition(a, b)

            } else if (latOp == "*") {
                rVal = multiplication(a, b)
            } else if (latOp == "-") {
                rVal = subtraction(a, b)
            }
            else if (latOp == "/") {
                rVal = division(a, b)
            }

        }

    }

    a = rVal
    return rVal
}


function stringValidator(str) {
    if (str[0] == "+" || str[0] == "=" || str[0] == "*" || str[0] == "-"
        || str[0] == "/" || str[0] == "c" || str[0] == "C" || str[0] == "-" ||
        str[str.length - 1] == "R" || str[str.length - 1] == "r" ||
        str[str.length - 1] == "+" || str[str.length - 1] == "*" || str[str.length - 1] == "-"
        || str[str.length - 1] == "/" || str[str.length - 1] == "="
    ) return true
    return false
}

function finalStinger(str) {
    if (stringValidator(str)) {

        inp.value = "Error in input"

    } else {
        let inpSet = ansSetter(str)
        console.log(inpSet)
        inp.value = inpSet


    }
    return

}

let flag = 0
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.textContent == "=") {
            finalStinger(ans)
            flag = 1
        }
        if (flag != 1) {
            ans += btn.textContent
            inp.value = ans
            console.log(ans)
        }


        if (btn.textContent == "C" || btn.textContent == "c") {
            ans = ""
            finalString = ""
            inp.value = "0"
            flag = 0


        }


    })

})




