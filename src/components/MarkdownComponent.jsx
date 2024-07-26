import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';


const MarkdownComponent = ({ filePath }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (filePath) {
        fetch(filePath)
            .then((response) => response.text())
            .then((text) => setContent(text))
            .catch((error) => console.error('Error fetching file:', error));
        }
    }, [filePath]);

    return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownComponent;