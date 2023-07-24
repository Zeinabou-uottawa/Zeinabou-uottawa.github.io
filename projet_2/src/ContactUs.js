import React from 'react';
import ContactSection from './ContactSection';
import Map from './Maps';
import styled from 'styled-components';



const ContactSectionStyle = styled.div`
  /* Existing styles */
  padding: 10rem 0;
  background-color:  #e8e7dc;
  .contactSection__wrapper {
    /* Existing styles */
    background-color:  #e8e7dc;
  }
  /* Add the background color property here */
  background-color:  #e8e7dc;
  /* Remaining styles */
`;
export default function Contact() {
  return (
    <>
      <ContactSection />
      <Map />
    </>
  );
}