import { CloseButton } from '@chakra-ui/close-button'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { routes, useLocation } from '@redwoodjs/router'
import { FiHome, FiLayout } from 'react-icons/fi'
import { LinkItemType } from '../NavLink/NavLink'
import NavLink from '../NavLink/NavLink'
import useColorTheme from 'src/hooks/useColorTheme'
import { LayoutProps } from '@chakra-ui/styled-system'

type SideBarProps = {
  onClose: () => void
  display?: LayoutProps['display']
}

const Sidebar = ({ onClose, display }: SideBarProps) => {
  const LinkItems: LinkItemType[] = [
    {
      label: 'Home',
      route: routes.home(),
      icon: FiHome,
    },
    {
      label: 'About',
      route: routes.about(),
      icon: FiLayout,
    },
  ]

  const { border, backgroud } = useColorTheme()
  const { pathname } = useLocation()

  // check if initial render else close the sidebar on route change
  const firstUpdate = React.useRef(true)
  React.useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    onClose()
  }, [pathname, onClose])

  // when resizing the window, close the sidebar
  React.useEffect(() => {
    const handleResize = () => {
      onClose()
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [onClose])

  return (
    <Box
      bg={backgroud.primary}
      borderRight="1px"
      borderRightColor={border}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      display={display}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          My Budget
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavLink linkItem={link} key={i} />
      ))}
    </Box>
  )
}

export default Sidebar
