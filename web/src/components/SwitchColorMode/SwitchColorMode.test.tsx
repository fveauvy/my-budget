import { render } from '@redwoodjs/testing/web'

import SwitchColorMode from './SwitchColorMode'

describe('SwitchColorMode', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SwitchColorMode />)
    }).not.toThrow()
  })
})
