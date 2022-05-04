import React from 'react';
import {
  Navbar, Group, Code, Text, Badge,
} from '@mantine/core';

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
        <Badge style={{ cursor: 'pointer' }} color={item.id === active ? 'blue' : 'gray'} ml="md">{item.trainingData.expressionCount}</Badge>
      </a>
    );
  });

  return (
    <Navbar style={{ minHeight: '100vh' }} width={{ sm: 300 }} p="md">
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Text transform="uppercase" weight="bold">Flow Wizard</Text>
          <Code sx={{ fontWeight: 700 }}>v0.1.0</Code>
        </Group>
        {links}
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
