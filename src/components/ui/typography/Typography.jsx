import React from 'react';
import { textClasses } from '../../../styles/utils';

export const Heading1 = ({ children, className = '', ...props }) => {
  return (
    <h1 className={`${textClasses.heading1} ${className}`} {...props}>
      {children}
    </h1>
  );
};

export const Heading2 = ({ children, className = '', ...props }) => {
  return (
    <h2 className={`${textClasses.heading2} ${className}`} {...props}>
      {children}
    </h2>
  );
};

export const Heading3 = ({ children, className = '', ...props }) => {
  return (
    <h3 className={`${textClasses.heading3} ${className}`} {...props}>
      {children}
    </h3>
  );
};

export const Subtitle = ({ children, className = '', ...props }) => {
  return (
    <h4 className={`${textClasses.subtitle} ${className}`} {...props}>
      {children}
    </h4>
  );
};

export const Paragraph = ({ children, className = '', ...props }) => {
  return (
    <p className={`${textClasses.paragraph} ${className}`} {...props}>
      {children}
    </p>
  );
};

export const HighlightText = ({ children, className = '', ...props }) => {
  return (
    <span className={`${textClasses.highlight} ${className}`} {...props}>
      {children}
    </span>
  );
};

export const Quote = ({ children, className = '', ...props }) => {
  return (
    <blockquote className={`${textClasses.quote} ${className}`} {...props}>
      {children}
    </blockquote>
  );
};

export const SmallText = ({ children, className = '', ...props }) => {
  return (
    <small className={`${textClasses.small} ${className}`} {...props}>
      {children}
    </small>
  );
};
