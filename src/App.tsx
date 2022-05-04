import React, { useCallback, useState } from 'react';
import { AppShell, Container, MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { find } from 'lodash';

import { Sidebar } from './components';
import { Intent } from './fragments';

import intents from './intents.json';
import { useLocalStorage } from '@mantine/hooks';

function App() {
  const [activeIntent, setActiveIntent] = useState(() => intents[0].id);

  const handleChange = useCallback((id) => {
    setActiveIntent(id);
  }, []);

  const handleSave = useCallback((values) => {
    console.log(values)
  }, []);

  return (
    <MantineProvider theme={{ 
      fontFamily: 'Satoshi',
     }}>
       <NotificationsProvider>
        <AppShell
          navbar={<Sidebar onChange={handleChange} active={activeIntent} />}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <Container style={{ minHeight: '100vh' }}>
            <Intent id={activeIntent} key={activeIntent} onSave={handleSave} data={find(intents, { id: activeIntent })} />
          </Container>
        </AppShell>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default App;
