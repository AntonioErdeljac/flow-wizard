import React from 'react';
import { Group, MultiSelect, Paper, Text, ThemeIcon } from '@mantine/core';
import { Bolt } from 'tabler-icons-react';

type Props = {
  description: string;
  reply: Record<string, any>;
}

const IntentReply: React.FC<Props> = ({ description, reply = {} }) => {
  return (
    <Paper radius="md" withBorder p="md">
      <Group mb="xl">
        <ThemeIcon variant="light" size={60} radius={60}>
          <Bolt size={30} />
        </ThemeIcon>
        <Group direction="column" spacing={0}>
          <Text weight={500}>Then...</Text>
          <Text color="dimmed">{description}</Text>
        </Group>
      </Group>
      <MultiSelect label="Expressions" data={[{ value: reply.id, label: reply.text }]} />
    </Paper>
  );
}

export default IntentReply;