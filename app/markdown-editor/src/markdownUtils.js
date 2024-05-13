import marked from 'marked';
import DOMPurify from 'dompurify';

/**
 * Converts markdown text to sanitized HTML.
 * @param {string} markdownText - The markdown text to convert.
 * @returns {string} - The sanitized HTML.
 */
export function convertMarkdownToHtml(markdownText) {
    const html = marked(markdownText);
    return DOMPurify.sanitize(html);
}
