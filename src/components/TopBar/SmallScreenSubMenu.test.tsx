import React from 'react'
import * as faker from 'faker'
import { render } from '@/test-utils'
import SmallScreenSubMenu from './SmallScreenSubMenu'

describe('SmallScreenSubMenu', () => {
  it('renders the title', () => {
    const title = faker.lorem.word()
    const { getByText } = render(
      <SmallScreenSubMenu title={title}>
        <span />
      </SmallScreenSubMenu>
    )

    expect(getByText(title)).toBeInTheDocument()
  })

  it('renders children', () => {
    const children = faker.lorem.word()
    const { getByText } = render(
      <SmallScreenSubMenu>
        <span>{children}</span>
      </SmallScreenSubMenu>
    )

    expect(getByText(children)).toBeInTheDocument()
  })
})
