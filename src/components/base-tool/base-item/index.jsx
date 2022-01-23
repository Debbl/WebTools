import React from 'react';
import { Button, message } from 'antd';
import { BaseItemWrapper } from './base-item.styled';

function BaseItem({ ownStr, setOwnStr, setOtherStr, baseFunc, tipStr }) {
  return (
    <BaseItemWrapper>
      {ownStr.length ? (
        <>
          {/* 复制按钮 */}
          <Button
            type="primary"
            className="copy-btn"
            onClick={() => {
              navigator.clipboard
                .writeText(ownStr)
                .then((_) => {
                  message.success('复制成功!', 0.3);
                })
                .catch(() => {
                  message.error('失败，请检查浏览器设置!', 0.3);
                });
            }}
          >
            复制
          </Button>
          {/* 清除图标 */}
          <i
            className="del-icon"
            onClick={() => {
              setOwnStr('');
              setOtherStr('');
            }}
          >
            &#xe674;
          </i>
        </>
      ) : null}
      {/* 粘贴按钮 */}
      <Button
        type="primary"
        className="paste-btn"
        onClick={() => {
          navigator.clipboard
            .readText()
            .then((clipText) => {
              message.success('已粘贴剪切板内容!', 0.3);
              const tpmStr = clipText;
              setOwnStr(tpmStr);
              setOtherStr(baseFunc(tpmStr));
            })
            .catch(() => {
              message.error('失败，请检查浏览器设置!', 0.3);
            });
        }}
      >
        粘贴
      </Button>
      {/* 文本输入 */}
      <textarea
        value={ownStr}
        placeholder={tipStr}
        onChange={(e) => {
          setOwnStr(e.target.value);
          setOtherStr(baseFunc(e.target.value));
        }}
      />
      {/* 基数显示 */}
      <span className="show-num">{ownStr.length}</span>
    </BaseItemWrapper>
  );
}

export default BaseItem;
