import { render } from '@testing-library/react';
import Preview from './Preview';

test(`renders the Preview panel`, () => {
  const container = render(<Preview head="duck" middle="red" bottom="white" />);
  expect(container).toMatchSnapshot();
});
