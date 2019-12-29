import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${(props => props.background || '#002b5c')};
  color: ${(props => props.color || 'white')};
  font-size: ${(props => props.font || '15px')};
  height: ${(props => props.height || '45px')};
  width: ${(props => props.width || '180px')};
  cursor: pointer;
  &:hover {
    background-color: ${(props => props.hover || '#17477e')};
}
`;