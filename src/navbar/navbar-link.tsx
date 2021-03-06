import React, { ReactNode } from 'react'
import { NavLink, match } from 'react-router-dom'
import { Location } from 'history'
import { useLocalePrefix } from '../hooks/use-locale-prefix'

const closeBurger = (): void => {
  const $navbarBurger = document.querySelector('.navbar-burger') as HTMLElement
  const target = $navbarBurger.dataset.target as string
  const $target = document.getElementById(target) as HTMLElement
  $navbarBurger.classList.toggle('is-active')
  $target.classList.toggle('is-active')
}

type Props = {
  path: string
  isActive: (match: match, location: Location) => boolean
  children: ReactNode
}

export const NavBarLink = ({ path, isActive, children }: Props) => {
  return (
    <NavLink
      className="navbar-item"
      activeClassName="is-active"
      to={useLocalePrefix(path)}
      isActive={isActive}
      onClick={closeBurger}
    >
      {children}
    </NavLink>
  )
}
