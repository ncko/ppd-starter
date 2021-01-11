import React from 'react'
import faker from 'faker'
import { render } from '@/test-utils'
import SmallScreenTopBarItem from './SmallScreenTopBarItem'

describe('SmallScreenTopBarItem', () => {
  it("render a submenu with a title if provided with type 'submenu'", () => {
    const title = faker.lorem.word()
    const { getByText } = render(
      <SmallScreenTopBarItem type="submenu" submenuTitle={title}>
        <span />
      </SmallScreenTopBarItem>
    )

    expect(getByText(title)).toBeInTheDocument()
  })

  it('renders children', () => {
    const children = faker.lorem.word()
    const { getByText } = render(
      <SmallScreenTopBarItem>
        <span>{children}</span>
      </SmallScreenTopBarItem>
    )

    expect(getByText(children)).toBeInTheDocument()
  })
})
