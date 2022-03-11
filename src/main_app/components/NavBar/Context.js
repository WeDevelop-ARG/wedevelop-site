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
  const Component = (defaultProps) => {
    const { props } = useContext(NavBarContext) ?? {}

    return <NavBarComponent show={false} {...defaultProps} {...props} />
  }

  Component.displayName = 'NavBar'

  return Component
}

const NavBarContextProxy = forwardRef(({
  variant,
  variantAtScrollTop,
  pathLogo,
  hideMenu,
  contactPagePath
}, ref) => {
  const { setProps, setShow } = useContext(NavBarContext) ?? {}

  useEffect(() => {
    setProps?.({ variant, variantAtScrollTop, ref, pathLogo, hideMenu, contactPagePath })
  }, [setProps, variant, variantAtScrollTop, ref, pathLogo, hideMenu, contactPagePath])

  useEffect(() => {
    setShow?.(true)

    return () => { setShow?.(false) }
  }, [setShow])

  return null
})

NavBarContextProxy.displayName = 'NavBar'

export {
  NavBarContextProvider,
  NavBarContextProxy,
  withNavBarContextProps
}
