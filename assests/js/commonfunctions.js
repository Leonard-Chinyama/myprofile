/* This method will ensure that when the page is refreshed, the user is taken
  straight to where they were, and not to the home page. */
window.addEventListener('load', (event) => {
    var currentURL = window.location.href;
    var part = currentURL.split("#")[1];  //This line returns whats after #

    if(part.trim().length > 0){
      dataFunction(part);
    }
    else{
      return;
    }
});




function dataFunction(selected){

  document.getElementById('slideshow').style.display = "none";
  document.getElementById('data-container').style.display = "block";


  var item_selected = String(selected);

  // The following four variables are used in the if statements.
  var education = 'education';
  var about_me = 'about';
  var interests = 'interests';
  var skills = 'skills';

  var element = "";
  var mymenue =["about_item", "interests_item", "education_item", "skills_item"];

  var title = document.getElementById('title');
  // //window.history.pushState('', '', addlink);

  if(item_selected.trim() === about_me.trim()){
    title.innerHTML="Personal Statement";
    element = document.getElementById('about_item');

  }

  else if (item_selected.trim() === education.trim()) {
    title.innerHTML="My Educational Background";
    element = document.getElementById('education_item');
  }

  else if(item_selected.trim() === skills.trim()){
    title.innerHTML="My Skills";
    element = document.getElementById('skills_item');
  }

  else{
    title.innerHTML="My Hobbies";
    element = document.getElementById('interests_item');
  }
  clearClass(mymenue, element);   // I'm calling the clearClass function.
}

// Remove highlight from all menu items.
function clearClass(list, element){
  for(i=0; i<list.length; i++){
    var menueitem = String(list[i]);
    var deleteClass = document.getElementById(menueitem);
    deleteClass.classList.remove('active');
  }

  /* hightlight the menu item the user is viewing by adding the active class*/
  element.classList.add('active');
}
