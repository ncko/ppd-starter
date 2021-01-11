import React, { FunctionComponent, ReactElement } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'

import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'

interface WrapperOptions {
  themeWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const defaultsWrapperOptions: WrapperOptions = {
  themeWidth: 'md',
}

export const createWrapper = (options?: WrapperOptions): FunctionComponent => {
  const _options = {
    ...defaultsWrapperOptions,
    ...options,
  }

  return ((props) => {
    const theme = createMuiTheme({
      props: { MuiWithWidth: { initialWidth: _options.themeWidth || 'md' } },
    })

    return (
      <ThemeProvider theme={theme}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </ThemeProvider>
    )
  }) as FunctionComponent
}

interface CustomRenderOptions {
  wrapperOptions?: WrapperOptions
  renderOptions?: RenderOptions
}

export const render = (
  ui: ReactElement,
  options?: CustomRenderOptions
): ReturnType<typeof rtlRender> => {
  const { wrapperOptions, renderOptions } = options || {}

  return {
    ...rtlRender(ui, {
      wrapper: createWrapper(wrapperOptions),
      ...renderOptions,
    }),
  }
}

export * from '@testing-library/react'
