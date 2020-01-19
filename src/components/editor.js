import React, { useState } from 'react'

import CKEditor from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

function Editor() {

  let isSend = false

  return <div className="App">
    <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ ClassicEditor }
        data="<p>Hello from CKEditor 5!</p>"
        onInit={ editor => {
          // You can store the "editor" and use when it is needed.
          console.log( 'Editor is ready to use!', editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          // console.log({ isSend, editor })
          if(isSend) console.log( { event, isSend, editor, data } );
          else isSend = false
          setTimeout(() => { isSend = true }, 800)
        } }
        onBlur={ ( event, editor ) => {
          console.log( 'Blur.', editor );
        } }
        onFocus={ ( event, editor ) => {
          console.log( 'Focus.', editor );
        } }
      />
    </div>
}

export default Editor
