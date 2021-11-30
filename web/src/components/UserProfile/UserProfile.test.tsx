import { render } from '@redwoodjs/testing/web'

import UserProfile from './UserProfile'

describe('UserProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserProfile />)
    }).not.toThrow()
  })
})
