import React, { useState } from 'react';
import './style.css';

export default function Popup() {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handlePopup = () => {
    if (message) {
      window.alert(message);
    } else {
      window.alert('Please enter a message.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a message"
        value={message}
        onChange={handleInputChange}
      />
      <button onClick={handlePopup}>Show Popup</button>
    </div>
  );
}
