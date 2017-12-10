//Ex 6.1
var sender = 'JUSTYNA';
var sms = ' Hello Ewa, I am really tired today so I will call you maybe tomorrow morning.';
var receiver = 'EWA';

sender = sender.charAt(0).toUpperCase() + sender.substring(1).toLowerCase();
sms = sms.trim();
receiver = receiver.charAt(0).toUpperCase() + receiver.substring(1).toLowerCase();

function message (sender, sms, receiver) {
    return '(FROM: '+ sender + ')' + ' (TO: ' + receiver + ' ) (MESSAGE:' + sms + ')';
}

console.log(message(sender, sms, receiver));


//Ex 6.2
var firstName = 'justyna';
var lastName = 'bednarko';



function letters (firstName, lastName) {

    return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase();
}

console.log(letters(firstName, lastName));


//Ex 6.3
function randomValue() {
    var value = (Math.random() * 10).toFixed(2);
    return value;
}

// function randomValue() {
//     return (Math.random() * 10).toFixed(2);
//
// }

console.log('Twoja szczęśliwa liczba to: ' + randomValue());

//Ex 6.3-SECOND OPTION
function randomValueTwo() {
    var value = Math.random() * 10;
    var value = value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    return value = value;
}

console.log('Twoja szczęśliwa liczba to: ' + randomValueTwo());


//Ex 6.4
function getDinnerPrice() {
    var tip = 20;
    var price = 100;
    return tip + price;
}

console.log(getDinnerPrice());

