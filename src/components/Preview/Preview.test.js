import { render } from '@testing-library/react';
import Preview from './Preview';

test(`renders the Preview panel`, () => {
  const container = render(<Preview head="duck" middle="blue" bottom="blue" />);
  expect(container).toMatchSnapshot();
});
