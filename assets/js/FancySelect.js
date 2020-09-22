var years = [];
for (var i = 0; i <= 5; i++) {
    var c = i + 2017;
    years.push(c);
}
console.log(years);
var select = document.createElement('select');
select.classList.add('select_field');

for (var i = 0; i <= 5; i++) {
    var option = document.createElement('option');
    option.classList.add('option_item');
    option.innerText = years[i];
    select.append(option);
}

document.body.append(select);
document.getElementById('fancy_select').append(select);