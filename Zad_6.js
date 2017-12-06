
//Ex 1.1
var sender = 'JUSTYNA';
var sms = ' Hello Ewa, I am really tired today so I will call you maybe tomorrow morning.';
var receiver = 'EWA';

sender = sender.charAt(0).toUpperCase() + sender.substring(1).toLowerCase();
sms.trim();
receiver = receiver.charAt(0).toUpperCase() + receiver.substring(1).toLowerCase();

function message (sender, sms, receiver) {
    return '(FROM: '+ sender + ')' + ' (TO: ' + receiver + ' ) (MESSAGE:' + sms;
}

console.log(message(sender, sms, receiver));
//Ex 1.2