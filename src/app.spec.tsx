import { render, screen } from '@testing-library/react'
import { userEvent } from '@vitest/browser/context'
import { describe, it, expect } from 'vitest'

import { App } from './app'

describe('<App />', () => {
  it('should render the welcome message', async () => {
    render(<App />)

    const heading = screen.getByRole('heading')

    expect(heading).toHaveTextContent('Hello, World!')

    expect(screen.getByText('This is your home page.')).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'Show' })

    await userEvent.click(button)

    expect(screen.getByText('Now you see me!')).toBeInTheDocument()
  })
})
