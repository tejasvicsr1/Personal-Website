if(window.localStorage.getItem('visits') == null)
{
        window.localStorage.setItem('visits', 1);
}       
window.onload = function()
{

    if(window.localStorage.getItem('visits') == "null" || window.localStorage.getItem('visits') == "NaN")
        window.localStorage.setItem('visits', 1);
    visits = window.localStorage.getItem('visits');

    let x = parseInt(window.localStorage.getItem('visits'), 10) + 1;
    window.localStorage.setItem('visits', x);

    let t = document.getElementById("counter");
    let text = "You have visited the page " + x + "times.";
    t.innerHTML = text;
}

mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    mybutton.style.display = "block";
  } else 
  {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction()
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}