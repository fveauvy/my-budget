import { useColorMode } from '@chakra-ui/color-mode'

const useColorTheme = () => {
  const { colorMode } = useColorMode()

  const backgroud = {
    focus: colorMode === 'light' ? 'gray.100' : 'gray.700',
  }

  const text = {
    primary: colorMode === 'light' ? 'gray.600' : 'whiteAlpha.900',
    secondary: colorMode === 'light' ? 'gray.500' : 'gray.400',
  }

  return { backgroud, text }
}

export default useColorTheme
