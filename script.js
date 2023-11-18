let langinigLink = document.querySelector("#landing-link");
let links = document.querySelectorAll(".navbar-item a");
let navbarContent = document.querySelectorAll(".navbar-content");
let shouldClose = false;
let settingsNavItems = document.querySelectorAll(".settings-nav-item");
let settingsNavContent = document.querySelectorAll(".settings-nav-content");
let accountContent = document.getElementById("Account-content");

for (let i = 0; i < settingsNavItems.length; i++) {
  settingsNavItems[i].addEventListener("mouseenter", () => {
    for (let j = 0; j < settingsNavContent.length; j++) {
      if (j == i) {
        settingsNavContent[j].classList.add("display-block");
      } else {
        settingsNavContent[j].classList.remove("display-block");
      }
    }
  });
}
for (let k = 0; k < settingsNavContent.length; k++) {
  settingsNavContent[k].addEventListener("mouseleave", () => {
    settingsNavContent[k].classList.remove("display-block");
    console.log(1);
  });
}

settingsNavContent.forEach((navContent, index) => {
  navContent.addEventListener("mouseenter", () => {
    settingsNavItems[index].classList.add("display-flex");
  });
  navContent.addEventListener("mouseenter", () => {
    settingsNavItems[index].classList.remove("display-flex");
  });
});

links.forEach((link, index) => {
  link.addEventListener("mouseenter", () => {
    navbarContent[index].classList.add("display-flex");
    shouldClose = true;
  });
  link.addEventListener("mouseleave", () => {
    if (shouldClose) {
      shouldClose = false;
      navbarContent[index].classList.remove("display-flex");
    }
  });
  navbarContent.forEach((nContent) => {
    nContent.addEventListener("mouseenter", () => {
      shouldClose = true;
      nContent.classList.add("display-flex");
    });
    nContent.addEventListener("mouseleave", () => {
      if (shouldClose) shouldClose = false;
      nContent.classList.remove("display-flex");
    });
  });
});

accountContent.addEventListener("mouseleave", () => {
  settingsNavContent.forEach((SNC) => {
    SNC.classList.remove("display-block");
  });
});


let customersImg = document.querySelector("#customers-img");
let customersInfo = document.querySelector("#customers-info");
let customer1Logo = document.querySelector("#customer1Logo")
let customer2Logo = document.querySelector("#customer2Logo")

customer2Logo.style.display = 'none';

let customerObj = {
  element1:["./images/fans/photo-1.jpg","“Landkit is hands down the most useful front end Bootstrap theme I've ever used. I can't wait to use it again for my next project.”"],
  element2:["./images/fans/photo-26.jpg","“I've never used a theme as versatile and flexible as Landkit. It's my go to for building landing sites on almost any project.”"]
}

customersImg.src = customerObj['element1'][0]
customersInfo.innerText = customerObj['element1'][1]
let changed = false
function customerCarouse(){
  if(!changed){
    customersImg.src = customerObj['element2'][0]
    customersInfo.innerText = customerObj['element2'][1]
    customer2Logo.style.display = 'block';
    customer1Logo.style.display = 'none';  
    changed = true
  }
  else{
    customersImg.src = customerObj['element1'][0]
    customersInfo.innerText = customerObj['element1'][1]
    customer2Logo.style.display = 'none';
    customer1Logo.style.display = 'block';
    changed = false
  }
}