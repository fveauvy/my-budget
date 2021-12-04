import { routes } from '@redwoodjs/router'
import { FiHome } from 'react-icons/fi'
import NavLink, { LinkItemType } from './NavLink'

export const generated = () => {
  const link: LinkItemType = {
    route: routes.home(),
    label: 'Home',
    icon: FiHome,
  }

  return <NavLink linkItem={link} />
}

export default { title: 'Components/NavLink' }
