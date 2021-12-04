import { routes } from '@redwoodjs/router'
import { FiHome } from 'react-icons/fi'
import NavLink, { LinkType } from './NavLink'

export const generated = () => {
  const link: LinkType = {
    route: routes.home(),
    label: 'Home',
    icon: FiHome,
  }

  return <NavLink link={link} />
}

export default { title: 'Components/NavLink' }
