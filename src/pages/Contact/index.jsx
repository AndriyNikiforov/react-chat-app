import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import ContactForm from '../../forms/Contact';

const Contact = () => (
  <div className="container mx-auto">
    <Header />
    <Cart data="" />
    <section className="flex justify-center mb-4 pt-20 xs:pt-5">
      <ContactForm />
    </section>
    <Footer />
  </div>
);

export default Contact;
