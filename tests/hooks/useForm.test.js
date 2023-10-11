import { act, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"


describe('Pruebas en el useForm', () => {

    const initialForm = {
        name: "fernando",
        email: "email@email"
    }
    
    test('debe de regresar la info por defecto', () => {
        
        //desestructuro lo que viene de renderHook       
        const { result } = renderHook( () => useForm(initialForm) )
        console.log(result.current)
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            handleChange: expect.any( Function ),
            handleResetForm: expect.any( Function ) 
        })
    })

    test('debe de cambiar el nombre del formulario', () => { 
        
        const newValue  = "Juan"
        const { result } = renderHook( () => useForm(initialForm) )
        const { handleChange } = result.current

        act(() => {
            handleChange({ target: { name: 'name', value: newValue } })
        })

        expect( result.current.name ).toBe( newValue )
        expect( result.current.formState.name ).toBe( newValue )
    })

    test('debe de resetear el formulario', () => { 
        
        const newValue  = "Juan"
        const { result } = renderHook( () => useForm(initialForm) )
        const { handleChange, handleResetForm } = result.current

        act(() => {
            handleChange({ target: { name: 'name', value: newValue } })
            handleResetForm()
        })

        expect( result.current.name ).toBe( initialForm.name )
        expect( result.current.formState.name ).toBe( initialForm.name )
    })

})