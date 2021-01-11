import '@testing-library/jest-dom'
import React from 'react'
import { render } from '@/test-utils'
import { Images, Routes } from '@/constants'
import LargeScreenBar from './LargeScreenBar'
import * as faker from 'faker'

jest.mock('@/components/Link')

describe('LargeScreenBar', () => {
  let ui: ReturnType<typeof render>
  let children: string

  beforeEach(() => {
    children = faker.lorem.word()
    ui = render(
      <LargeScreenBar>
        <h1>{children}</h1>
      </LargeScreenBar>
    )
  })

  it('displays the logo with a link to the dashboard', () => {
    const { getByAltText } = ui
    const logo = getByAltText(Images.TopBarLogoAlt)
    expect(logo).toBeInTheDocument()
    expect(logo.closest('a')).toHaveAttribute('href', Routes.Dashboard)
  })

  it('renders children', () => {
    const { getByText } = ui
    expect(getByText(children)).toBeInTheDocument()
  })
})
