mybutton = document.getElementById("myBtn");
let nav = document.getElementById("navigation");
let threshold = nav.offsetTop;

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
  
  if(window.scrollY >= threshold)
  {
      document.body.style.paddingTop = nav.offsetHeight + 'px';
      nav.classList.add("fixed");
  }
  else
  {
      document.body.style.paddingTop = 0;
      nav.classList.remove("fixed");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction()
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
