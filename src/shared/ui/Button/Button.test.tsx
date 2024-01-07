import {render, screen} from '@testing-library/react'
import {Button, ThemeButton} from "shared/ui/Button/Button";

describe('Button', () => {
  test('is it a button?', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  test('with clear class', () => {
    render(
      <Button theme={ThemeButton.CLEAR}>
        TEST
      </Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
  })
})
