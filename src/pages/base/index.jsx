import { Link } from 'react-router-dom';
import { BaseWrapper } from './base.styled';
import BaseTool from '@/components/base-tool';

function Base({ baseEncode, baseDecode }) {
  return (
    <BaseWrapper>
      <BaseTool baseEncode={baseEncode} baseDecode={baseDecode} />
    </BaseWrapper>
  );
}

export default Base;
