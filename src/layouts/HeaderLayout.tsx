import React from 'react'
import { IconButton } from '@mui/material'
import viteLogo from '/vite.svg'
import { applyHeaderStyles, layoutClasses, toggleTemporaryEdgeSidebar, Header } from '../mui-treasury/layout-core-v6'
import { ColorSchemeSelectIcon } from '../mui-treasury/color-scheme-select-icon'

const HeaderLayout: React.FC = () => {
  return (
    <Header
      sx={{
        ...applyHeaderStyles({
          height: { xs: '56px', md: '64px' },
          fullWidth: 'md',
        }),
        position: { xs: 'sticky', md: 'relative' },
        px: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <IconButton
        className={layoutClasses.TemporaryEdgeSidebarTrigger}
        onClick={() => {
          toggleTemporaryEdgeSidebar()
        }}
      ></IconButton>
      <img src={viteLogo} className='logo' alt='Vite logo' />
      <ColorSchemeSelectIcon />
    </Header>
  )
}

export default HeaderLayout
