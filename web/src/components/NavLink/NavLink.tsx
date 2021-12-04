import Icon from '@chakra-ui/icon'
import { Flex, Text } from '@chakra-ui/layout'
import { Link } from '@redwoodjs/router'
import { IconType } from 'react-icons'
import useColorTheme from 'src/hooks/useColorTheme'

export type LinkType = {
  icon?: IconType
  label: string
  route: string
}

type NavLinkProps = {
  link: LinkType
}

const NavLink = ({ link }: NavLinkProps) => {
  const { icon, label, route } = link
  const { backgroud, text } = useColorTheme()

  return (
    <Link to={route}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: backgroud.focus,
          color: text.primary,
        }}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: text.primary,
            }}
            as={icon}
          />
        )}
        <Text fontSize="1.2rem">{label}</Text>
      </Flex>
    </Link>
  )
}

export default NavLink
