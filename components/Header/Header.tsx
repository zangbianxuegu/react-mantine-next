import { Group, Anchor, Image } from '@mantine/core';
import useStyles from './Header.style';
import { HeaderSearch } from './HeaderSearch';

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header({ setQuery }: Props) {
  const { classes } = useStyles();

  return (
    <Group className={classes.headerWrapper}>
      <Group position="apart" className={classes.header}>
        <Anchor href="/">
          <Image width={150} src="/rmdb-logo.svg" alt="rmdb logo" />
        </Anchor>
        <HeaderSearch setQuery={setQuery} />
      </Group>
    </Group>
  );
}
