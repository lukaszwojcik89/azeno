import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

test('it renders the Azeno in the headline', () => {
    const { container } = render(<App />);
    expect(container.querySelector('h1')).toContainHTML('Azeno');
});
