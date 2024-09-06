import React from 'react';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { ButtonBase } from '@mui/material';
import {
  applyEdgeSidebarStyles,
  EdgeSidebar,
  EdgeSidebarContent,
  EdgeTemporaryClose,
  layoutClasses,
  toggleEdgeSidebarCollapse,
} from '../mui-treasury/layout-core-v6';

const SidebarLayout: React.FC = () => {
  return (
    <EdgeSidebar
      sx={(theme) => ({
        ...applyEdgeSidebarStyles({
          theme,
          config: {
            xs: {
              variant: 'temporary',
              width: '256px',
            },
            sm: {
              variant: 'permanent',
              width: '256px',
              autoCollapse: 'sm',
              collapsedWidth: '64px',
            },
          },
        }),
      })}
    >
      <EdgeTemporaryClose />
      <EdgeSidebarContent>
        <ButtonBase
          className={layoutClasses.EdgeSidebarCollapser}
          onClick={(event) => toggleEdgeSidebarCollapse({ event })}
          sx={{ height: 48, mt: 'auto' }}
        >
          <KeyboardArrowLeft
            className={layoutClasses.EdgeSidebarUncollapsedVisible}
          />
          <KeyboardArrowRight
            className={layoutClasses.EdgeSidebarCollapsedVisible}
          />
        </ButtonBase>
      </EdgeSidebarContent>
    </EdgeSidebar>
  );
};

export default SidebarLayout;
