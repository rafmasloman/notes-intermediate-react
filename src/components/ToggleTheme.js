import React from 'react';
import { ThemeConsumer } from '../context/ThemeContext';
import Button from './Button';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleTheme = () => {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        // return <Button
        // variant="icon-btn"
        // icon={<FiArchive size={30} />}
        // onChange={() => onArchiveNoteHandler(id)}
        // />
        return (
          <button onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
};

export default ToggleTheme;
