import ModalImage from 'react-modal-image';
import styled from 'styled-components';

const StyledModalImage = styled(ModalImage)`
  position: relative;
  padding: 0rem;
  display: flex;
  border-radius: 1rem;
  border: 4px solid ${({ theme }) => theme.border};
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    border-color: ${({ theme }) => theme.primary};
  }
`;

export default StyledModalImage;
