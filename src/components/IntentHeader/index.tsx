import React from 'react';
import {
  Group, Paper, Text, ThemeIcon,
} from '@mantine/core';
import { Icon as IconType } from 'tabler-icons-react';

type Props = {
  title: string;
  icon: IconType;
  description: string;
}

const IntentHeader: React.FC<Props> = ({ title, icon: Icon, description }) => (
  <Paper radius="md" withBorder p="lg">
    <Group>
      <ThemeIcon variant="light" size={60} radius={60}>
        <Icon size={30} />
      </ThemeIcon>
      <Group direction="column" spacing={0}>
        <Text weight={500}>{title}</Text>
        <Text color="dimmed">{description}</Text>
      </Group>
    </Group>
  </Paper>
);

export default IntentHeader;
