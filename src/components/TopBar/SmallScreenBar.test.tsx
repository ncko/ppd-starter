import React from 'react'
import { render, fireEvent } from '@/test-utils'
import faker from 'faker'
import { Images, Routes } from '@/constants'
import SmallScreenBar from './SmallScreenBar'

jest.mock('@/components/Link')

describe('SmallScreenBar', () => {
  let ui: ReturnType<typeof render>
  let children: string

  beforeEach(() => {
    children = faker.lorem.word()
    ui = render(
      <SmallScreenBar>
        <h1>{children}</h1>
      </SmallScreenBar>,
      {
        wrapperOptions: {
          themeWidth: 'sm',
        },
      }
    )
  })

  it('displays the logo with a link to the dashboard', () => {
    const { getByAltText } = ui
    const logo = getByAltText(Images.TopBarLogoAlt)
    expect(logo).toBeInTheDocument()
    expect(logo.closest('a')).toHaveAttribute('href', Routes.Dashboard)
  })

  it('renders children when opened', async () => {
    const { getByTestId, findByText } = ui
    fireEvent.click(getByTestId('mobile-menu-btn'))
    expect(await findByText(children)).toBeInTheDocument()
  })
})
