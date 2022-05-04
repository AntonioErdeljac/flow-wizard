import { useCallback, useState } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';

const FAKE_NETWORK_DELAY_MS = 1000;

const formatExpressions = (value: any) => value.trainingData.expressions.map((expression: any) => expression.id);
const formatReply = (value: any) => [value.reply.id];

export const useIntent = ({ data, id }: { data: any, id: string }) => {
  const [intentsData, setIntentsData] = useLocalStorage({
    key: id,
    defaultValue: {
      expressions: formatExpressions(data),
      reply: formatReply(data),
      enabled: false,
    },
  });

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
      showNotification({ title: 'Successfully Saved', message: `${data.name} Intent has been updated.` });
    }, FAKE_NETWORK_DELAY_MS);
  }, [reply, expressions, setIntentsData, data.name]);

  const handleExpressionsChange = useCallback((value) => {
    setExpressions(value);
  }, []);

  const handleReplyChange = useCallback((value) => {
    setReply(value);
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
      showNotification({ title: `Successfully ${enabled ? 'Stopped' : 'Enabled'}`, message: `${data.name} Intent has been ${enabled ? 'stopped' : 'enabled'}.` });
    }, FAKE_NETWORK_DELAY_MS);
  }, [setIntentsData, data.name, enabled]);

  return [
    loading,
    expressions,
    reply,
    enabled,
    handleSave,
    handleExpressionsChange,
    handleReplyChange,
    handleEnable,
  ] as any;
};
