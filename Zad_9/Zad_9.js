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
        <tr>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
            <td>${user.city}</td>
        </tr>
        `)
    })
};

$table.append(getRowsWithUsers());

// A.1 Pierwsza komórka powinna zawierać checkbox, zaznaczenie checkboxa
// ma wyświetlić w konsoli ID danego użytkownika

let $firstCellOfRows= $('td:nth-child(1)');

const $createCbx = $('<input type="checkbox" class="terms-cbx"">');

$firstCellOfRows.prepend($createCbx);

const $termsCbx = $('.terms-cbx');

function propertyOfCbx () {
    const isChecked = $termsCbx.prop('checked');
    console.log(true);
}

$termsCbx.on('click', propertyOfCbx);

// A.2 Ostatnia komórka powinna zawierać X z klasą remove-icon, który usuwa dany rząd

$('<td><i class="fa fa-minus-square remove-icon" aria-hidden="true"></i></td>').appendTo($('tr'));

const $trashIcon = $('.remove-icon');

function removeRow() {
    $(this).closest('tr').remove();
}

$trashIcon.on('click', removeRow);

// A.3 rząd powinien zawierać klasę table-row

 $('tr').addClass('table-row');

// A.4 komórka powinna zawierać klasę table-cell

$('td').addClass('table-cell');

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

