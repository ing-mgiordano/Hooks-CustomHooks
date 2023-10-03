import { act, renderHook } from '@testing-library/react'
import { useCounter } from '../../src/hooks/useCounter'

describe('Pruebas en el useCounter', () => {

    test('debe retornar los valores por defecto', () => { 
    
        const { result } = renderHook( () => useCounter() )
        /* console.log(result) */
        const { counter, handleDecrement, handleIncrement, handleReset } = result.current

        expect( counter ).toBe(10)
        expect( handleDecrement ).toEqual( expect.any( Function ) )
        expect( handleIncrement ).toEqual( expect.any( Function ) )
        expect( handleReset ).toEqual( expect.any( Function ) )
    })

    test('debe generar el contador con valor de 100', () => { 
        
        const { result } = renderHook( () => useCounter(100) )
        const { counter } = result.current
        expect( counter ).toBe(100)
    })

    test('debe de incrementar el contador', () => { 
        
        const { result } = renderHook( () => useCounter() )
        const { handleIncrement } = result.current

        act( () => {
            handleIncrement()
            handleIncrement(2)
        })
        expect( result.current.counter ).toBe(13) //no utilizo counter directamente porque me toma el valor inicial con el que arranca

    })

    test('debe de resetear el contador', () => { 
        
        const { result } = renderHook( () => useCounter() )
        const { handleDecrement, handleIncrement, handleReset } = result.current

        act( () => {
            handleDecrement(3)
            handleIncrement(8)
            handleReset()
        })
        expect( result.current.counter ).toBe(10) //no utilizo counter directamente porque me toma el valor inicial con el que arranca

    })
})