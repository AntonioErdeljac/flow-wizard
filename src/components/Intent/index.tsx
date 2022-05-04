import React from 'react';
import { Timeline } from '@mantine/core';

import IntentHeader from '../IntentHeader';
import IntentExpression from '../IntentExpression';
import IntentReply from '../IntentReply';
import { iconsMap } from '../../constants';


type Props = {
  data: any;
};

const Intent: React.FC<Props> = ({ data }) => {
  console.log(data);
  
  return (
  <Timeline>
    <Timeline.Item>
      <IntentHeader title={`${data.name} Intent`} icon={iconsMap[data.icon]} description={`Trigger response on user ${data.name}`} />
    </Timeline.Item>
    <Timeline.Item>
      <IntentExpression description={data.description} expressions={data.trainingData.expressions} />
    </Timeline.Item>
    <Timeline.Item>
      <IntentReply description="The bot responds" reply={data.reply} />
    </Timeline.Item>
  </Timeline>
);
  }

export default Intent;