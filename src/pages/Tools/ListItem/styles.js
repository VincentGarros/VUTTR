import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Container = styled.div`
  background-color: ${colors.blackRock};
  border: 1px solid ${colors.purpleRock};
  margin: 25px 0;
  padding: 20px;
  border-radius: 4px;
  position: relative;
`;

export const Title = styled.span`
  color: ${colors.White};
  font-size: 25px;
  font-weight: bold;
`;

export const TitleLink = styled.a`
  font-color: ${colors.White};
  font-size: 25px;
  font-weight: bold;
`;

export const Description = styled.p`
  margin: 10px 0;
  color: ${colors.White};
`;

export const Tags = styled.ul`
  display: flex;
  flex-flow: wrap;
  list-style: none;
  margin-top: 20px;

  li {
    margin-right: 10px;
    font-weight: bold;
  }
`;
