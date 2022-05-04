import React, { useCallback, useState } from 'react';
import { Button, Center, Timeline } from '@mantine/core';

import IntentHeader from '../IntentHeader';
import IntentExpression from '../IntentExpression';
import IntentReply from '../IntentReply';
import { iconsMap } from '../../constants';
import { DeviceFloppy, PlayerPlay, PlayerStop } from 'tabler-icons-react';
import { useLocalStorage } from '@mantine/hooks';

const FAKE_NETWORK_DELAY_MS = 1000;

type Props = {
  data: any;
  onSave: (values: Record<string, any>) => void;
  id: string;
};

const formatExpressions = (value: any) => value.trainingData.expressions.map((expression: any) => expression.id);
const formatReply = (value: any) => [value.reply.id];

const Intent: React.FC<Props> = ({ id, data, onSave }) => {

  const [intentsData, setIntentsData] = useLocalStorage({ key: id , defaultValue: { 
    expressions: formatExpressions(data),
    reply: formatReply(data),
    enabled: false,
  }});

  const [loading, setLoading] = useState(false);
  const [expressions, setExpressions] = useState(() => intentsData.expressions || formatExpressions(data)); 
  const [reply, setReply] = useState(() => intentsData.reply || formatExpressions(data));
  const [enabled, setEnabled] = useState(() => intentsData.enabled || false);

  const handleSave = useCallback(() => {
    setLoading(true);
    setIntentsData((current) => ({
     ...current,
      reply,
      expressions,
    }));
    setTimeout(() => {
      setLoading(false);
    }, FAKE_NETWORK_DELAY_MS);
  }, [reply, expressions, setIntentsData]);

  const handleExpressionsChange = useCallback((value) => {
    setExpressions(value)
  }, []);

  const handleReplyChange = useCallback((value) => {
    setReply(value)
  }, []);

  const handleEnable = useCallback(() => {
    setLoading(true);
    setIntentsData((current) => ({
      ...current,
      enabled: !current.enabled,
    }));
    setTimeout(() => {
      setLoading(false);
      setEnabled((current) => !current);
    }, FAKE_NETWORK_DELAY_MS);
  }, [setIntentsData]);


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