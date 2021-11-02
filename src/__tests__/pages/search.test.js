import {screen, fireEvent, render} from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';

import Search from '../../components/Search';
import Providers from '../../providers';
import api from '../../services';


const apiMock = new MockAdapter(api);

describe("Search Component", () => {
    it('Should contain the informed CEP', () => {
        // apiMock.onGet(88600000).replyOnce(200, {});
        render(<Providers><Search /></Providers>);

        const buttonElement = screen.getByText(/buscar pelo cep/i);
        const inputElement = screen.getByPlaceholderText(/insira o cep/i);

        fireEvent.change(inputElement, {target: {value: 88600000}})
        fireEvent.click(buttonElement);

        expect(inputElement).toHaveValue(88600000);

    })
})