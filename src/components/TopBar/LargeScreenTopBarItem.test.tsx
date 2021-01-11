import React from 'react'
import * as faker from 'faker'
import { render } from '@/test-utils'
import LargeScreenTopBarItem from './LargeScreenTopBarItem'

describe('LargeScreenTopBarItem', () => {
  it("render a submenu with a title if provided with type 'submenu'", () => {
    const title = faker.lorem.word()
    const { getByText } = render(
      <LargeScreenTopBarItem type="submenu" submenuTitle={title}>
        <span />
      </LargeScreenTopBarItem>
    )

    expect(getByText(title)).toBeInTheDocument()
  })

  it('renders a submenu with an icon if provided', () => {
    const iconText = faker.lorem.word()
    const icon = <span>{iconText}</span>
    const { getByText } = render(
      <LargeScreenTopBarItem type="submenu" icon={icon}>
        <span />
      </LargeScreenTopBarItem>
    )

    expect(getByText(iconText)).toBeInTheDocument()
  })

  it('renders children', () => {
    const children = faker.lorem.word()
    const { getByText } = render(
      <LargeScreenTopBarItem>
        <span>{children}</span>
      </LargeScreenTopBarItem>
    )

    expect(getByText(children)).toBeInTheDocument()
  })
})
