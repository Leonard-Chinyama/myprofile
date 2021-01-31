var myactive = document.querySelectorAll(".header-right > a").classList.remove("active");

function dataFunction(selected){
  myactive.className = "";

  document.getElementById('slideshow').style.display = "none";
  document.getElementById('data-container').style.display = "block";

  var education_item = document.getElementById('education_item');
  var about_item = document.getElementById('about_item');
  var skills_item = document.getElementById("skills_item");
  var interests_item = document.getElementById("interests_item");


  //var addlink = '#' + selected;
  var item_selected = String(selected);
  //alert('You have clicked ' + selected);
  var education_data =''
  var education = 'education';
  var about_me = 'about';
  var interests = 'interests';
  var skills = 'skills';

  var element = "";

  var title = document.getElementById('title');
  // //window.history.pushState('', '', addlink);
  // //document.getElementById('rightsection').innerHTML = 'Hello World';

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
  element.classList.add('active');
}
