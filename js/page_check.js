if (document.location.hash == "" || document.location.hash == "#")
{
    document.location.hash = "#about";
    document.querySelector('.main-nav > a:nth-child(1)').style.color = "greenyellow";
}
if(performance.navigation.type == performance.navigation.TYPE_RELOAD)
{
    document.location.hash = "#about";
    document.querySelector('.main-nav > a:nth-child(1)').style.color = "greenyellow";
}










