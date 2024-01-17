import { NavLink as NavLinksss } from "react-router-dom"

export const NavLink = ({to, children, ...props}) => {
  return (
    <NavLinksss
        {...props}
        className={({isActive}) => isActive ? ' font-bold pointer-events-none text-3xl' : undefined}
        to={to}
    >{children}
    </NavLinksss>
  )
}
