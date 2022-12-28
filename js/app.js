///////////////////////////////////////////////////////////////////////////////////////////
/// Define Global Variables ///

let sectionNumber = 5;
let navList = document.querySelector(`.nav-list`);
let navbar = document.querySelector(`.nav-bar`);
let sticky = navbar.offsetTop;
let sections = document.querySelectorAll(`.main-section`);

///////////////////////////////////////////////////////////////////////////////////////////
/// function Declarations ///

// sticky Nav
const stickyNav = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// adding new section
const addNewSection = () => {
  document
    .getElementById("nav")
    .insertAdjacentHTML(
      `beforeend`,
      ` <li class="nav-item"><a class="nav-link" href="#${sectionNumber}" data-section-id="${sectionNumber}" >Section ${sectionNumber}</a></li>`
    );
  document.querySelector(`.sections-container`).insertAdjacentHTML(
    `beforeend`,
    ` <section class="main-section" id="${sectionNumber}" data-nav="${sectionNumber}">
    <div class="content" >   
  <h2>Section ${sectionNumber}</h2>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab harum
    porro officia nam, voluptatibus iusto quaerat, ipsa odit quae quidem
    similique? Illo ipsam quod doloribus autem voluptate incidunt
    recusandae laudantium.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab harum
    porro officia nam, voluptatibus iusto quaerat, ipsa odit quae quidem
    similique? Illo ipsam quod doloribus autem voluptate incidunt
    recusandae laudantium.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab harum
    porro officia nam, voluptatibus iusto quaerat, ipsa odit quae quidem
    similique? Illo ipsam quod doloribus autem voluptate incidunt
    recusandae laudantium.
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum
    alias provident quae magnam nisi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum
    alias provident quae magnam nisi.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores illum
    alias provident quae magnam nisi.
  </p>
  </div>
</section>`
  );
  sectionNumber += 1;
};

// Go to Section
navList.addEventListener(`click`, (e) => {
  e.preventDefault();
  document
    .getElementById(e.target.dataset.sectionId)
    .scrollIntoView({ behavior: "smooth" });
  removeActiveClass();
  addActiveClass(e.target.dataset.sectionId);
});

//Add & remove Active class
const addActiveClass = (id) => {
  document.querySelector(`[href="#${id}"]`).classList.add(`link-active`);
  document.getElementById(`${id}`).classList.add(`section-active`);
};

removeActiveClass = () => {
  document.querySelector(".link-active")?.classList.remove("link-active");
  document.querySelector(`.section-active`)?.classList.remove(`section-active`);
};

//add active class to the section in the view port

// Go to top
const goToTop = () => {
  window.scrollTo({ top: 0 });
  removeActiveClass();
};

///////////////////////////////////////
///////////////////////////////
/////////////////////////

document.querySelector(".add-btn").addEventListener(`click`, addNewSection);
document.getElementById(`top`).addEventListener(`click`, goToTop);
window.onscroll = stickyNav();
