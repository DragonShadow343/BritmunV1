const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNextBtn");
const prevBtnSec = document.querySelector(".secondPrevBtn");
const nextBtnSec = document.querySelector(".secondNextBtn");
const prevBtnThird = document.querySelector(".thirdPrevBtn");
const nextBtnThird = document.querySelector(".thirdNextBtn");
const prevBtnFourth = document.querySelector(".fourthPrevBtn");
const submitBtn = document.querySelector(".SubmitBtn");
const checkPoint = document.querySelectorAll(".progressCheckpoint");

// Function to check if all data in page 1 is entered
const myForm = document.querySelector('#registrationForm');
const fName = document.querySelector('#fName');
const lName = document.querySelector('#lName');
const eMail = document.querySelector('#EmailID');
const CPRnum = document.querySelector('#CPRnum');
const SchoolName = document.querySelector('#schoolName');

function validatePage1() {

  var retVal = true;
    // Page 1
    if(document.myForm.fName.value == "") {
      alert("Please provide your First Name");
      moveToPage1();
      document.myForm.fName.focus() ;
      retVal = false;
    } else if(document.myForm.lName.value == "") {
      alert( "Please provide your Last Name");
      document.myForm.lName.focus() ;
      retVal = false;
    } else if(document.myForm.eMail.value == "") {
      alert("Please provide eMail");
      document.myForm.eMail.focus() ;
      retVal = false;
     } else if(document.myForm.SchoolName.value == "" ) {
      alert("Please provide your School Name");
      document.myForm.SchoolName.focus() ;
      retVal = false;
     } else if(document.myForm.CPRnum.value == "" || isNaN( document.myForm.CPRnum.value ) ||
      document.myForm.CPRnum.value.length != 9){
      alert("Please provide a CPR Number in the appropriate format");
      document.myForm.CPRnum.focus();
      retVal = false;
    }
    return(retVal);
 }

// Moving to the second Page
nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  checkPoint[0].classList.add("active");
});

  // Moving to the third page
nextBtnSec.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    checkPoint[1].classList.add("active");
  });
  
  // Moving to the submit page
  nextBtnThird.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    checkPoint[2].classList.add("active");
  });
  
  // Submitting the form
  submitBtn.addEventListener("click", function(){
    checkPoint[3].classList.add("active");
    current += 1;
    setTimeout(function(){
      alert("Your Form Successfully Signed up");
      location.reload();
    },800);
  });
  
  // Moving back from the second page
  prevBtnSec.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    checkPoint[0].classList.remove("active");
    });
  
  // Moving back from the third page
  prevBtnThird.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    checkPoint[1].classList.remove("active");
  });
  
  // Moving back from the fourth page
  prevBtnFourth.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    checkPoint[2].classList.remove("active");
  });


// -------------------- Navbar responsivness -------------------- //
const navBarBtnOpen = document.getElementById('navBarBtnOpen');
const navBarBtnClose = document.getElementById('navBarBtnClose');
const navBar = document.getElementById("navbar");

navBarBtnOpen.addEventListener('click', function(){
    navBar.classList.add('displayed')
})

navBarBtnClose.addEventListener('click', function(){
    navBar.classList.remove('displayed')
})
