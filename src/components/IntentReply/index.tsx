import React from 'react';
import { Group, MultiSelect, Paper, Text, ThemeIcon } from '@mantine/core';
import { Bolt } from 'tabler-icons-react';

type Props = {
  description: string;
  reply: any;
  onChange: (value: any) => void;
  value: any;
}

const IntentReply: React.FC<Props> = ({ description, reply = {}, onChange, value }) => {
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
      <MultiSelect onChange={onChange} value={value} label="Response" data={reply} />
    </Paper>
  );
}

export default IntentReply;