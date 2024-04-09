import { useTheme } from '../hooks/useTheme'

// styles
import './ThemeSelector.css'

const themecolors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
  const { changeColor } = useTheme()

  return (
    <div className='theme-selector'>
      <div className='theme-buttons'>
        {themecolors.map(color => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}
