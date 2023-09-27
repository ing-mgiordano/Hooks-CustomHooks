import { useLayoutEffect, useRef, useState } from "react"


export const Quote = ({ id, name, types }) => {

  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect()
    setBoxSize( { width, height } )
  }, [types])


  return (
    <>
      <blockquote 
        className="blockquote text-end"
        style={{ display: 'flex'}}
      >
          <p
            ref={pRef} 
            className="mb-1"
          >Pokemon type: 
              {types && types.map(
                  t => t.type.name
                  ).join(', ')
              }
          </p>
          <footer className="blockquote-footer">{name}</footer>
      </blockquote>

      <code>{ JSON.stringify(boxSize) }</code>
    </>
  )
}
