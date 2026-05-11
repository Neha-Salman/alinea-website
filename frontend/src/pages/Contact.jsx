import React from 'react';
import { Button } from '../components/Button';

export const Contact = () => {
  return (
    <div className="contact-page container animate-fade-in" style={{ padding: '4rem 0' }}>
      <h1 className="heading-1 text-center">Get in Touch</h1>
      <p className="text-center text-muted mb-8">We'd love to hear from you. Please fill out the form below.</p>
      
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
          <div className="form-group mb-4">
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
            <input type="text" className="w-full" required />
          </div>
          <div className="form-group mb-4">
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input type="email" className="w-full" required />
          </div>
          <div className="form-group mb-4">
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
            <textarea rows="5" className="w-full" required></textarea>
          </div>
          <Button size="lg" className="w-full" type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
};
export default Contact;