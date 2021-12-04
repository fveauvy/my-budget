import { useDisclosure } from '@chakra-ui/hooks'
import { Box } from '@chakra-ui/layout'
import { Drawer, DrawerContent } from '@chakra-ui/modal'
import Header from 'src/components/Header/Header'
import Sidebar from 'src/components/Sidebar/Sidebar'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh">
      <Sidebar
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      {/*= Header =*/}
      <Header onOpen={onOpen} title="Mon Budget" />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

export default AppLayout
