import styled from 'styled-components'

const EncodeBase64Wrapper = styled.div`
  display: flex;
  height: 100vh;
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

      button {
        position: absolute;
        bottom: 10px;
        right: 10px;
        padding: 0 4px;
      }

      .del-icon {
        position: absolute;
        top: 0;
        right: 0;
        padding: 6px;
        font-family: "iconfont";
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
`

export {
  EncodeBase64Wrapper
}