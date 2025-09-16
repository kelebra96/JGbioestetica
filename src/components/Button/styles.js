import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${props => {
    switch (props.size) {
      case 'small': return '8px 16px';
      case 'large': return '16px 32px';
      default: return '12px 24px';
    }
  }};

  font-size: ${props => {
    switch (props.size) {
      case 'small': return '14px';
      case 'large': return '18px';
      default: return '16px';
    }
  }};

  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  background-color: ${props => {
    switch (props.variant) {
      case 'secondary': return '#E2B850';
      case 'outline': return 'transparent';
      default: return '#556B2F';
    }
  }};

  color: ${props => {
    switch (props.variant) {
      case 'outline': return '#556B2F';
      default: return '#F5F5DC';
    }
  }};

  border: ${props => props.variant === 'outline' ? '2px solid #556B2F' : 'none'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(85, 107, 47, 0.3);

    background-color: ${props => {
      switch (props.variant) {
        case 'secondary': return '#d4a73f';
        case 'outline': return '#556B2F';
        default: return '#4a5f28';
      }
    }};

    color: ${props => props.variant === 'outline' ? '#F5F5DC' : props.color};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  @media (max-width: 768px) {
    padding: ${props => {
      switch (props.size) {
        case 'small': return '6px 12px';
        case 'large': return '12px 24px';
        default: return '10px 20px';
      }
    }};

    font-size: ${props => {
      switch (props.size) {
        case 'small': return '12px';
        case 'large': return '16px';
        default: return '14px';
      }
    }};
  }
`;