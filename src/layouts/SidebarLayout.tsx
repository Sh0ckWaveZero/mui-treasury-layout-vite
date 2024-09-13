import React, { useState } from 'react';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { ButtonBase } from '@mui/material';
import { IconNavMockup } from '../components/mui-treasury/IconNav';
import {
  applyEdgeSidebarStyles,
  EdgeSidebar,
  EdgeSidebarContent,
  EdgeTemporaryClose,
  layoutClasses,
  toggleEdgeSidebarCollapse,
} from '../components/mui-treasury/layout-core-v6';

const SidebarLayout: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = (event: React.MouseEvent) => {
    toggleEdgeSidebarCollapse({ event });
    setIsCollapsed(!isCollapsed);
  };

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
      <IconNavMockup isCollapsed={isCollapsed} />
      <EdgeTemporaryClose />
      <EdgeSidebarContent>
        <ButtonBase
          className={layoutClasses.EdgeSidebarCollapser}
          onClick={handleToggleCollapse}
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
