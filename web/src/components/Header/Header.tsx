import { IconButton } from '@chakra-ui/button'
import { Flex, Text } from '@chakra-ui/layout'
import { FiMenu } from 'react-icons/fi'
import UserProfile from '../UserProfile/UserProfile'

type HeaderProps = {
  onOpen: () => void
  title: string
}

const Header = ({ onOpen, title }: HeaderProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px="4"
      position="sticky"
      top="0"
      height="20"
      zIndex="1"
      alignItems="center"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        variant="outline"
        onClick={onOpen}
        aria-label="open sidebar"
        icon={<FiMenu />}
      />
      <Text
        display={{ base: 'none', sm: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        {title}
      </Text>

      <UserProfile />
    </Flex>
  )
}

export default Header
