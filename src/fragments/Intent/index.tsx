import React from 'react';
import { Button, Center, Timeline } from '@mantine/core';
import { DeviceFloppy, PlayerPlay, PlayerStop } from 'tabler-icons-react';

import { useIntent } from './hooks';

import { IntentHeader, IntentExpression, IntentReply } from '../../components';
import { iconsMap } from '../../constants';


type Props = {
  data: any;
  onSave: (values: Record<string, any>) => void;
  id: string;
};

const Intent: React.FC<Props> = ({ id, data, onSave }) => {
  const [
    loading,
    expressions,
    reply,
    enabled,
    handleSave,
    handleExpressionsChange,
    handleReplyChange,
    handleEnable
  ] = useIntent({ data, id, onSave });


  return (
    <>
      <Timeline>
        <Timeline.Item>
          <IntentHeader title={`${data.name} Intent`} icon={iconsMap[data.icon]} description={`Trigger response on user ${data.name}`} />
        </Timeline.Item>
        <Timeline.Item>
          <IntentExpression 
            onChange={handleExpressionsChange} 
            description={data.description} 
            expressions={data.trainingData.expressions.map((expression: any) => ({ value: expression.id, label: expression.text }))}
            values={expressions}
          />
        </Timeline.Item>
        <Timeline.Item>
          <IntentReply 
            onChange={handleReplyChange}
            description="The bot responds" 
            reply={[{ value: data.reply.id, label: data.reply.text }]}
            value={reply}
          />
        </Timeline.Item>
      </Timeline>
      <Center mt="xl">
        <Button 
          loading={loading} 
          onClick={handleEnable} 
          variant="light" 
          rightIcon={enabled ? <PlayerStop size={20} /> : <PlayerPlay size={20} />}
        >
          {enabled ? 'Stop' : 'Enable'}
        </Button>
        <Button loading={loading} onClick={handleSave} ml="md" mr="md" rightIcon={<DeviceFloppy size={20} />}>Save</Button>
      </Center>
    </>
  );
  }

export default Intent;