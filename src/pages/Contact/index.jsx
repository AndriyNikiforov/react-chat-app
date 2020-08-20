import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Cart from '../../components/Cart';
import ContactForm from '../../forms/Contact';

const Contact = () => (
  <div className="container mx-auto">
    <Header />
    <Cart data="" />
    <section className="flex justify-center pt-20 xs:pt-5">
      <ContactForm />
    </section>
    <br />
    <Footer />
  </div>
);

export default Contact;
