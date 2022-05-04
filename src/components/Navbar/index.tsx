import React from 'react';
import {
  createStyles, Header, Container, Text, ThemeIcon, Group,
} from '@mantine/core';
import { SquarePlus } from 'tabler-icons-react';

const useStyles = createStyles(() => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
}));

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <Header height={60} mb={120}>
      <Container fluid className={classes.header}>
        <Group>
          <ThemeIcon size={30} variant="gradient">
            <SquarePlus />
          </ThemeIcon>
          <Text transform="uppercase" variant="gradient" weight="bold">Flow creation</Text>
        </Group>
      </Container>
    </Header>
  );
};

export default Navbar;
