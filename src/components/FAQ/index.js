import React, { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import "../../components/FAQ/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQ = (props) => {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  return (
    <div className="Faq-container">
        <div className= "Faq-text" id="FAQ">
            <h2>Frequently Asked Question </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className= "Faq-toggle">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1">
          Apa saja syarat yang dibutuhkan?
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>This is the first item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
          Berapa hari minimal sewa mobil lepas kunci?
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>This is the second item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
          Berapa hari sebelumnya sabaiknya booking sewa mobil?
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>This is the third item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">
          Apakah Ada biaya antar-jemput?
          </AccordionHeader>
          <AccordionBody accordionId="4">
            <strong>This is the third item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">
          Bagaimana jika terjadi kecelakaan
          </AccordionHeader>
          <AccordionBody accordionId="5">
            <strong>This is the third item's accordion body.</strong>
            You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
    </div>
  );
};

export default FAQ;