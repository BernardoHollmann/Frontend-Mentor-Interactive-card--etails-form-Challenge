window.onload = function(){
    const userName = document.getElementById('name');
    const cardName = document.getElementById('card-name'); 

    const userNumber = document.getElementById('number');
    const cardNumber = document.getElementById('card-number');

    const userMonth = document.getElementById('month');
    const cardMonth = document.getElementById('card-month');

    const userYear = document.getElementById('year');
    const cardYear = document.getElementById('card-year');

    const userCvc = document.getElementById('cvc');
    const cardCvc = document.getElementById('card-cvc');

    const submitBtn = document.getElementById('btn');
    const form = document.getElementById('form')
    const tku = document.getElementById('thank-you')

    const completeBtn = document.getElementById('btn2');

    userName.addEventListener('keyup', writeNameOnCard);
    userNumber.addEventListener('keyup', writeNumberOnCard);
    userMonth.addEventListener('keyup', writeMonthOnCard);
    userYear.addEventListener('keyup', writeYearOnCard);
    userCvc.addEventListener('keyup', writeCvcOnCard);
    
    submitBtn.addEventListener('click', checkForm);
    form.addEventListener('submit', checkForm);


    function checkForm(e) {
        e.preventDefault()

        const nameValue = userName.value.trim();
        let nameCheck = checkIfNull(nameValue, userName);
        const numberValue = userNumber.value.trim();
        let numberCheck = checkIfNull(numberValue, userNumber);
        const mmValue = userMonth.value.trim();
        let mmCheck = checkIfNull(mmValue, userMonth);
        const yyValue = userYear.value.trim();
        let yyCheck = checkIfNull(yyValue, userYear);
        const cvcValue = userCvc.value.trim();
        let cvcCheck = checkIfNull(cvcValue, userCvc);


        checkForm(nameCheck, numberCheck, mmCheck, yyCheck, cvcCheck);

        function checkForm(name, number, month, year, cvc){
            if (name == true && number == true && month ==true && year == true && cvc) {
                form.classList += 'hidden';
                tku.classList.remove('hidden');
                completeBtn.addEventListener('click', ()=>{
                    location.reload()
                })
            } else {
                tku.classList = 'hidden';
                form.classList.remove('hidden');
            }
        }

        function checkIfNull(value, element) {

            if (value === '' || value === null || value === undefined) {
                errorFunc(element, "Can't be blank");
                return false
            } else {
                successFunc(element);
                return verifyInput(value, element);
            }        
        }

        function verifyInput(value, element){
            if (element.id == 'name') {
                if (value.length < 3) {
                    errorFunc(element, "Enter valid name")
                    return false;
                } else {
                    return true;
                }
            }

            if (element.id == 'number') {
                if (value.length < 16) {
                    errorFunc(element, "Enter valid number")
                    return false;
                } else {
                    return true;
                }
            }

            if (element.id == 'month') {
                if ((value < 1) || (value > 12)){
                    errorFunc(element, "Enter a valid date");
                    return false;
                } else {
                    return true;
                }
            }

            if (element.id == 'year') {
                if ((value < 0) || (value < 22) || (value > 40)){
                    errorFunc(element, "Enter a valid date");
                    return false;
                } else {
                    return true;
                }
            }

            if (element.id == 'cvc') {
                if ((value.length < 3) || (value < 0)) {
                    errorFunc(element, "Enter valid number")
                    return false;
                } else {
                    return true;
                }
            }

        }

        function errorFunc(element, message){
            element.className = "error";
            const parent = element.parentElement;
            const span = parent.querySelector('span');
            span.className = "error-text";
            span.innerText = message;
        }

        function successFunc(element){
            element.className = "success";   
            const parent = element.parentElement;
            const span = parent.querySelector('span');
            span.className = ''; 
            span.innerText = ''; 
        }
      
    }
    
    function writeNameOnCard(e){

        if (cardName.innerHTML = 'Felicia Leire') {
            cardName.innerHTML = ''
        }

        if (!isNumber(e.key)) {
            cardName.innerHTML = userName.value;
        } else {
            userName.value = userName.value.replace(/[^\w\.]|\d/g, '').trim();
            cardName.innerHTML = userName.value;             
            }
    }

    function writeNumberOnCard(e){

        if (cardNumber.innerHTML = '9591 6489 6389 101E') {
            cardNumber.innerHTML = ''
        }

        if (isNumber(e.key)) {
            cardNumber.innerHTML = Math.abs(userNumber.value);
        } else {
            userNumber.value = userNumber.value.replace(/\D+/g, '').trim();
            cardNumber.innerHTML = userNumber.value;           
        }
    }

    function writeMonthOnCard(e){
        if (cardMonth.innerHTML = '00') {
            cardMonth.innerHTML = ''
        }

        if (isNumber(e.key)) {
            cardMonth.innerHTML = Math.abs(userMonth.value)
        } else {
            if (e.keyCode == 32) {userMonth.value = ''}
            userMonth.value = userMonth.value.replace(/\D+/g, '').trim();
            cardMonth.innerHTML = userMonth.value;           
            }
    }

    function writeYearOnCard(e){

        if (cardYear.innerHTML = '09') {
            cardYear.innerHTML = ''
        }
        
        if (isNumber(e.key)) {
            cardYear.innerHTML = Math.abs(userYear.value)
        } else {
            if (e.keyCode == 32) {userMonth.value = ''}
            userYear.value = userYear.value.replace(/\D+/g, '').trim();
            cardYear.innerHTML = userYear.value;           
            }
    }

    function writeCvcOnCard(e){

        if (cardCvc.innerHTML = '000') {
            cardCvc.innerHTML = ''
        }
        
        if (isNumber(e.key)) {
            cardCvc.innerHTML = Math.abs(userCvc.value)
            
        } else {
            if (e.keyCode == 32) {userMonth.value = ''}
            userCvc.value = userCvc.value.replace(/\D+/g, '').trim();
            cardCvc.innerHTML = userCvc.value;           
            }
    }

    function isNumber(input) {
        return /[^\w\.]|\d/g.test(input)
    };

}