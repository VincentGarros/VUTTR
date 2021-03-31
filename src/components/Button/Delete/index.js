import React from 'react';
import * as Styled from './styles';

function ButtonDelete({ ...options }) {
  return (

    <Styled.Button {...options}>
      {'Remove'}
      <i className="fas fa-times" />

    </Styled.Button>
  );
}

export default ButtonDelete;