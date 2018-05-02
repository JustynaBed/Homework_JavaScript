$('body').prepend($('<div>').addClass('container'));

const getRow = () => $('<div>')
        .addClass('row');

    for (let i = 0; i < 3; i++) {
        $('.container').prepend(getRow());
    }

 let $firstRow = $('.row').eq(0);
 let $secondRow = $('.row').eq(1);
 let $thirdRow = $('.row').eq(2);


const getColumnForFirstRow = (col, id, text) => $('<div>')
    .addClass('col' + col)
    .attr('id', id)
    .append(`<p class="description">${text}</p>`);

$firstRow.append(getColumnForFirstRow('-sm-4', 'aaa', 'Jeden'));
$firstRow.append(getColumnForFirstRow('-sm-4', 'ccc', 'Dwa'));
$firstRow.append(getColumnForFirstRow('-sm-4', 'ooo', 'Trzy'));


const getColumnForSecondRow = (col, style, text) => $('<div>')
        .addClass('col' + col)
        .attr('style', style)
        .append('<p class="description">' + text +'</p>');

$secondRow.append(getColumnForSecondRow('-xs-6', 'color: red;', 'Cztery'));
$secondRow.append(getColumnForSecondRow('-xs-6', 'color: red;', 'Pieć'));


const getColumnForThirdRow = (col, data, text) => $('<div>')
        .addClass('col' + col)
        .attr('data-product', data)
        .append('<p class="description">' + text +'</p>');

$thirdRow.append(getColumnForThirdRow('-md-3', '300', 'Sześć'));
$thirdRow.append(getColumnForThirdRow('-md-3', '400', 'Siedem'));
$thirdRow.append(getColumnForThirdRow('-md-3', '500', 'Osiem'));