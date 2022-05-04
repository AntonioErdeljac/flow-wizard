import React from 'react';
import { Navbar, Group, Code, Text } from '@mantine/core';

import { useStyles } from './styles';

import data from '../../intents.json';
import { iconsMap } from '../../constants';

type Props = {
  onChange: (id: string) => void,
  active: string;
};

const Sidebar: React.FC<Props> = ({ onChange, active }) => {
  const { classes, cx } = useStyles();

  const links = data.map((item) => {
    const Icon = iconsMap[item.icon as any];

    return (
      <a
        className={cx(classes.link, { [classes.linkActive]: item.id === active })}
        href={item.id}
        key={item.id}
        onClick={(event) => {
          event.preventDefault();
          onChange(item.id);
        }}
      >
        <Icon className={classes.linkIcon} />
        <span>{item.name}</span>
      </a>
    )
  });

  return (
    <Navbar height={700} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Text transform="uppercase" weight="bold">Flow Wizard</Text>
          <Code sx={{ fontWeight: 700 }}>v0.0.1</Code>
        </Group>
        {links}
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
