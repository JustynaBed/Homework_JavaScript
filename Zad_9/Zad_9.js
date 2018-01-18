/* TODO:EXTRAS!. ZADANIE DODATKOWE W MIEDZY CZASIE!
/ Na podstawie tablicy userów:
[
   {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
   {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
   {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
   {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

- stworzyć dynamicznie tabelę <table> i wypełnić ją danymi z tablicy users.

A.
A.1 Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa
  ma wyświetlić w konsoli ID danego użytkownika
A.2 Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd
A.3 rząd powinien zawierać klasę table-row
A.4 komórka powinna zawierać klasę table-cell
A.5 najechanie na rząd ma go podświetlić

B.
B.1 nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.
B.2 formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych
B.3 przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery
*/

const users = [
    {firstName: 'Tomasz', lastName: 'Doe', age: 23, city: 'London', id: 1},
    {firstName: 'Monika', lastName: 'Brosman', age: 35, city: 'Sosnowiec', id: 2},
    {firstName: 'Witek', lastName: 'Pitt', age: 40, city: 'Chicago', id: 3},
    {firstName: 'Kasia', lastName: 'Belucci', age: 15, city: 'Bruksela', id: 4}
];

const $table = $('<table class="table table-dark">').appendTo('body');

const getRowsWithUsers = () => {
    return users.map(user => {
        return $(`
        <tr class="table-row">
            <td class="table-cell"><input class='terms-cbx' type='checkbox' data-user='${user.id}'></td>
            <td class="table-cell">${user.id}</td>
            <td class="table-cell">${user.firstName}</td>
            <td class="table-cell">${user.lastName}</td>
            <td class="table-cell">${user.age}</td>
            <td class="table-cell">${user.city}</td>
            <td><i class="fa fa-minus-square remove-icon" aria-hidden="true"></i></td>
        </tr>
        `)
    })
};

$table.append(getRowsWithUsers());

// A.1 Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa
// ma wyświetlić w konsoli ID danego użytkownika

const $termsbox = $('.terms-cbx');

function propertyOfCbx() {
    if ($(this).prop('checked')) {
        console.log($(this).data('user'));
    }
}

$table.on('click', '.terms-cbx', propertyOfCbx);
// A.2 Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd

const $trashIcon = $('.remove-icon');

function removeRow() {
    $(this).closest('tr').remove();
}

$table.on('click', '.remove-icon', removeRow);

// A.5 najechanie na rząd ma go podświetlić

$tableRow = $('.table-row');

function highLightOnOver() {
    $(this).addClass('active');
}

function highLightOnLeave() {
    $(this).removeClass('active');
}

$table.on('mouseenter', '.table-row', highLightOnOver);
$table.on('mouseleave', '.table-row', highLightOnLeave);

// B.1 nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.
$acceptBtn = $('#accept-button');
$userAge = $('#user-age');
$userFirstName = $('#first-name');
$userLastName = $('#last-name');
$userCity = $('#user-city');

$acceptBtn.on('click', function() {
    users.push({
        firstName: $userFirstName .val(),
        lastName: $userLastName.val(),
        age: $userAge.val(),
        city: $userCity.val(),
        id: users.length + 1,
    });
    $table.html(getRowsWithUsers())
});

// B.3 przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery

function required () {
    const MIN_REQUIRED_AGE = 18;
    const MIN_REQUIRED_LETTER_OF_NAME = 4;
    return $userAge.val() < MIN_REQUIRED_AGE ||
        $userFirstName.val().length < MIN_REQUIRED_LETTER_OF_NAME;
}

function validateSubmitBtn() {
    $acceptBtn.prop('disabled', required());
}

$userAge.add($userFirstName).on('keyup', validateSubmitBtn);


//DODATKOWE: autoczysczenie pola w formularzu po kliknięciu
const $clearInput = $('input');
function clear() {
    $(this).val('')
}

$clearInput.on('click', clear);