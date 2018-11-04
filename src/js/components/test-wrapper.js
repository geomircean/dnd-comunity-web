import React from 'react';
//import styled from 'styled-components';

const Wrap = (props) => {
  const { className, children } = props;
  return (
    <div className={className}>
      {children}
    </div>
  );
};

//export const StyledWrap = styled.div`
//  display: flex;
//  flex-direction: column;
//  padding: 4em;
//	background: papayawhip;
//`;

//export StyledWrap;
export default Wrap;