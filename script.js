var number = 0;

function count()
{
    number++;
    var text =  document.getElementById("counter");
    text.innerHTML = number;
}
count();
function revcount()
{
    number--;
    var text =  document.getElementById("counter");
    text.innerHTML = number;
}
function reset()
{
    number=0
    var text =  document.getElementById("counter");
    text.innerHTML = number;
}
revcount();