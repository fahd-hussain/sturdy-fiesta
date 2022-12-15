import { FC, useState } from 'react'
import { Container } from '../styles/global.styles'
import Footer from './Footer/footer.comp'
import Header from './Header/header.comp'
import { LayoutContent, PageContainer } from './layout.styles'
import SideBar from './Sidebar/sidebar.comp'

const Layout: FC<LayoutProps> = ({ children }) => {
  const [hide, setHide] = useState<boolean>(false)

  const _toggleSidebar = () => setHide((prevState) => !prevState)

  return (
    <Container>
      <Header />
      <LayoutContent>
        <SideBar hide={hide} />
        <PageContainer>{children}</PageContainer>
      </LayoutContent>
      <Footer />
    </Container>
  )
}

export default Layout

interface LayoutProps {
  children?: React.ReactNode
}
