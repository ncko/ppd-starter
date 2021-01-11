import React from 'react'
import { render } from '@/test-utils'
import SmallScreenSubMenuItem from './SmallScreenSubMenuItem'
import * as faker from 'faker'

describe('SmallScreenSubMenuItem', () => {
  it('renders children', () => {
    const children = faker.lorem.word()
    const { getByText } = render(
      <SmallScreenSubMenuItem>
        <span>{children}</span>
      </SmallScreenSubMenuItem>
    )

    expect(getByText(children)).toBeInTheDocument()
  })
})
