import { createStyles } from '@mantine/core';

export default createStyles(() => ({
  headerWrapper: {
    position: 'sticky',
    width: '100%',
    height: '6rem',
    background: 'rgb(24, 24, 27)',
  },
  header: {
    margin: '0 auto',
    padding: '0 1rem',
    width: '100%',
    height: '100%',
    maxWidth: '80rem',
  },
  inputWrapper: {
    width: '24rem',
    padding: '0.25rem',
    paddingRight: '3.5rem',
    borderRadius: '9999px',
    color: 'rgb(255, 255, 255)',
    background: 'rgb(63, 63, 70)',
  },
  input: {
    fontSize: '1rem',
    color: 'rgb(255, 255, 255)',
    background: 'rgb(63, 63, 70)',

    '&:focus': {
      borderColor: 'rgb(165, 243, 252) !important',
    },
  },
  inputRightSection: {
    right: '1rem',
  },
}));
