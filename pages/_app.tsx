import 'tailwindcss/tailwind.css'
import CurrentUserContext, { currentUser } from '../context'

function MyApp({ Component, pageProps }) {
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Component {...pageProps} />
    </CurrentUserContext.Provider>
  )
}

export default MyApp
