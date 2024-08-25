import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2e386736-039a-408b-a310-fab228112308");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact-container'>
        <Navbar />
        <div className='contact-page-wrapper'>
            <h1 className='primary-heading'> Have Questions In Mind? </h1>
            <h1 className='primary-heading'> Let Us Help You </h1>
            <form className='form-container' onSubmit={onSubmit}>
              <input type="text" placeholder='Your name' className='contact-form-container'/>
              <input type="tel" placeholder='Phone number' className='contact-form-container'/>
              <textarea type="message" placeholder='Message' className='contact-form-container'/>
              <button className='secondary-button'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
        <Footer />
    </div>
  )
}

export default Contact