function Navbar() {
  return (
    <>
      <nav className="navbar">
        {/* Social media icons */}

        <a
          href="https://github.com/kwesi-selorm"
          target="_blank"
          rel="noreferrer"
        >
          <i className="navbar-brand fab fa-github"></i>
        </a>
        <a href="https://twitter.com/Eljaks" target="_blank" rel="noreferrer">
          <i className="navbar-brand fab fa-twitter"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jeffery-adorkor?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPaA1ZWkqTOa%2FdHtN8WdxnA%3D%3D"
          target="_blank"
          rel="noreferrer"
        >
          <i className="navbar-brand fab fa-linkedin"></i>
        </a>
      </nav>
    </>
  );
}

export default Navbar;
