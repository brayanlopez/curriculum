import "boxicons";
import "./ResponsiveCVTemplate.css";

const ResponsiveCVTemplate = () => {
  const NavItems = [
    { name: "Home", icon: "home" },
    { name: "Profile", icon: "user" },
    { name: "Education", icon: "book" },
    { name: "Skills", icon: "receipt" },
    { name: "Experience", icon: "briefcase-alt" },
    { name: "Certificates", icon: "award" },
    { name: "References", icon: "link-external" },
  ];

  // TODO: change this logic to show or avoid showing menu
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
      });
    }
  };

  showMenu("nav-toggle", "nav-menu");

  return (
    <div>
      {/* <!--========== HEADER ==========--> */}
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href="#" className="nav__logo">
            Smith
          </a>
          <div className="nav__menu" id="nav__menu">
            <ul className="nav__list">
              {NavItems.map((item, index) => (
                <li className="nav_item" key={index}>
                  <a href="#home" className="nav__link">
                    <box-icon className="nav__icon" name={item.icon} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__toggle" id="nav__toggle">
            <box-icon name="grid-alt" />
          </div>
        </nav>
      </header>
      <main className="l-main bd-container">
        {/* <!-- All elements within this div, is generated in PDF --> */}
        <div className="resume" id="area-cv">
          <div className="resume__left">
            {/* <!--========== HOME ==========--> */}
            <section className="home" id="home">
              {/* <!-- Theme change button --> */}

              {/* <!-- Button to generate and download the pdf. Available for desktop. --> */}
            </section>

            {/* <!--========== SOCIAL ==========--> */}
            <section className="social section"></section>

            {/* <!--========== PROFILE ==========--> */}
            <section className="profile section" id="profile"></section>

            {/* <!--========== EDUCATION ==========--> */}
            <section className="education section" id="education"></section>

            {/* <!--========== SKILLS  ==========--> */}
            <section className="skills section" id="skills"></section>
          </div>

          <div className="resume__right">
            {/* <!--========== EXPERIENCE ==========--> */}
            <section className="experience section" id="experience"></section>

            {/* <!--========== CERTIFICATES ==========--> */}
            <section
              className="certificate section"
              id="certificates"
            ></section>

            {/* <!--========== REFERENCES ==========--> */}
            <section className="references section" id="references"></section>

            {/* <!--========== LANGUAGES ==========--> */}
            <section className="languages section"></section>

            {/* <!--========== INTERESTS ==========--> */}
            <section className="interests section"></section>
          </div>
        </div>
      </main>
      {/* <!--========== SCROLL TOP ==========--> */}
    </div>
  );
};

export default ResponsiveCVTemplate;
