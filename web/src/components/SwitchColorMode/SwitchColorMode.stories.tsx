import { Menu, MenuButton, MenuList } from '@chakra-ui/menu'
import SwitchColorMode from './SwitchColorMode'

export const generated = () => {
  return (
    <Menu>
      <MenuButton>Open Menu</MenuButton>
      <MenuList fontSize="lg">
        <SwitchColorMode />
      </MenuList>
    </Menu>
  )
}

export default { title: 'Components/SwitchColorMode' }
