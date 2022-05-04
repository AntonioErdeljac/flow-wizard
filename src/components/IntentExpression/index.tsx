import React from 'react';
import {  Group, MultiSelect, Paper, Text, ThemeIcon } from '@mantine/core';
import { PlayerPlay } from 'tabler-icons-react';

type Props = {
  description: string;
  expressions: Record<string, any>[];
};

const IntentExpression: React.FC<Props> = ({ description, expressions = [] }) => {
  return (
    <Paper radius="md" withBorder p="lg">
      <Group mb="xl">
        <ThemeIcon variant="light" size={60} radius={60}>
          <PlayerPlay size={30} />
        </ThemeIcon>
        <Group direction="column" spacing={0}>
          <Text weight={500}>When...</Text>
          <Text color="dimmed">{description}</Text>
        </Group>
      </Group>
      <MultiSelect label="Expressions" data={expressions.map((expression) => ({ value: expression.id, label: expression.text }))} />
    </Paper>
  );
}

export default IntentExpression;