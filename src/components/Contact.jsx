import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-me">
        <h2>Get In Touch</h2>
        <a href="mailto:adorkor.jeffery@gmail.com">
          <button type="button" className="btn btn-light btn-lg email">
            <FontAwesomeIcon icon={faEnvelope} /> email
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
