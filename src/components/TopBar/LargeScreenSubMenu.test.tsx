import React from 'react'
import * as faker from 'faker'
import { render } from '@/test-utils'
import LargeScreenSubMenu from './LargeScreenSubMenu'

describe('LargeScreenSubMenu', () => {
  it('renders title', () => {
    const title = faker.lorem.word()
    const { getByText } = render(
      <LargeScreenSubMenu title={title}>
        <span />
      </LargeScreenSubMenu>
    )

    expect(getByText(title)).toBeInTheDocument()
  })

  it('renders icon', () => {
    const iconText = faker.lorem.word()
    const icon = <span>{iconText}</span>
    const { getByText } = render(
      <LargeScreenSubMenu icon={icon}>
        <span />
      </LargeScreenSubMenu>
    )

    expect(getByText(iconText)).toBeInTheDocument()
  })

  it('renders children', () => {
    const children = faker.lorem.word()
    const { getByText } = render(
      <LargeScreenSubMenu>
        <span>{children}</span>
      </LargeScreenSubMenu>
    )

    expect(getByText(children)).toBeInTheDocument()
  })
})
