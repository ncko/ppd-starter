import React from 'react'
import { render, fireEvent } from '../testUtils'
import Dashboard from '../../pages/index'

describe('Home page', () => {
  it('clicking button triggers alert', () => {
    const { getByText } = render(<Dashboard />, {})
  })
})
