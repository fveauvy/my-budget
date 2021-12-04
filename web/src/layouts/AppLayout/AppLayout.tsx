import { Box } from '@chakra-ui/layout'
import Header from 'src/components/Header/Header'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh">
      <Header title="My Budget" onOpen={() => true} />
      {children}
    </Box>
  )
}

export default AppLayout
