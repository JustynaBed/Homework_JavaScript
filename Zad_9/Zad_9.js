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

$termsbox.on('click', propertyOfCbx);
// A.2 Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd

const $trashIcon = $('.remove-icon');

function removeRow() {
    $(this).closest('tr').remove();
}

$trashIcon.on('click', removeRow);

// A.5 najechanie na rząd ma go podświetlić

$tableRow = $('.table-row');

function highLightOnOver() {
    $(this).addClass('active');
}

function highLightOnLeave() {
    $(this).removeClass('active');
}

$tableRow.on('mouseenter', highLightOnOver);
$tableRow.on('mouseleave', highLightOnLeave);

// B.1 nad tabela być formularz, który pobiera dane usera i puszuje go do tablicy users i od razu pokazuje na widoku.

const $getForm = $(`<form>
<label for="firstName">First name: </label><input type="text" id="firstName" name="user_name"><br/>
<label for="lastName">Last name: </label><input type="text" id="lastName" name="user_lasName"><br/>
<label for="age">Age: </label><input type="text" id="age" name="user_age"><br/>
<label for="city">City: </label><select type="text" id="city" name="user_city"></select><br/>
<button id="accept-button" type="submit" disabled><i class="fa fa-plus-square fa-lg"></i></button><hr>
</form>)`);

$getForm.prependTo('body');

// B.2 formularz ma mieć select, z 5 miastami do wyboru (Twoja decyzja), pozostałe wartości pobrane z inputów textowych

const cities = ['Gdańsk', 'Gdynia', 'Sopot', 'Wejherowo', 'Rumia', 'Reda'];
const $citiesList = $('#city');

const getOptions = () => {
    return cities.map(city => $(`<option value="${city}">${city}</option>`));
};

$citiesList.append(getOptions());

// B.3 przycisk do dodania użytkownika ma być odblokowany jeśli wiek age > 18 a firstName ma więcej niż 3 litery

$acceptBtn = $('#accept-button');
$ageRequried = $('#age');
$numberOfLetterRequired = $('#firstName');

function required () {
    const MIN_REQUIRED_AGE = 18;
    const MIN_REQUIRED_LETTER_OF_NAME = 4;
    return $ageRequried.val() < MIN_REQUIRED_AGE &&
        $numberOfLetterRequired.val().length < MIN_REQUIRED_LETTER_OF_NAME;
}

function validateSubmitBtn() {
    $acceptBtn.prop('disabled', required());
}

$ageRequried.add($numberOfLetterRequired).on('keyup', validateSubmitBtn);