interface MarkdownEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export default function MarkdownEditor({value, onChange}: MarkdownEditorProps) {
    return (
        <div className="flex flex-col h-full">
            <label htmlFor="editor" className="text-white w-fit bg-gray-800 rounded-lg rounded-b-none py-1 px-2">
                Markdown.md
            </label>
            <textarea
                id="editor"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-full p-4 bg-gray-800 rounded-lg rounded-tl-none text-white focus:outline-none font-mono text-sm resize-none"
                spellCheck="false"
                placeholder="Type your code here"
            />
        </div>
    );
}