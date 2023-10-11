import React from 'react';
import { DefaultProps } from '../../types/props/default.props';
import { LayoutContainer } from './styles';

const Layout: React.FC<DefaultProps> = ({ children }) => {
  return (
   <LayoutContainer>
    { children }
   </LayoutContainer>
   
  )
}

export default Layout