import { Flex, HStack, Text } from '@chakra-ui/layout'
import { MenuItem, Switch } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useColorMode } from '@chakra-ui/color-mode'

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <MenuItem closeOnSelect={false} h="3rem">
      <Flex justifyContent="space-between" w="100%">
        <Text>Theme</Text>
        <HStack alignItems="center" spacing={2}>
          <FiSun />
          <Switch
            size="md"
            onChange={toggleColorMode}
            colorScheme="blue"
            aria-label={
              colorMode === 'light'
                ? 'switch to dark mode'
                : 'switch to light mode'
            }
            isChecked={colorMode === 'dark'}
          />
          <FiMoon />
        </HStack>
      </Flex>
    </MenuItem>
  )
}

export default SwitchColorMode
