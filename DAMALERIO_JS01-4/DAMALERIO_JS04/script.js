function calculate(){
    var d1 = new Date(document.getElementById('start').value);
    var d2 = new Date(document.getElementById('end').value);
    var diff = Math.abs((d2.getTime()-d1.getTime())/(1000*60*60*24));
    document.getElementById('difference').innerHTML = "The difference is "+diff+" days.";
}