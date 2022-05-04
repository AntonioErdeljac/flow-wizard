import { render, screen } from '@testing-library/react';
import { Users } from 'tabler-icons-react';

import IntentHeader from './index';

test('Renders correct Title, Description', () => {
  const title = 'Lorem';
  const description = 'Ipsum';

  //@ts-ignore
  render(<IntentHeader title={title} description={description} icon={Users} />);

  const titleElement = screen.getByText(/Lorem/i);
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = screen.getByText(/Ipsum/i);
  expect(descriptionElement).toBeInTheDocument();
});
