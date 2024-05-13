const fs = require('fs');
const path = require('path');

/**
 * Reads a markdown file from the local file system.
 * @param {string} filePath - The path to the markdown file.
 * @returns {Promise<string>} - A promise that resolves to the content of the file.
 */
function readMarkdownFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

/**
 * Writes content to a markdown file on the local file system.
 * @param {string} filePath - The path to the markdown file.
 * @param {string} content - The content to write to the file.
 * @returns {Promise<void>} - A promise that resolves when the file has been written.
 */
function writeMarkdownFile(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

module.exports = {
    readMarkdownFile,
    writeMarkdownFile
};