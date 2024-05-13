import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders header with correct text', () => {
    render(<App />);
    const headerElement = screen.getByText(/Markdown Editor/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders textarea for markdown input', () => {
    render(<App />);
    const textareaElement = screen.getByPlaceholderText(/Write your markdown here.../i);
    expect(textareaElement).toBeInTheDocument();
  });

  test('renders preview pane', () => {
    render(<App />);
    const previewElement = screen.getByTestId('markdown-preview');
    expect(previewElement).toBeInTheDocument();
  });

  test('updates preview as markdown is typed', () => {
    render(<App />);
    const textareaElement = screen.getByPlaceholderText(/Write your markdown here.../i);
    fireEvent.change(textareaElement, { target: { value: '# Hello World' } });
    const previewElement = screen.getByTestId('markdown-preview');
    expect(previewElement.innerHTML).toContain('<h1>Hello World</h1>');
  });
});