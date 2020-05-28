/* Open when someone clicks on it */
function openNav() 
{
  document.getElementById("sideNav").style.width = "25%";
  document.getElementById("main").style.marginLeft = "25%";

}
/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() 
{
  document.getElementById("sideNav").style.width = "0%";
  document.getElementById("main").style.marginLeft = "0%";
}

