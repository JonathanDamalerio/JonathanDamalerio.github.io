function incrementValue()
{
    var value = parseInt(document.getElementById('count').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('count').value = value;
}