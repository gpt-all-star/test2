// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Additional setup for Jest
import { configure } from '@testing-library/react';

// Optional: Configure global settings for the testing library
configure({ testIdAttribute: 'data-testid' });

// Mocking global objects or functions if needed
global.fetch = require('jest-fetch-mock');