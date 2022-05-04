import React, { useCallback, useState } from 'react';
import { AppShell, Container, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { find } from 'lodash';

import intents from './intents.json';
import { Sidebar } from './components';
import { Intent } from './fragments';

function App() {
  const [activeIntent, setActiveIntent] = useState(() => intents[0].id);

  const handleChange = useCallback((id) => {
    setActiveIntent(id);
  }, []);

  return (
    <MantineProvider theme={{
      fontFamily: 'Satoshi',
    }}
    >
      <NotificationsProvider>
        <AppShell
          navbar={<Sidebar onChange={handleChange} active={activeIntent} />}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <Container style={{ minHeight: '100vh' }}>
            <Intent
              id={activeIntent}
              key={activeIntent}
              data={find(intents, { id: activeIntent })}
            />
          </Container>
        </AppShell>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
