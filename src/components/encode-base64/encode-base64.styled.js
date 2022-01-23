import styled from 'styled-components';

const EncodeBase64Wrapper = styled.div`
  display: flex;
  height: 100vh;
  min-width: 300px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .base64-title {
    font-size: 30px;
    margin-bottom: 30px;
  }

  .base64-items {
    display: flex;
    .base64-right {
      margin-left: 20px;
    }
    .base64-item {
      position: relative;

      .copy-btn {
        position: absolute;
        bottom: 16px;
        right: 13px;
        padding: 0 8px;
      }

      .paste-btn {
        position: absolute;
      }
      .paste-btn-left {
        bottom: -30px;
        left: 0;
      }

      .paste-btn-right {
        bottom: -30px;
        left: 0;
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

      .del-icon:hover {
        color: #004080;
      }

      textarea {
        width: 300px;
        height: 200px;
        padding: 10px 30px 0 10px;
        resize: none;
        outline: none;
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

      .show-num {
        position: absolute;
        bottom: -16px;
        right: 3px;
        font-size: 16px;
      }
    }
  }

  // 手机端适配
  @media screen and (max-width: 630px) {
    & {
      .base64-title {
        margin-bottom: 10px;
      }
      .base64-items {
        flex-direction: column;

        .base64-right {
          margin-left: 0;
          margin-top: 36px;
        }
      }
    }
  }
`;

export { EncodeBase64Wrapper };
