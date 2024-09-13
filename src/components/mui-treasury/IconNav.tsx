import React from 'react';
import AppRegistrationRounded from '@mui/icons-material/AppRegistrationRounded';
import EventNoteRounded from '@mui/icons-material/EventNoteRounded';
import ForumRounded from '@mui/icons-material/ForumRounded';
import HomeRounded from '@mui/icons-material/HomeRounded';
import SearchRounded from '@mui/icons-material/SearchRounded';
import SettingsRounded from '@mui/icons-material/SettingsRounded';
import Box, { BoxProps } from '@mui/material/Box';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { alpha } from '@mui/material/styles';

const defaultIcons = [
  { icon: <SearchRounded />, name: 'Search', path: '/search' },
  { icon: <HomeRounded />, name: 'Home', path: '/' },
  { icon: <ForumRounded />, name: 'Forum', path: '/forum' },
  { icon: <SettingsRounded />, name: 'Settings', path: '/settings' },
  { icon: <AppRegistrationRounded />, name: 'Register', path: '/register' },
  { icon: <EventNoteRounded />, name: 'Events', path: '/events' },
];

export const IconNavMockup = ({
  activeIndex = 1,
  icons = defaultIcons,
  size,
  isCollapsed,
  ...props
}: {
  icons?: Array<{ icon: React.ReactNode; name: string; path: string }>;
  activeIndex?: number;
  isCollapsed?: boolean;
} & Pick<IconButtonProps, 'size'> &
  BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 2,
        p: 2,
        bgcolor: 'background.paper',
        '& .MuiIconButton-root': {
          borderRadius: 2,
        },
        ...props.sx,
      }}
    >
      {icons.map((item, index) => (
        <IconButton
          key={index}
          disableTouchRipple
          size={size}
          onClick={(event) => {
            console.log('clicked', index, item.path);
          }}
          sx={{
            ...(index === 0 && { mb: 0 }),
            ...(index === activeIndex && {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.12),
              '& svg': {
                color: (theme) => theme.palette.primary.main,
              },
            }),
          }}
        >
          {item.icon}
          {!isCollapsed && <span>&nbsp;{item.name}</span>}
        </IconButton>
      ))}
    </Box>
  );
};
