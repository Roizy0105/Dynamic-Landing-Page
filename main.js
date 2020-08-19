//DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');
//option
const showAMPM = true;

  //Show timeout
function showTime(){
//let today = new Date(2019, 06, 10, 13, 33, 30), //this is used for testing
  let today = new Date(),
  hour = today.getHours(),
  min = today.getMinutes(),
  sec = today.getSeconds();

  // Set am or pm
  const amPm = hour >= 12 ? "PM" : "AM";

  //12hr format
  hour = hour % 12 || 12;

  // Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}
  ${showAMPM ? amPm : ''}`;

  setTimeout(showTime, 1000);
}
//add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
//set background and greeting

function setBgGreet(){
  //let today = new Date(2019, 06, 10, 13, 33, 30), //This is used to for testing
   let today = new Date(),
    hour = today.getHours()

    if(hour < 12){
      //Morning
      document.body.style.backgroundImage = "url(img/photo_1.jpg)";
      greeting.textContent = 'Good Morning';
      document.body.style.color = '#42e310';
    }else if(hour < 18){
      //afternoon
     document.body.style.backgroundImage = "url(img/photo_2.jpg)";
      greeting.textContent = 'Good Afternoon';
      document.body.style.color = '#0307fc';
    }else{
      //evening
      document.body.style.backgroundImage = "url(img/photo_3.jpg)";
      greeting.textContent = 'Good Evening';
    }
}

//Get Name
function getName(){
  if(localStorage.getItem('name') === null){
    name.textContent='[Enter Name]';
  }else{
    name.textContent = localStorage.getItem('name');
  }
}
//setName
function setName(e){
  if(e.type = 'keypress'){
    //make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('name',e.target.innerText);
      name.blur();
    }
  }else{
    localStorage.setItem('name',e.target.innerText);
  }
}
//Get Focus
function getFocus(){
  if(localStorage.getItem('focus') === null){
    focus.textContent='[Enter Focus]';
  }else{
    focus.textContent = localStorage.getItem('focus');
  }
}
//setName
function setFocus(e){
  if(e.type = 'keypress'){
    //make sure enter is pressed
    if(e.which == 13 || e.keyCode == 13){
      localStorage.setItem('focus',e.target.innerText);
      focus.blur();
    }
  }else{
    localStorage.setItem('focus',e.target.innerText);
  }
}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//run
showTime();
setBgGreet();
getName();
getFocus();
