import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  background-color: ${colors.redRock};
  text-color: white;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  padding: 7px;
  width: 150px;
  margin: 10px;

  :hover {
    background-color: ${colors.darkerRed};
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin: 30px 0;
  }
`;
