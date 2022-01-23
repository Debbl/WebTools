import styled from 'styled-components';

const BaseItemWrapper = styled.div`
  display: flex;
  position: relative;
  textarea {
    width: 300px;
    height: 200px;
  }

  textarea::-webkit-scrollbar {
    width: 6px;
  }
  textarea::-webkit-scrollbar-thumb {
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    background-color: #c3c3c3;
  }
  textarea::-webkit-scrollbar-track {
    background-color: transparent;
  }
  textarea:focus {
    border-color: #1890ff;
  }

  .copy-btn {
    position: absolute;
    bottom: 16px;
    right: 13px;
  }

  .del-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 6px 8px 6px 6px;
    font-family: 'iconfont';
    user-select: none;
    cursor: pointer;
  }

  .paste-btn {
    position: absolute;
    bottom: -36px;
    left: 0;
  }
  .show-num {
    position: absolute;
    bottom: -16px;
    right: 3px;
  }
`;

export { BaseItemWrapper };
