import { render, screen } from '@testing-library/react';

import IntentReply from './index';

test('Renders Description', () => {
  const description = 'Ipsum';

  //@ts-ignore
  render(<IntentReply reply={[]} onChange={() => {}} value={[]} description={description} />);

  const descriptionElement = screen.getByText(/Ipsum/i);
  expect(descriptionElement).toBeInTheDocument();
});
