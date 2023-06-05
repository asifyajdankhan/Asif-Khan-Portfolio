import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import resumePDF from '../assets/images/Resume.pdf.pdf';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? 'var(--gray-1' : 'black')};
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;

export default function Button({
  btnLink = 'test',
  btnText = 'test',
  outline = false,
}) {
  const handleDownload = () => {
    if (btnText === 'Download CV') {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'resumePDF';
      link.click();
    }
  };
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink} onClick={handleDownload}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
