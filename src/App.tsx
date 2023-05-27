// () See a success message with their email after successfully submitting the form
// () See form validation messages if:
//   () The field is left empty
//   () The email address is not formatted correctly
// () View the optimal layout for the interface depending on their device's screen size
// () See hover and focus states for all interactive elements on the page

import { useState } from "react"

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [validEmail, setValidEmail] = useState(false)
  
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
    return(
      <>
        
      </>
    )
  } else {
    return (
      <>
  
        {/* Stay updated! Join 60,000+ product managers receiving monthly updates on: Product discovery and building what matters Measuring to ensure updates are a success And much more! Email address email@company.com Subscribe to monthly newsletter Thanks for subscribing! A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription. Dismiss message */}
      </>
    )
  }

  }


export default App
