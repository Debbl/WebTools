import styled from 'styled-components';

const BaseToolWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .base-title {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .base-container {
    display: flex;
  }
`;

export {BaseToolWrapper};
