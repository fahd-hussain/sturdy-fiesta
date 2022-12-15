import DashboardIcon from '@mui/icons-material/DashboardTwoTone'
import { FC } from 'react'
import { TextWrapper } from 'styles/global.styles'
import {
  CloseSidebarIcon,
  OpenSidebarIcon,
  SidebarContainer,
  SidebarList,
  SidebarListItem,
} from './sidebar.styles'

const SideBar: FC<SideBarProps> = ({ hide, handleToggleSidebar }) => {
  return (
    <SidebarContainer hide={hide}>
      {hide ? (
        <OpenSidebarIcon onClick={handleToggleSidebar} />
      ) : (
        <CloseSidebarIcon onClick={handleToggleSidebar} />
      )}
      <SidebarList>
        <SidebarListItem>
          <DashboardIcon />
          <TextWrapper>ABC</TextWrapper>
        </SidebarListItem>
      </SidebarList>
    </SidebarContainer>
  )
}

export default SideBar

interface SideBarProps {
  hide: boolean
  handleToggleSidebar: () => void
}
