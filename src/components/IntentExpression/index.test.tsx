import { render, screen } from '@testing-library/react';

import IntentExpression from './index';

test('Renders Description', () => {
  const description = 'Ipsum';

  //@ts-ignore
  render(<IntentExpression expressions={[]} onChange={() => {}} value={[]} description={description} />);

  const descriptionElement = screen.getByText(/Ipsum/i);
  expect(descriptionElement).toBeInTheDocument();
});
