import { Button } from 'semantic-ui-react';

import {screen, render} from '@testing-library/react';

describe('Button', () => {
    it('Should render a button element', () => {
        render(<Button/>);

        expect(screen.getByRole('button')).toBeInTheDocument();
    })
})