//Dodanie pierwszego diva o klasie 'container'
$('body').prepend($('<div>').addClass('container'));


//Dodanie trzech divów o klasie 'row
function getRow(addClass) {
    return $('<div>')
        .addClass('row')
}

    for (var i = 0; i < 3; i++) {
        $('.container').prepend(getRow());
    }

 var $containerOne = $('.row').eq(0);
 var $containerTwo = $('.row').eq(1);
 var $containerThree = $('.row').eq(2);


 //Dodanie trzech divów do containerOne
function getItemOne(col, id, text) {
    return $('<div>')
        .addClass('col' + col)
        .attr('id', id)
        .append('<p class="description">' + text +'</p>');
}


$containerOne.append(getItemOne('-sm-4', 'aaa', 'Jeden'));
$containerOne.append(getItemOne('-sm-4', 'ccc', 'Dwa'));
$containerOne.append(getItemOne('-sm-4', 'ooo', 'Trzy'));

//Dodanie dwóch divów do containerTwo
function getItemTwo(col, style, text) {
    return $('<div>')
        .addClass('col' + col)
        .attr('style', style)
        .append('<p class="description">' + text +'</p>');
}


$containerTwo.append(getItemTwo('-xs-6', 'color: red;', 'Cztery'));
$containerTwo.append(getItemTwo('-xs-6', 'color: red;', 'Pieć'));

//Dodanie trzech divów do containerTwo
function getItemThree(col, data, text) {
    return $('<div>')
        .addClass('col' + col)
        .attr('data-product', data)
        .append('<p class="description">' + text +'</p>');
}


$containerThree.append(getItemThree('-md-3', '300', 'Sześć'));
$containerThree.append(getItemThree('-md-3', '400', 'Siedem'));
$containerThree.append(getItemThree('-md-3', '500', 'Osiem'));