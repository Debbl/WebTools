import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {BaseToolWrapper} from './base-tool.styled';
import BaseItem from './base-item';

function BaseTool({ baseEncode, baseDecode }) {
  const [inputStr, setInputStr] = useState('');
  const [inputBaseStr, setInputBaseStr] = useState('');
  const location = useLocation();

  return (
    <BaseToolWrapper>
      <div className="base-title">{location.pathname.slice(1)}</div>
      <div className="base-container">
        <BaseItem
          ownStr={inputStr}
          setOwnStr={setInputStr}
          setOtherStr={setInputBaseStr}
          baseFunc={baseEncode}
          tipStr={"Hello"}
        />
        <BaseItem
          ownStr={inputBaseStr}
          setOwnStr={setInputBaseStr}
          setOtherStr={setInputStr}
          baseFunc={baseDecode}
          tipStr={baseEncode('Hello')}
        />
      </div>
    </BaseToolWrapper>
  );
}

export default BaseTool;
