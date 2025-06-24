import React from 'react';
import type { FormEvent } from 'react'; // Явный импорт типа

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Логика обработки формы
    onClose();
  };

  return (
    <div className="form" id="formModal">
      <div className="contact-form-container">
        <div className="form-menu">
          <h2 className="form__name">Register</h2>
          <button className="exit-button" onClick={onClose}>✕</button>
        </div>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input type="text" id="surname" name="surname" required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" autoComplete="on" required />
          </div>
          <div className="form-buttons">
            <button type="submit" className="submit-button">Submit</button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;