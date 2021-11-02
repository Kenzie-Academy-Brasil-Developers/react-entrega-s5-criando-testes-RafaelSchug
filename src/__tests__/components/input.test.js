import {screen, render} from '@testing-library/react';
import {Input} from 'semantic-ui-react';

describe('Input', () => {
    it('Should render an input element', () => {
        render(<Input placeholder='Insira o Cep'/>);

        expect(screen.getByPlaceholderText('Insira o Cep')).toBeInTheDocument();

    })
})
