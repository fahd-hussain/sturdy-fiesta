import { FC } from 'react'
import { TextWrapper } from 'styles/global.styles'
import {
  SidebarContainer,
  SidebarList,
  SidebarListItem,
} from './sidebar.styles'

interface SideBarProps {
  hide: boolean
}

const SideBar: FC<SideBarProps> = ({ hide }) => {
  return (
    <SidebarContainer hide={hide}>
      <SidebarList>
        <SidebarListItem>
          <TextWrapper>ABC</TextWrapper>
        </SidebarListItem>
      </SidebarList>
    </SidebarContainer>
  )
}

export default SideBar
