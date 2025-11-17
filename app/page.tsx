'use client';
import {useState} from 'react';
import Markdown from 'markdown-to-jsx';
import MarkdownEditor from './components/MarkdownEditor';

const MarkdownContent = ({children}: { children: string }) => (
    <Markdown
        options={{
            overrides: {
                img: {
                    component: 'img',
                    props: {
                        className: 'max-w-full h-auto',
                        loading: 'lazy'
                    }
                },
                p: {
                    component: 'p',
                    props: {
                        className: 'leading-relaxed'
                    }
                },
                h1: {component: 'h1', props: {className: 'text-3xl font-bold'}},
                h2: {component: 'h2', props: {className: 'text-2xl font-bold'}},
                h3: {component: 'h3', props: {className: 'text-xl font-bold'}},
                ul: {component: 'ul', props: {className: 'list-disc pl-6'}},
                ol: {component: 'ol', props: {className: 'list-decimal pl-6'}},
                li: {component: 'li'},
                a: {component: 'a', props: {className: 'text-blue-400 hover:underline'}},
                blockquote: {
                    component: 'blockquote',
                    props: {className: 'border-l-4 border-gray-500 pl-4 italic'}
                },
                code: {component: 'code', props: {className: 'bg-gray-700 px-1 rounded text-sm'}},
                pre: {component: 'pre', props: {className: 'bg-gray-800 p-4 rounded-lg overflow-x-auto'}}
            }
        }}
    >
        {children}
    </Markdown>
);

export default function Home() {
    const [markdown, setMarkdown] = useState('# Hello World\n\nStart typing markdown your here');

    return (
        <div className="flex flex-col h-screen">
            <h1 className="text-2xl font-bold mb-4">
                Markdown Visualizer
            </h1>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <MarkdownEditor value={markdown} onChange={setMarkdown}/>
                <div className="p-4 bg-gray-800 rounded-lg overflow-auto">
                    <h3 className="text-xl font-semibold mb-2">Preview</h3>
                    <div className="prose prose-invert max-w-none">
                        <MarkdownContent>{markdown}</MarkdownContent>
                    </div>
                </div>
            </div>
        </div>
    );
}