
const btnShowMore = document.getElementById("btnShowMore");

const htmlAhtml_cssndCss = document.getElementById("html_css");

const btnHide = document.getElementById("btnHide");

btnShowMore.addEventListener("click", function () {
  html_css.classList.replace("d-none", "m-0");
  btnHide.classList.replace("d-none", "d-block");
  btnShowMore.classList.replace("d-block", "d-none");

})
btnHide.addEventListener("click", function () {
  html_css.classList.replace("m-0", "d-none");
  btnShowMore.classList.replace("d-none", "d-block");
  btnHide.classList.replace("d-block", "d-none");


})


// <====startNav====>

const navItems = document.querySelectorAll(".nav-link");
navItems.forEach(function (navItem) {
  navItem.addEventListener("click", function () {

    navItems.forEach(function (item) {
      item.classList.remove("active");
    });

    navItem.classList.add("active");
  });
});

function makeNavItemActive(item) {
  const allItemForNav = document.querySelectorAll(".navbar-nav a");
  for (let index = 0; index < allItemForNav.length; index++) {
    if (item === allItemForNav[index].innerHTML) {
      allItemForNav[index].classList.add("active");
    }
    else {
      allItemForNav[index].classList.remove("active");
    }
  }
}

// <====endNav====>










//<========================================>

document.addEventListener("DOMContentLoaded", () => {
  handleScroll();
});

window.onscroll = handleScroll;
let started = false;


function handleScroll() {

  // start home
  if (window.scrollY < 500) {
    makeNavItemActive("Home")
  }
  // end home



  // start about<====================> 
  const about = document.getElementById("about");
  $("#btnUp").addClass("d-none")
  const aboutHeader = document.getElementById("aboutHeader");
  const contentAboutLeft = document.querySelector(".contentAboutLeft");
  const contentAboutRight = document.querySelector(".contentAboutRight");
  const contentAboutButton = document.querySelector(".contentAboutButton");




  if (window.scrollY >= about.offsetTop - 700) {
    aboutHeader.classList.add("animate__fadeInUp");
  }

  if (window.scrollY >= about.offsetTop - 500) {
    contentAboutLeft.classList.add("animate__fadeInUp");
    contentAboutLeft.classList.remove("opacity-0");
    contentAboutRight.classList.add("animate__fadeInUp");
    contentAboutRight.classList.remove("opacity-0");


  }

  if (window.scrollY >= about.offsetTop - 200) {
    makeNavItemActive("About")
    $("#btnUp").removeClass("d-none")
    $("#btnUp").fadeIn(500);

    $("nav").addClass("bg-gray").removeClass("bg-white");
    contentAboutButton.classList.add("animate__fadeInUp");
    contentAboutButton.classList.remove("opacity-0");
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true;
    }


  } else {
    $("#btnUp").fadeOut(500);
    $("nav").addClass("bg-white").removeClass("bg-gray");
  }
  // end about<====================> 







  // start skills<==================>
  const skills = document.getElementById("skills");
  const cartRow1 = document.querySelectorAll(".carts .cart-row1");
  const cartRow2 = document.querySelectorAll(".carts .cart-row2");
  const skillsHeader = document.querySelector(".skillsName");


  if (window.scrollY >= skills.offsetTop - 450) {
    for (let index = 0; index < cartRow1.length; index++) {
      cartRow1[index].classList.add("animate__fadeInUp");
      cartRow1[index].classList.remove("opacity-0");
    }

    if (window.scrollY >= skills.offsetTop - 300) {
      for (let index = 0; index < cartRow2.length; index++) {
        cartRow2[index].classList.add("animate__fadeInUp");
        cartRow2[index].classList.remove("opacity-0");
      }
    }
  }
  if (window.scrollY >= skills.offsetTop - 600) {
    makeNavItemActive("Skills")
    skillsHeader.classList.remove("opacity-0");
    skillsHeader.classList.add("animate__fadeInUp");
  }
  // end skills<==================>








  // start myEducation<==================>
  const myEducation = document.querySelector(".myEducation");
  const myEducationtitle = document.querySelector(".myEducationtitle");
  const myEducationParagraph = document.querySelector(".myEducationParagraph");

  if (window.scrollY >= myEducation.offsetTop - 600) {
    myEducationtitle.classList.add("animate__fadeInUp");
    myEducationtitle.classList.remove("opacity-0");

    myEducationParagraph.classList.add("animate__fadeInUp");
    myEducationParagraph.classList.remove("opacity-0");

  }
  // end myEducation<==================>








  //start Portfolio<==================>

  const portfolio = document.getElementById("portfolio");
  const portfolioHeaderName = document.querySelector(".portfolioHeaderName");
  const portfolioNav = document.querySelector(".portfolioNav");
  const portfolioCartRow1 = document.querySelectorAll(".portfolioCartRow1");
  const portfolioCartRow2 = document.querySelectorAll(".portfolioCartRow2");
  const portfolioCartRow3 = document.querySelectorAll(".portfolioCartRow3");
  const portfolioCartRow4 = document.querySelectorAll(".portfolioCartRow4");

  if (window.scrollY >= portfolio.offsetTop - 600) {
    portfolioHeaderName.classList.add("animate__fadeInUp");
    portfolioHeaderName.classList.remove("opacity-0")
  }

  if (window.scrollY >= portfolio.offsetTop - 500) {
    makeNavItemActive("Portfolio")

    portfolioNav.classList.add("animate__fadeInUp");
    portfolioNav.classList.remove("opacity-0")

  }
  if (window.scrollY >= portfolio.offsetTop - 350) {
    for (let index = 0; index < portfolioCartRow1.length; index++) {
      portfolioCartRow1[index].classList.add("animate__fadeInUp");
      portfolioCartRow1[index].classList.remove("opacity-0")
    }

  }

  if (window.scrollY >= portfolio.offsetTop - 100) {
    for (let index = 0; index < portfolioCartRow2.length; index++) {
      portfolioCartRow2[index].classList.add("animate__fadeInUp");
      portfolioCartRow2[index].classList.remove("opacity-0")
    }
  }

  if (window.scrollY >= portfolio.offsetTop+100) {
    for (let index = 0; index < portfolioCartRow3.length; index++) {
      portfolioCartRow3[index].classList.add("animate__fadeInUp");
      portfolioCartRow3[index].classList.remove("opacity-0")
    }
  }
  if (window.scrollY >= portfolio.offsetTop+300) {
    for (let index = 0; index < portfolioCartRow4.length; index++) {
      portfolioCartRow4[index].classList.add("animate__fadeInUp");
      portfolioCartRow4[index].classList.remove("opacity-0")
    }
  }
  //end Portfolio<==================>










  //start contact<==================>
  const contact = document.getElementById("contact");
  const contactTitle = document.querySelector(".contactTitle");
  const contactContent = document.querySelector(".contactContent");

  if (window.scrollY >= contact.offsetTop - 600) {
    makeNavItemActive("Contact")


    contactTitle.classList.add("animate__fadeInUp");
    contactTitle.classList.remove("opacity-0")

  }
  if (window.scrollY >= contact.offsetTop - 300) {
    contactContent.classList.add("animate__fadeIn");
    contactContent.classList.remove("opacity-0")

  }
  // footer
  const footerContent = document.querySelector(".footerContent");
  if (window.scrollY >= contact.offsetTop + 200) {
    footerContent.classList.add("animate__pulse");
    footerContent.classList.remove("opacity-0")
    console.log("done");

  }
  //end contact<==================>



}
//<========================================>





// start conter
let nums = document.querySelectorAll(".contentAboutButton .num");
function startCount(el) {
  let goal = parseInt(el.dataset.goal); // Parse goal as an integer
  let count = 0;

  let intervalId = setInterval(() => {
    el.textContent = `${count++}+`;

    if (count > goal) {
      clearInterval(intervalId); // Clear the interval when count reaches the goal
    }
  }, 400 / goal);
}
// end conter




// cart========================================>

// add allProjects===================================>
let allProjects = [
  { projectName: 'Portfolio', imagePath: "Images/projectImages/react/portfolio.png", liveDemo: "https://portfolio-five-phi-33.vercel.app/",animation:"portfolioCartRow1" },
  { projectName: 'Dashboard', imagePath: "Images/projectImages/react/admin dashboard.png", liveDemo: "https://admin-dashboard-4454b.web.app/Geography", animation: "portfolioCartRow1" },
  { projectName: 'E-commerce', imagePath: "Images/projectImages/react/E-commerce.png", liveDemo: "https://e-commerce-pink-three.vercel.app/", animation: "portfolioCartRow1" },
  { projectName: 'Prayer-Timings', imagePath: "Images/projectImages/react/Prayer-Timing.png", liveDemo: "https://prayer-time-mu.vercel.app/", animation: "portfolioCartRow2" },
  { projectName: 'Gaming-Review', imagePath: "Images/projectImages/javaScript/gaming review.png", liveDemo: "https://omarmohamedeltabakh.github.io/game-web-site/", animation: "portfolioCartRow2" },
  { projectName: 'Weather', imagePath: "Images/projectImages/javaScript/weather.png", liveDemo: "https://omarmohamedeltabakh.github.io/weather/", animation: "portfolioCartRow2" },
  { projectName: 'Restaurant', imagePath: "Images/projectImages/javaScript/resturant.png", liveDemo: "https://omarmohamedeltabakh.github.io/restaurant/", animation: "portfolioCartRow3" },
  { projectName: 'Devfolio', imagePath: "Images/projectImages/html and css/defolio.png", liveDemo: "https://omarmohamedeltabakh.github.io/DevFolio/", animation: "portfolioCartRow3" },
  { projectName: 'Kerri', imagePath: "Images/projectImages/html and css/Kerri.png", liveDemo: "https://omarmohamedeltabakh.github.io/kerri/", animation: "portfolioCartRow3" },
  { projectName: 'tailwind', imagePath: "Images/projectImages/html and css/tailwind.png", liveDemo: "https://omarmohamedeltabakh.github.io/TailwindFristProject/", animation: "portfolioCartRow4" },
  { projectName: 'Omar-Protfolio', imagePath: "Images/projectImages//react//omar-portfolio.png", liveDemo: "https://omar-portfolio-five.vercel.app/", animation: "portfolioCartRow4" },
];
let cartTemplate = ``

allProjects.map((project) => {
  cartTemplate += `
  <div class="col-lg-4 col-md-6 col-sm-12 ${project.animation} opacity-0 animate__animated">
        <div class="position-relative cursor-pointer  rounded-2 overflow-hidden">
            <img class="w-100" src="${project.imagePath}" alt="">
            <div
                class="layer position-absolute top-0 w-100 h-100  d-flex justify-content-center align-items-center text-center ">
                <div>
                    <p class="text-white fs-6 fw-semibold">${project.projectName}</p>

                    <a target="_blank" href="${project.liveDemo}"
                        class="lightGray cursor-pointer secondary-color  ">
                        <i class="fa-solid fa-link me-2"></i>Vist Website</a>
                </div>
            </div>
        </div>

    </div>
  `
})
document.getElementById("allProject").insertAdjacentHTML("afterbegin", cartTemplate);


// add HTML&CSS projects==================================>
let htmlCssProjects = [
  { projectName: 'Bezel', imagePath: "Images/projectImages/html and css/bezel.png", liveDemo: "https://omarmohamedeltabakh.github.io/bezelProject/" },
  { projectName: 'Defolio', imagePath: "Images/projectImages/html and css/defolio.png", liveDemo: "https://omarmohamedeltabakh.github.io/DevFolio/" },
  { projectName: 'Fokier', imagePath: "Images/projectImages/html and css/Fokir.png", liveDemo: "https://omarmohamedeltabakh.github.io/fiker/" },
  { projectName: 'Kerri', imagePath: "Images/projectImages/html and css/Kerri.png", liveDemo: "https://omarmohamedeltabakh.github.io/kerri/" },
  { projectName: 'Mealify', imagePath: "Images/projectImages/html and css/Mealify.png", liveDemo: "https://omarmohamedeltabakh.github.io/Mealify/" },
  { projectName: 'Personal Website', imagePath: "Images/projectImages/html and css/personal web site.png", liveDemo: "https://omarmohamedeltabakh.github.io/personal-web-site-1/" },
  { projectName: 'tailwind', imagePath: "Images/projectImages/html and css/tailwind.png", liveDemo: "https://omarmohamedeltabakh.github.io/TailwindFristProject/" },
];
let htmlAndCssTemplate = ``

htmlCssProjects.map((item) => {
  htmlAndCssTemplate += `
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="position-relative cursor-pointer  rounded-2 overflow-hidden">
              <img class="w-100" src="${item.imagePath}" alt="">
              <div
                class="layer position-absolute top-0 w-100 h-100  d-flex justify-content-center align-items-center text-center ">
                <div>
                  <p class="text-white fs-6 fw-semibold">${item.projectName}</p>

                  <a target="_blank" href="${item.liveDemo}"
                    class="lightGray cursor-pointer secondary-color  "><i
                      class="fa-solid fa-link  me-2"></i>Vist Website</a>
                </div>
              </div>
            </div>
          </div>
  `
})

const htmlAndCss = document.getElementById("htmlAndCss")
htmlAndCss.innerHTML = htmlAndCssTemplate;


// javaScript projecs=====================================>
const javaScriptProjects = [
  { projectName: 'Gaming review', imagePath: "Images/projectImages/javaScript/gaming review.png", liveDemo: "https://omarmohamedeltabakh.github.io/game-web-site/" },
  { projectName: 'Weather', imagePath: "Images/projectImages/javaScript/weather.png", liveDemo: "https://omarmohamedeltabakh.github.io/weather/" },
  { projectName: 'Smart Login System', imagePath: "Images/projectImages/javaScript/smartLoginSystem.png", liveDemo: "https://om563.github.io/smartLoginSystem/" },
  { projectName: 'Quiz app', imagePath: "Images/projectImages/javaScript/Quiz app.png", liveDemo: "https://omarmohamedeltabakh.github.io/quizes/" },
  { projectName: 'BookMarker', imagePath: "Images/projectImages/javaScript/BookMarker.png", liveDemo: "https://omarmohamedeltabakh.github.io/bookmark/" },
  { projectName: 'jQuery', imagePath: "Images/projectImages/javaScript/jQuery.png", liveDemo: "Images/projectImages/javaScript/jQuery.png" },


]

let javaScriptCartTemplate = ``

javaScriptProjects.map((javaScriptCart) => {

  javaScriptCartTemplate += `
      <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="position-relative cursor-pointer  rounded-2 overflow-hidden">
        <img class="w-100" src="${javaScriptCart.imagePath}" alt="">
        <div
          class="layer position-absolute top-0 w-100 h-100  d-flex justify-content-center align-items-center text-center ">
          <div>
            <p class="text-white fs-6 fw-semibold">${javaScriptCart.projectName}</p>

            <a target="_blank" href="${javaScriptCart.liveDemo}"
              class="lightGray cursor-pointer secondary-color  "><i
                class="fa-solid fa-link me-2"></i>Vist Website</a>
          </div>
        </div>
      </div>
    </div>
  `
})
document.getElementById("javaScript").innerHTML = javaScriptCartTemplate;




// react projects=======================================>
const reactProjects = [
  { projectName: 'Portfolio', imagePath: "Images/projectImages/react/portfolio.png", liveDemo: "https://portfolio-five-phi-33.vercel.app/" },
  { projectName: 'E-commerce', imagePath: "Images/projectImages/react/E-commerce.png", liveDemo: "https://e-commerce-pink-three.vercel.app/" },
  { projectName: 'Admin-Dashboard', imagePath: "Images/projectImages/react/admin dashboard.png", liveDemo: "https://admin-dashboard-4454b.web.app/Geography" },
  { projectName: 'Prayer-Times', imagePath: "Images/projectImages/react/Prayer-Timing.png", liveDemo: "https://prayer-time-mu.vercel.app/" },
  { projectName: 'Note', imagePath: "Images/projectImages/react/notes.png", liveDemo: "https://note-omars-projects-37ca5ff8.vercel.app/" },
  { projectName: 'start frameWork', imagePath: "Images/projectImages/react/start frameWork.png", liveDemo: "https://react-project1-routing.vercel.app/" },
  { projectName: 'omar-portfolio ', imagePath: "Images/projectImages//react//omar-portfolio.png", liveDemo: "https://omar-portfolio-five.vercel.app/" },

]
let reactCartTemplate = ``;
reactProjects.map((reactCart) => {

  reactCartTemplate += `
  <div class="col-lg-4 col-md-6 col-sm-12">
  <div class="position-relative cursor-pointer  rounded-2 overflow-hidden">
    <img class="w-100" src="${reactCart.imagePath}" alt="">
    <div
      class="layer position-absolute top-0 w-100 h-100  d-flex justify-content-center align-items-center text-center ">
      <div>
        <p class="text-white fs-6 fw-semibold">${reactCart.projectName}</p>

        <a target="_blank" href="${reactCart.liveDemo}"
          class="lightGray cursor-pointer secondary-color  "><i
            class="fa-solid fa-link me-2"></i>Vist Website</a>
      </div>
    </div>
  </div>

</div>
  
  `
})

document.getElementById("react").innerHTML = reactCartTemplate;





