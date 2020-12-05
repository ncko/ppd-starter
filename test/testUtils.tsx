import { render } from '@testing-library/react'
import {ThemeProvider} from "@material-ui/styles";
import {FunctionComponent, ReactNode} from "react";
import theme from '../src/theme'

interface Props {
  children: ReactNode
}

const Providers: FunctionComponent<Props> = ({ children }: Props) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
