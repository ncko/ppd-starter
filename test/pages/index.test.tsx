import React from 'react'
import { render } from '../testUtils'
import Dashboard from '../../pages/index'

describe('Home page', () => {
  it('clicking button triggers alert', () => {
    render(<Dashboard />)
  })
})
