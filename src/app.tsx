import { useState } from 'react'

export const App: React.FC = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <header>
        <h1>Hello, World!</h1>
      </header>
      <p>This is your home page.</p>
      <button type="button" onClick={() => setVisible((state) => !state)}>
        {visible ? 'Hide' : 'Show'}
      </button>
      {visible && <p>Now you see me!</p>}
    </div>
  )
}
