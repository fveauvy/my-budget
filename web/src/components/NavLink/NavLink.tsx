import Icon from '@chakra-ui/icon'
import { Flex, Text } from '@chakra-ui/layout'
import { Link, useMatch } from '@redwoodjs/router'
import { IconType } from 'react-icons'
import useColorTheme from 'src/hooks/useColorTheme'

export type LinkItemType = {
  icon: IconType
  label: string
  route: string
}

type NavLinkProps = {
  linkItem: LinkItemType
}

const NavLink = ({ linkItem }: NavLinkProps) => {
  const { icon, label, route } = linkItem
  const { backgroud, text } = useColorTheme()
  const matchInfo = useMatch(route)

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
            strokeWidth={matchInfo.match ? 2.5 : 1.5}
            color={matchInfo.match ? text.active : text.primary}
            _groupHover={{
              color: matchInfo.match ? text.active : text.primary,
            }}
            as={icon}
          />
        )}
        <Text
          color={matchInfo.match ? text.active : text.primary}
          fontWeight={matchInfo.match ? 500 : 400}
          fontSize="1.2rem"
        >
          {label}
        </Text>
      </Flex>
    </Link>
  )
}

export default NavLink
