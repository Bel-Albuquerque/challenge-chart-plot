import React from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

function Input() {
  return (
    <CodeEditor
        // value={code}
      language="js"
      placeholder="Please enter JS code."
        // onChange={(evn) => setCode(evn.target.value)}
      padding={15}
      style={{
        fontSize: '14px',
        backgroundColor: '#2f3542',
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        width: '100%',
        resize: 'vertical',
        height: '20vh',
        maxHeight: '50vh',
        minHeight: '20vh',
        overflow: 'auto',
      }}
    />
  );
}

export default Input;
