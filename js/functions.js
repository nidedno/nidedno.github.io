function AddActive(event)
{
    let target = event.target;
    let a_elements = document.querySelectorAll('.main-nav > a');
    
    for (let a of a_elements) {
        a.style.color = "whitesmoke";
    }

    target.style.color = "greenyellow";
}