import React, { useState } from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import { readMarkdownFile, writeMarkdownFile } from './fileOperations';

const App = () => {
    const [markdown, setMarkdown] = useState('');

    const handleInputChange = (event) => {
        setMarkdown(event.target.value);
    };

    const createMarkup = (markdownText) => {
        const html = marked(markdownText);
        return { __html: DOMPurify.sanitize(html) };
    };

    const openFile = async () => {
        try {
            const filePath = prompt('Enter the path of the markdown file to open:');
            if (filePath) {
                const content = await readMarkdownFile(filePath);
                setMarkdown(content);
            }
        } catch (error) {
            alert('Failed to open file: ' + error.message);
        }
    };

    const saveFile = async () => {
        try {
            const filePath = prompt('Enter the path to save the markdown file:');
            if (filePath) {
                await writeMarkdownFile(filePath, markdown);
                alert('File saved successfully!');
            }
        } catch (error) {
            alert('Failed to save file: ' + error.message);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <header style={{ backgroundColor: '#6200ea', color: 'white', padding: '1rem', textAlign: 'center', fontSize: '1.5rem', fontWeight: 500 }}>
                Markdown Editor
            </header>
            <main style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                <div className="editor" style={{ flex: 1, padding: '1rem', overflowY: 'auto', borderRight: '1px solid #ddd' }}>
                    <textarea
                        id="markdown-input"
                        placeholder="Write your markdown here..."
                        value={markdown}
                        onChange={handleInputChange}
                        style={{ width: '100%', height: '100%', border: 'none', outline: 'none', fontSize: '1rem', lineHeight: '1.5', resize: 'none' }}
                    />
                </div>
                <div className="preview" id="markdown-preview" style={{ flex: 1, padding: '1rem', overflowY: 'auto', backgroundColor: '#f5f5f5' }}>
                    <div dangerouslySetInnerHTML={createMarkup(markdown)} />
                </div>
            </main>
            <footer style={{ backgroundColor: '#f1f1f1', padding: '0.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
                <button onClick={openFile} style={{ backgroundColor: '#6200ea', color: 'white', border: 'none', padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer', margin: '0.5rem', borderRadius: '4px' }}>
                    Open
                </button>
                <button onClick={saveFile} style={{ backgroundColor: '#6200ea', color: 'white', border: 'none', padding: '0.5rem 1rem', fontSize: '1rem', cursor: 'pointer', margin: '0.5rem', borderRadius: '4px' }}>
                    Save
                </button>
            </footer>
        </div>
    );
};

export default App;
