const hammenu = document.getElementById("hammenu");
const mobileMenuBd = document.getElementsByClassName(
  "mobile__menu__backdrop"
)[0];
const options = [
  {
    txt: "features",
    data_hover: "features",
    a: "#",
    data_hover_url: "../assets/svg/features-hover.svg",
    src_url: "../assets/svg/features.svg"
  },
  {
    txt: "team",
    data_hover: "team",
    a: "#",
    data_hover_url: "../assets/svg/team-hover.svg",
    src_url: "../assets/svg/team.svg"
  },
  {
    txt: "login",
    data_hover: "login",
    a: "#",
    data_hover_url: "../assets/svg/login-hover.svg",
    src_url: "../assets/svg/login.svg"
  }
];

hammenu.addEventListener("click", e => {
  const mobileMenuBackdrop = document.createElement("div");
  const mobileMenu = document.createElement("div");
  const mobileMenuHeader = `
   <div class="flex flex__aic flex__jcfe" style="width:100%;height:80px;background-color:white; padding:10px 25px;">
    <img onClick="closeBackdrop()" src="../assets/svg/close-menu.svg" style="width:34px;cursor: pointer;" /> 
   </div>
  `;
  mobileMenuBackdrop.classList.add("mobile__menu__backdrop");
  mobileMenu.classList.add("mobileMenu");

  const navItem = document.createElement("ul");

  let liList = [];
  options.forEach(option => {
    liList.push(
      `<li onClick="closeBackdrop()" class="flex flex__aic">
        <img
          data-hover=${option.data_hover}
          data-hover-url=${option.data_hover_url}
          src=${option.src_url}
        />
        <a href=${option.a}>${option.txt}</a>
      </li>`
    );
  });

  liList = liList.toString().split(",").join("");
  navItem.insertAdjacentHTML("afterbegin", liList);

  mobileMenu.insertAdjacentHTML("afterbegin", mobileMenuHeader);
  mobileMenu.insertAdjacentElement("beforeend", navItem);

  // adding to body
  mobileMenuBackdrop.insertAdjacentElement("afterbegin", mobileMenu);
  mobileMenuBackdrop.addEventListener("click", closeBackdrop);

  mobileMenu.addEventListener("click", e => {
    e.stopImmediatePropagation();
  });
  document.body.classList.add("lock");
  document.body.insertAdjacentElement("beforeend", mobileMenuBackdrop);
});

function closeBackdrop(e) {
  document.body.classList.remove("lock");
  document.getElementsByClassName("mobile__menu__backdrop")[0].remove();
}

(function() {
  window.addEventListener("scroll", e => {
    let scrolled_top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    let to_scroll = (document.documentElement.scrollHeight || document.body.scrollHeight) - (document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight)
    let horizontal_width = (scrolled_top/to_scroll)*100;
    if(Math.round(horizontal_width) > 5){
      document.getElementsByClassName('header')[0].classList.add('active');
    }
    if(Math.round(horizontal_width) < 5){
      document.getElementsByClassName('header')[0].classList.remove('active');
    }
  });
})();
