// () See a success message with their email after successfully submitting the form
// () See form validation messages if:
//   () The field is left empty
//   () The email address is not formatted correctly
// () View the optimal layout for the interface depending on their device's screen size
// () See hover and focus states for all interactive elements on the page

import { useState } from "react";
import mobileCaption from "../src/assets/images/illustration-sign-up-mobile.svg";
import trueIcon from "../src/assets/images/icon-success.svg";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  // const handleSubmitted = () => {
  //   if (validEmail) {
  //     setSubmitted(true);
  //   } else {
  //     setSubmitted(false);
  //   }
  // };

  // const handleEmail = (email) => {

  // }

  if (!submitted) {
    return (
      <>
        <main>
          <img src={mobileCaption} alt="" />
          <section>
            <div>
              <h1>Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <ul>
                <li>
                  <img src={trueIcon} alt="" />
                  Product discovery and building what matters
                </li>
                <li>
                  <img src={trueIcon} alt="" />
                  Measuring to ensure updates are a success
                </li>
                <li>
                  <img src={trueIcon} alt="" />
                  And much more!
                </li>
              </ul>
            </div>
            <form>
              <span>Email adress</span>
              <input type="text" id="email" placeholder="email@company.com" />
              <button type="submit">Subscribe to monthly newsletter</button>
            </form>
          </section>
        </main>
      </>
    );
  } else {
    return (
      <>
        <main>
          <section>
            <img src={trueIcon} alt="" />
            <h1>Thanks for subscribing!</h1>
            <p>
              A confirmation email has been sent to{" "}
              <span>ash@loremcompany.com</span>. Please open it and click the
              button inside to confirm your subscription.
            </p>
          </section>
          <button>Dismiss message</button>
        </main>
      </>
    );
  }
}

export default App;
