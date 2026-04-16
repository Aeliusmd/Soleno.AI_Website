import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY

const appTree = (
  <StrictMode>
    <App />
  </StrictMode>
)

createRoot(document.getElementById('root')!).render(
  recaptchaSiteKey ? (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      {appTree}
    </GoogleReCaptchaProvider>
  ) : (
    appTree
  ),
)
