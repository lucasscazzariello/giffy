import React from 'react';
import { screen, render, waitForElement, fireEvent } from '@testing-library/react';
import App from '../App';

test('home work as expected', async () => {
    const { container } = render(<App />)
    const gifLink = await waitForElement(
        () => container.querySelector('.Gif-link')
    )
    expect(gifLink).toBeVisible()
});

test('seaarch from could be used', async () => {
    render(<App />)
    const input = await screen.findByRole('textbox')
    fireEvent.change(input, { target: { value: 'Matrix' } })
    const button = await screen.findByRole('button')
    fireEvent.click(button)

    const title = await screen.findByText('Matrix')
    expect(title).toBeVisible()
})
