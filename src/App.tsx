import { useState } from "react";
import mobileCaption from "../src/assets/images/illustration-sign-up-mobile.svg";
import desktopCaption from "../src/assets/images/illustration-sign-up-desktop.svg"
import trueIcon from "../src/assets/images/icon-success.svg";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [notBlankEmail, setNotBlankEmail] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {

    let mailValidation = /^(([^<>()\[\]\\.,;:\s@"']+(\.[^<>()\[\]\\.,;:\s@"']+)*)|(["']+.+["']+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const inputEmail = e.target.value;
    setEmail(inputEmail);

    if (inputEmail.match(mailValidation)) {
      setValidEmail(true);
      setNotBlankEmail(true);
      handleError();
    } else {
      setValidEmail(false);
      handleError();
    }

  }
  
  const handleBlank = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setNotBlankEmail(false);
      handleError();
    } else {
      setNotBlankEmail(true);
      handleError();
    }
  }
  
  const handleError = () => {
    if (validEmail && notBlankEmail) {
      setError(false);
    } else {
      setError(true);
    }
  } 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(validEmail);
    // console.log(notBlankEmail);
    // console.log(error);

    if (!error && notBlankEmail) {
      setSubmitted(true);
      setNotBlankEmail(false);
      setValidEmail(false);
    }
  }

  const handleBack = () => {
    setSubmitted(false);
    setEmail("");
  }

  if (!submitted) {
    return (
      <>
        <main>
          <img src={mobileCaption} className="form__image" alt="" />
          <img src={desktopCaption} className="form__image--desktop" alt="" />
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <h1 className="form__title">Stay updated!</h1>
                <p className="form__subtitle">
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
                <ul className="form__list">
                  <li className="form__list__element">
                    <img className="form__list__image" src={trueIcon} alt="" />
                    <span>Product discovery and building what matters</span>
                  </li>
                  <li className="form__list__element">
                    <img className="form__list__image" src={trueIcon} alt="" />
                    <span>Measuring to ensure updates are a success</span>
                  </li>
                  <li className="form__list__element">
                    <img className="form__list__image" src={trueIcon} alt="" />
                    <span>And much more!</span>
                  </li>
                </ul>
              </div>
              <div className="form__section">
                <div className="form__validation">
                  <span className="form__email">Email adress</span>
                  <span className={error ? "form__email--error" : "form__email--noterror"}>Valid email required</span>

                </div>
              <input
                className={error ? "form__input form__input--error" : "form__input"}
                type="text"
                id="email"
                placeholder="email@company.com"
                onChange={handleInput}
                onBlur={handleBlank}
              />
              <button className="button form__button" type="submit">
                Subscribe to monthly newsletter
              </button>
              </div>
            </form>
        </main>
      </>
    );
  } else {
    return (
      <>
        <main>
          <section className="submited">
            <img className="submited__image" src={trueIcon} alt="" />
            <h1 className="submited__title">Thanks for subscribing!</h1>
            <p className="submited__subtitle">
              A confirmation email has been sent to{" "}
              <span className="submited__email">{email}</span>. Please open it and click the
              button inside to confirm your subscription.
            </p>
          <button className="button submited__button" onClick={handleBack}>Dismiss message</button>
          </section>
        </main>
      </>
    );
  }
}

export default App;
