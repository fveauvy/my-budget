import { Avatar } from '@chakra-ui/avatar'
import { IconButton } from '@chakra-ui/button'
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/layout'
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/menu'
import { FiBell, FiChevronDown } from 'react-icons/fi'
import SwitchColorMode from '../SwitchColorMode/SwitchColorMode'
import useColorTheme from 'src/hooks/useColorTheme'

const USER_INFO = {
  name: 'John Doe',
  avatar: 'https://bit.ly/2X1XQZB',
  role: 'Admin',
}

const UserProfile = () => {
  const { text } = useColorTheme()
  return (
    <HStack spacing={{ base: '2', md: '6' }}>
      <IconButton
        size="lg"
        variant="ghost"
        aria-label="open notification"
        icon={<FiBell />}
      />
      <Flex alignItems="center">
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3"
            _focus={{ boxShadow: 'none' }}
          >
            <HStack spacing="4">
              <Avatar size="md" src={USER_INFO.avatar} />
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="lg">{USER_INFO.name}</Text>
                <Text fontSize="md" color={text.secondary}>
                  {USER_INFO.role}
                </Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>

          <MenuList fontSize="lg">
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <SwitchColorMode />
            <MenuDivider />
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  )
}

export default UserProfile
