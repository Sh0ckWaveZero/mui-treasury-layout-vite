import React from 'react';
import { BoxProps } from '@mui/material/Box';
import { layoutClasses } from './layoutClasses';
import { styled } from './zero-styled';

const StyledInsetAvoidingView = styled('div')({
  marginRight: 'var(--InsetSidebarR-width)',
  marginLeft: 'var(--InsetSidebarL-width)',
});

const InsetAvoidingView = React.forwardRef<HTMLDivElement, BoxProps>(
  function InsetAvoidingView({ className, ...props }, ref) {
    return (
      <StyledInsetAvoidingView
        // @ts-expect-error Material UI issue
        ref={ref}
        className={`${layoutClasses.InsetAvoidingView} ${className || ''}`}
        {...props}
      />
    );
  },
);

export default InsetAvoidingView;
