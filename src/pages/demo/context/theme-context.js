import React from 'react';
import { themes } from './constents';

export const ThemeContext = React.createContext(
    {
        theme: themes.light,
        toggleTheme: () => {}
    }
);