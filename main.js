
const navItems = document.querySelectorAll(".system_study .desktop .nav-link");
const sections = document.querySelectorAll(".system_study .desktop .section");

window.addEventListener(  "scroll",  function () {

    sections.forEach((section) => {
      
      const top = section.offsetTop -250;
      const html = document.documentElement;
      const height = section.offsetHeight;

      navItems.forEach((navItem) => {
        const hrefNav = navItem.href.match(/#[a-zA-Z]+/)[0];
        
        const idSection = "#" + section.id;
        if (html.scrollTop >= top && top + height >= html.scrollTop) {
          hrefNav === idSection
            ? navItem.parentElement.classList.add("active")
            : navItem.parentElement.classList.remove("active");
        } else {
          hrefNav === idSection &&
            navItem.parentElement.classList.remove("active");
        }
      });
    });
  },
  { passive: true }
);
