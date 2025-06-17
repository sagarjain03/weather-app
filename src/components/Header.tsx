import { useTheme } from "@/context/theme-provider"


const Header = () => {

    const { theme, setTheme } = useTheme()
    const isDark = theme === "dark"

  return (
    <div className="sticky top-0 bg-background/50 backdrop-blur-sm dark:bg-background/80 border-b border-border">
      <div className="flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🌤️</span>
          <span className="text-xl font-bold tracking-wide text-primary">Weatherly</span>
        </div>
        <div>
          {/* search */}
          {/* themetoggle */}
          <button
            type="button"
            onClick={() => {
              setTheme(isDark ? "light" : "dark");
            }}
            className="px-3 py-1 rounded bg-muted text-foreground hover:bg-accent transition flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {isDark ? (
              // Sun icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
            ) : (
              // Moon icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
