import { useColorMode } from '@chakra-ui/color-mode'

const useColorTheme = () => {
  const { colorMode } = useColorMode()

  const variant = (lightVariant: string, darkVariant: string) =>
    colorMode === 'light' ? lightVariant : darkVariant

  const backgroud = {
    primary: variant('gray.100', 'gray.900'),
    focus: variant('gray.50', 'gray.700'),
  }

  const text = {
    primary: variant('gray.600', 'whiteAlpha.900'),
    secondary: variant('gray.500', 'gray.400'),
    active: variant('blue.500', 'blue.200'),
  }

  const border = variant('gray.200', 'gray.700')

  return { backgroud, text, border }
}

export default useColorTheme
