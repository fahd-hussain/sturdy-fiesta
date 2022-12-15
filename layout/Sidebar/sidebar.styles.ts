import { List, ListItem } from '@mui/material'
import { styled } from '@mui/system'
import {
  borderRadiusSm,
  gray400,
  primary,
} from '../../constant/css-variables.const'

export const SidebarContainer = styled('aside')<{ hide: boolean }>`
  grid-area: sidebar;
  margin: 0px 20px;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  box-shadow: 2px 2px 20px 0px ${gray400};
  border: 1px solid ${gray400};
  border-radius: ${borderRadiusSm};
  background-color: ${primary};

  width: ${({ hide }) => (hide ? '5vw' : '20vw')};
`

export const SidebarList = styled(List)`
  display: grid;
  grid-template-rows: 56px auto 56px;
  height: inherit;
  padding-top: 0px;
`

export const SidebarListItem = styled(ListItem)`
  padding-top: 5px;
  padding-bottom: 5px;
  height: 46px;
  min-width: 46px;
  background: $primary;
  color: $body-bg;
`
