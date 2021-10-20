import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <header className="contact-header">
        <h2>İletişime Geç</h2>
      </header>
      <div className="contact-container">
        <div className="contact-info">
          <div>
            <p className="info-name">Onur Aylanç</p>
            <p className="info-city">İstanbul</p>
            <a href="mailto: aylanc.onur@gmail.com" className="info-mail">
              aylanc.onur@gmail.com
            </a>
          </div>
          <a
            className="border-b-2 mt-3 inline-block border-gray-500"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
          <div className="info-container">
            <div className="info-link-container">
              <a
                href="https://www.linkedin.com/in/onur-aylan%C3%A7-58972517b/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="info-img">
                  <img
                    src="./images/icons/linkedin.svg"
                    alt=""
                    width="24px"
                    height="24px"
                  />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className="info-link-container">
              <a
                href="https://github.com/aylancOnur"
                target="_blank"
                rel="noreferrer"
              >
                <span className="info-img">
                  <img
                    src="./images/icons/github.svg"
                    alt=""
                    width="24px"
                    height="24px"
                  />
                  GitHub
                </span>
              </a>
            </div>
            <a
              href="https://codesandbox.io/dashboard/drafts?workspace=95ace1ca-5eba-40ce-b6a2-b7b53986b652"
              target="_blank"
              rel="noreferrer"
            >
              <span className="info-img">
                <img
                  src="./images/icons/codepen.svg"
                  alt=""
                  width="24px"
                  height="24px"
                />
                CodePen
              </span>
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="name">İsim</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-input"
              required
            ></input>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-input"
              required
            ></input>
            <label htmlFor="message">Mesaj</label>
            <textarea
              name="message"
              id="message"
              cols="25"
              rows="5"
              className="form-input"
              required
            ></textarea>
            <button type="submit" className="form-button">
              Mesajı Gönder
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
