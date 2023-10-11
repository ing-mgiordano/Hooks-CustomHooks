import { fireEvent, render, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/03-examples"
import React from "react"
import { useCounter } from "../../src/hooks/useCounter"
import { useFetch } from "../../src/hooks/useFetch"
//cuando importamos useFetch agregamos la referencia a useFetch despues de "../hooks/" para que el mock solo se cree de ese hook 

jest.mock("../../src/hooks/useFetch")
jest.mock("../../src/hooks/useCounter")


describe('Pruebas en <MultipleCustomHook />', () => {

    const mockIncrement = jest.fn()
    useCounter.mockReturnValue({
        counter: 1,
        handleIncrement: mockIncrement
         
    })

    //antes de cada prueba limpia el llamado a las funciones mock
    beforeEach( () => { 
        jest.clearAllMocks()
    })

    test('debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data: null, 
            isLoading: true, 
            hasError: null
        })

        render( <MultipleCustomHook /> )
        
        expect( screen.getByText('Pokemons') ).toBeTruthy()
        expect( screen.getByText('Loading...') ).toBeTruthy()
        //para hacer referencia a un botton es mejor crearse una variable
        const nextButton = screen.getByRole('button',{ name: 'Next pokemon'})
        //console.log(nextButton.disabled)
        expect(nextButton.disabled).toBeTruthy()

        screen.debug()

    })

    test('debe de mostrar un Pokemon', () => { 

        useFetch.mockReturnValue({
            data: [{id: 1, name: "Pikachu", types: "Electrico"}], 
            isLoading: false, 
            hasError: null
        })

        render( <MultipleCustomHook /> ) 
        expect( screen.getByText('Pokemon type:') ).toBeTruthy()
        
        const nextButton = screen.getByRole('button',{ name: 'Next pokemon'})
        expect(nextButton.disabled).toBeFalsy()
        screen.debug()

    })

    test('debe de llamar a la funcion incrementar', () => {

        useFetch.mockReturnValue({
            data: [{id: 1, name: "Pikachu", types: "Electrico"}], 
            isLoading: false, 
            hasError: null
        })
        render( <MultipleCustomHook /> )

        const nextButton = screen.getByRole('button',{ name: 'Next pokemon'})
        fireEvent.click( nextButton )
        expect( mockIncrement ).toHaveBeenCalled()

    })
})