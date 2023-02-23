import ModalImage from 'react-modal-image';
import styled from 'styled-components';

const StyledModalImage = styled(ModalImage)`
  position: relative;
  width: 100%;
  height: 12rem;
  padding: 0rem;
  display: flex;
  border-radius: 1rem;
  border: 4px solid ${({ theme }) => theme.border};
  transition: all 0.5s;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export default StyledModalImage;
