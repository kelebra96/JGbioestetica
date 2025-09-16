import React from 'react';
import {
  CardContainer,
  QuoteIcon,
  QuoteText,
  AuthorInfo,
  AuthorName,
  AuthorRole
} from './TestimonialCard.styles';

const TestimonialCard = ({ testimonial }) => {
  const { quote, author, role } = testimonial;

  return (
    <CardContainer>
      <QuoteIcon>&ldquo;</QuoteIcon>
      <QuoteText>{quote}</QuoteText>
      <AuthorInfo>
        <AuthorName>{author}</AuthorName>
        <AuthorRole>{role}</AuthorRole>
      </AuthorInfo>
    </CardContainer>
  );
};

export default TestimonialCard;