import { createContext, forwardRef, useContext, useEffect, useState } from 'react'

const NavBarContext = createContext()

function NavBarContextProvider ({ children }) {
  const [props, setProps] = useState({})
  const [show, setShow] = useState(false)
  const contextValue = {
    setProps,
    setShow,
    props: { show, ...props }
  }

  return (
    <NavBarContext.Provider value={contextValue}>
      {children}
    </NavBarContext.Provider>
  )
}

function withNavBarContextProps (NavBarComponent) {
  return (defaultProps) => {
    const { props } = useContext(NavBarContext) ?? {}

    return <NavBarComponent show={false} {...defaultProps} {...props} />
  }
}

const NavBarContextProxy = forwardRef(({ variant, variantAtScrollTop, pathLogo, hideMenu }, ref) => {
  const { setProps, setShow } = useContext(NavBarContext) ?? {}

  useEffect(() => {
    setProps?.({ variant, variantAtScrollTop, ref, pathLogo, hideMenu })
  }, [setProps, variant, variantAtScrollTop, ref, pathLogo, hideMenu])

  useEffect(() => {
    setShow?.(true)

    return () => { setShow?.(false) }
  }, [setShow])

  return null
})

export {
  NavBarContextProvider,
  NavBarContextProxy,
  withNavBarContextProps
}
