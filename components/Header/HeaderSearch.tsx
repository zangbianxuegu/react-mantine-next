import { Input, Image } from '@mantine/core';
import useStyles from './Header.style';

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export function HeaderSearch({ setQuery }: Props) {
  const { classes } = useStyles();

  return (
    <Input
      classNames={{
        wrapper: classes.inputWrapper,
        input: classes.input,
        rightSection: classes.inputRightSection,
      }}
      variant="filled"
      placeholder="Search for a movie"
      rightSection={<Image src="/tmdb-logo.svg" alt="tmdb logo" />}
      defaultValue=""
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
    />
  );
}
