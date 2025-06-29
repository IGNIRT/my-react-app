import React, { useEffect, useRef, useCallback } from 'react';
import type { FormEvent } from 'react';
import '../../assets/styles/form.css'; // Добавьте эту строку

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Обработчик отправки формы
  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;
    
    const formData = new FormData(formRef.current);
    const formObject: Record<string, string> = {};
    
    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });
    
    console.log('Form data:', formObject);
    onClose();
  }, [onClose]);

  // Обработка Tab для навигации по полям формы
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      
      const nextIndex = (index + 1) % inputRefs.current.length;
      const nextInput = inputRefs.current[nextIndex];
      
      if (nextInput) {
        nextInput.focus();
      }
    }
  }, []);

  // Управление скроллом body при открытии/закрытии модалки
  useEffect(() => {
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    
    // Фокус на первом поле при открытии
    if (inputRefs.current[0]) {
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
    
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = '';
    };
  }, []);

  // Закрытие по клику вне модалки
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="form" 
      id="formModal"
      onClick={handleBackdropClick}
    >
      <div className="contact-form-container">
        <div className="form-menu">
          <h2 className="form__name">Register</h2>
          <button 
            className="exit-button" 
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        
        <form 
          id="contactForm" 
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="form-group">
            <label htmlFor="surname">Surname</label>
            <input 
              type="text" 
              id="surname" 
              name="surname" 
              required 
              ref={el => {
                if (el) inputRefs.current[0] = el;
              }}
              onKeyDown={e => handleKeyDown(e, 0)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              ref={el => {
                if (el) inputRefs.current[1] = el;
              }}
              onKeyDown={e => handleKeyDown(e, 1)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              ref={el => {
                if (el) inputRefs.current[2] = el;
              }}
              onKeyDown={e => handleKeyDown(e, 2)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              autoComplete="on" 
              required 
              ref={el => {
                if (el) inputRefs.current[3] = el;
              }}
              onKeyDown={e => handleKeyDown(e, 3)}
            />
          </div>
          
          <div className="form-buttons">
            <button type="submit" className="submit-button">Submit</button>
            <button 
              type="button" 
              className="cancel-button" 
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;