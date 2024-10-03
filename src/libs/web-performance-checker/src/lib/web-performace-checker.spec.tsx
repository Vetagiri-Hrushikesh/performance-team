import { render } from '@testing-library/react';

import WebPerformaceChecker from './web-performace-checker';

describe('WebPerformaceChecker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebPerformaceChecker />);
    expect(baseElement).toBeTruthy();
  });
});
