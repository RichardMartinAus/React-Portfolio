import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMessage('Please leave your name!');
      return;
    }
    if (!email) {
      setErrorMessage('Please input an email address!');
      return;
    }
    if (!message) {
      setErrorMessage('Please leave a message!');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div class="contact-page">
      <h1>Contact</h1>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          rows={10}
          placeholder="Message..."
        />
        <button type="button" class="submit-btn" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div class="error">
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <div class="email-copy">
        <br></br>
        <p>Feel free to email me at: </p>
        <a
          href="mailto:richard.martin001@gmail.com"
          style={{
            color: '#4a9696',
            marginRight: '15px',
            fontSize: '18px',
          }}
        >
          richard.martin001@gmail.com
        </a>
        <p>for any further enquiries!</p>
      </div>
    </div>
  );
}
