
import { useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import TextStyle from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import Placeholder from '@tiptap/extension-placeholder';

const Tiptap: React.FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TaskList.configure({
        HTMLAttributes: {
          class: 'not-prose pl-2',
        },
      }),
      TaskItem.configure({
        HTMLAttributes: {
          class: 'flex items-start my-4',
        },
        nested: true,
      }),
      Placeholder.configure({
        placeholder: 'type anything',
      }),
    ],

    content: `
      type anything here
    `,
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
  });


  return (
    <div className='space-x-4'>
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
