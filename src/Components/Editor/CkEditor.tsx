import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface CKEditorProps {
  onChange: (data: string) => void;
}

const MyCKEditor: React.FC<CKEditorProps> = ({ onChange }) => {
  const [editorLoaded, setEditorLoaded] = useState(true);

  useEffect(() => {
    setEditorLoaded(true);
    
  }, []);

  function se(editor: ClassicEditor){
     // Access the CKEditor toolbar element
     const toolbarElement = editor.ui.view.toolbar.element;

     // Add custom classes
     editor.ui.getEditableElement()?.parentElement?.classList.add('custom-ckeditor-content');
     toolbarElement?.classList.add('custom-ckeditor-toolbar');

     // Move the toolbar to a custom element
     const customToolbar = document.getElementById('customToolbar');
     if (customToolbar) {
       customToolbar?.appendChild(toolbarElement!);
     }
  }
  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={(editor) => 
           se(editor)
          }
          onChange={(_event: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyCKEditor;
