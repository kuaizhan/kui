import * as React from 'react'
import { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { ReactMarkdown } from '../react-markdown-wrap/index';
import {Icon, notification} from 'packages/kzui/src'
import './style.less'

interface DemoDisplayCardProps {
  children: React.ReactNode | React.ReactElement,
  code: string,
  description: {
    title: string,
    content: string
  }
}

const clsPrefix = 'demo-display'
const DemoDisplayCard = ({
  description,
  code,
  children
}: DemoDisplayCardProps) => {
  const [ isCodeDisplay, setIsCodeDisplay ] = useState(false)
  const codeToCopy = code.replace('\`\`\`js', '').replace('\`\`\`', '').split('\n').reduce((acc:string, cur: string) => {
    return cur ? acc += `${cur}` + '\n': acc
  }, '');

  function handleCodeDisplay() {
    setIsCodeDisplay((isCodeDisplay) => !isCodeDisplay)
  }
  return (
    <div className={clsPrefix}>
      <div className={`${clsPrefix}__effect`}> {/* 示例效果 */}
        {children}
      </div>
      <div className={`${clsPrefix}__description`}> {/* 描述 */}
        <div className='title'>{description.title}</div>
        <div className='content'>{description.content}</div>
      </div>
      <div className={`${clsPrefix}__opts`}>
        <CopyToClipboard onCopy={() => notification.success('复制成功')} text={codeToCopy}>
          <p style={{ cursor:'pointer', marginRight: '16px' }}>
            <span>复制代码</span>
            <Icon type="copy" />
          </p>
        </CopyToClipboard>
        <p style={{ cursor:'pointer' }} onClick={handleCodeDisplay}>
          <span>展开/收起</span>
          <Icon type="copy" />
        </p>
      </div>
        <div className={`${clsPrefix}__code`} style={{ display: isCodeDisplay ? 'block' : 'none' }}>  {/* 代码 */}
          {/* {code.split('  ').map((phrase: string, index: number) => (
            <pre key={index}>
              <code>{phrase}</code>
            </pre>
          ))} */}
          <ReactMarkdown source={code} />
        </div>
    </div>
  )
}

export default DemoDisplayCard