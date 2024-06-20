import "boxicons";
import "./ResponsiveCVTemplate.css";
// @ts-expect-error comment
import { SocialNetworksIcons } from "../../common/constants.js";
import data from "../../../data/cv_2.json";

const ResponsiveCVTemplate = () => {
  const { basics, work } = data;
  const NavItems = [
    { name: "Home", icon: "home" },
    { name: "Profile", icon: "user" },
    { name: "Education", icon: "book" },
    { name: "Skills", icon: "receipt" },
    { name: "Experience", icon: "briefcase-alt" },
    { name: "Certificates", icon: "award" },
    { name: "References", icon: "link-external" },
  ];

  // @ts-expect-error comment
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
    <div className="scale-cv">
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
                    {/* @ts-expect-error comment  */}
                    <box-icon className="nav__icon" name={item.icon} />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__toggle" id="nav__toggle">
            {/* @ts-expect-error comment  */}
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
              <div className="home__container section bd-grid">
                <div className="home__data bd-grid">
                  <img
                    src="../../assets/react.svg"
                    alt=""
                    className="home__img"
                  />
                  <h1 className="home__title">{basics.name}</h1>
                  <h3 className="home__profession">{basics.label}</h3>
                </div>
              </div>
              {/* <!-- Button to generate and download the pdf. Available for desktop. --> */}
              <div>
                <a href="#" className="home__button-movil" download="">
                  Download
                </a>
              </div>
              <div className="home__address bd-grid">
                {/* TODO: add contact information */}
                <span className="home__information">
                  {/* @ts-expect-error comment  */}
                  <box-icon className="home__icon" name="map" /> {basics.email}
                </span>
              </div>
              {/* @ts-expect-error comment  */}
              <box-icon
                className="change-theme"
                name="moon"
                id="theme-button"
              />
            </section>

            {/* <!--========== SOCIAL ==========--> */}
            <section className="social section">
              <h2 className="section-title">SOCIAL</h2>
              <div className="social_container bd-grid">
                {basics.profiles.map((social_network) => (
                  <a
                    href={social_network.url}
                    target="_blank"
                    className="social_link"
                    key={social_network.network}
                  >
                    {/* @ts-expect-error comment  */}
                    <box-icon
                      className="bx"
                      name={
                        SocialNetworksIcons.find(
                          (item) => item.name === social_network.network
                        ).icon
                      }
                      type="logo"
                    />{" "}
                    {social_network.username}
                  </a>
                ))}
              </div>
            </section>

            {/* <!--========== PROFILE ==========--> */}
            <section className="profile section" id="profile">
              <h2 className="section-title">Profile</h2>
              <p className="profile_description"> {basics.summary}</p>
            </section>

            {/* <!--========== EDUCATION ==========--> */}
            <section className="education section" id="education">
              <h2 className="section-title">Education</h2>

              <div className="education_container bd-grid">
                {data.education.map((education) => (
                  <div className="education_content">
                    <span className="education_rounder"></span>
                    <span className="education_line"></span>

                    <div className="education_data bd-grid">
                      <h3 className="education_title">{education.area}</h3>
                      <span className="education_studies">
                        {education.institution}
                      </span>
                      <span className="education_year">
                        {education.startDate} - {education.endDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* <!--========== SKILLS  ==========--> */}
            <section className="skills section" id="skills">
              <h2 className="section-title">Skills</h2>
              <div className="skills_content bd-grid">
                <ul className="skills_data">
                  <li className="skills_name">
                    <span className="skills_circle"></span>Html
                  </li>
                </ul>
              </div>
            </section>
          </div>

          <div className="resume__right">
            {/* <!--========== EXPERIENCE ==========--> */}
            <section className="experience section" id="experience">
              <h2 className="section-title">Experience</h2>
              <div className="experience_container bd-grid">
                {/* TODO: complete this part */}
                {work.map((work) => (
                  <div className="experience_content">
                    <div className="experience_time">
                      <span className="experience_rounder"></span>
                      <span className="experience_line"></span>
                    </div>
                    <div className="experience_data bd-grid">
                      <h3 className="experience_title">{work.name}</h3>
                      <span className="experience_company">
                        From {work.startDate} to {work.endDate || "currently"} |{" "}
                        {work.position}
                      </span>
                      <p className="experience_description">{work.summary}</p>
                      <ul>
                        {work.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* <!--========== CERTIFICATES ==========--> */}
            <section className="certificate section" id="certificates">
              <h2 className="section-title">Certificates</h2>
              <div className="certificate_container bd-grid">
                <div className="certificate_content">
                  <h3 className="certificate_title">
                    Certified for be amazing{" "}
                  </h3>
                  <p className="certificate_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Esse amet accusamus non, nobis quam fuga ipsum quas fugit
                    corrupti earum consequuntur eum temporibus minima odio a
                    nam, voluptatem pariatur quibusdam.
                  </p>
                </div>
              </div>
            </section>
            {/* <!--========== REFERENCES ==========--> */}
            <section className="references section" id="references">
              <h2 className="section_title">References</h2>

              <div className="references_container bd-grid">
                <div className="references_content bd-grid">
                  <span className="references_subtitle">Sr. Director</span>
                  <h3 className="references_title">Mr. Clay Doe</h3>
                  <ul className="references_contact">
                    <li>Phone: 999-777-666</li>
                    <li>Email: user@email.com</li>
                  </ul>
                </div>
              </div>
            </section>
            {/* <!--========== LANGUAGES ==========--> */}
            <section className="languages section">
              <h2 className="section-title">Languages</h2>
              <div className="languages __ container">
                <ul className="languages __ content bd-grid">
                  {data.languages.map((language) => (
                    <li className="languages __ name">
                      <span className="languages __ circle"></span>{" "}
                      {language.language}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            {/* <!--========== INTERESTS ==========--> */}
            <section className="interests section">
              <h2 className="section-title">Interests</h2>

              <div className="interests_container bd-grid">
                <div className="interests_content">
                  <i className="bx bx-headphone"></i>
                  <span className="interests_name">Music</span>
                </div>
                <div className="interests_content">
                  <i className="bx bx-headphone"></i>
                  <span className="interests_name">Music</span>
                </div>
              </div>
            </section>{" "}
          </div>
        </div>
      </main>
      {/* <!--========== SCROLL TOP ==========--> */}
      <a href="#" className="scrolltop" id="scroll-top">
        {/* @ts-expect-error comment  */}
        <box-icon className="bx bx-up-arrow-alt scrolltop__icon" name="up" />
      </a>
    </div>
  );
};

export default ResponsiveCVTemplate;
