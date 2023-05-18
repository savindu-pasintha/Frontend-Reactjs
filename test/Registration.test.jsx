import { describe, it, expect } from 'vitest';
import { render,screen } from '@testing-library/react';
import Registration from '../src/pages/user/Registration';


describe('RegistrationPage', () => {
    it('renders a username label', () => {
    render(<Registration />);
    const greeting = screen.getByText('Username');
    expect(greeting).toBeTruthy();
    });
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });

});

//npx vitest Registration.test.jsx