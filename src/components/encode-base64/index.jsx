import { useState } from 'react'
import copy from 'copy-to-clipboard'
import { Button, message } from 'antd'

import { EncodeBase64Wrapper } from './encode-base64.styled'
import { base64Decode, base64Encode} from '../../utils/baseTransform'

function EncodeBase64() {
  const [utf8Input, setUtf8Input] = useState("")
  const [base64Input, setBase64Input] = useState("")

  return (
    <EncodeBase64Wrapper>
      <div className="base64-title">Base64编码、解码</div>
      <div className="base64-items">
        <div className="base64-item base64-left">
          {utf8Input.length ?
            <>
            <Button type="primary"
                    onClick={() => {
                      copy(utf8Input)
                      message.info("复制成功！", .3)
                    }}>复制</Button>
            <i className="del-icon"
             onClick={() => {
              setUtf8Input("")
              setBase64Input("")
             }}>&#xe674;</i>
            </> : null}

          <textarea value={utf8Input}
                    placeholder="Hello World"
                    onChange={(e) => {
                      e.preventDefault()
                      setUtf8Input(e.target.value)
                      setBase64Input(base64Encode(e.target.value))
                    }} />
          <span className="show-num">{utf8Input.length}</span>
        </div>
        <div className="base64-item base64-right">
          {utf8Input.length ?
            <>
            <Button type="primary"
                    onClick={() => {
                      copy(base64Input)
                      message.info("复制成功！", .3)
                    }}>复制</Button>
            <i className="del-icon"
             onClick={() => {
              setBase64Input("")
              setUtf8Input("")
             }}>&#xe674;</i>
            </> : null}

          <textarea value={base64Input}
                    placeholder="SGVsbG8gV29ybGQ="
                    onChange={(e) => {
                      setBase64Input(e.target.value)
                      setUtf8Input(base64Decode(e.target.value))
                    }} />
          <span className="show-num">{base64Input.length}</span>
        </div>
      </div>
    </EncodeBase64Wrapper>
  )
}

export default EncodeBase64