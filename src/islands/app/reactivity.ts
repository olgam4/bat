import { useI18n } from '@solid-primitives/i18n'


const createApp = () => {
  const [_, { locale }] = useI18n()

  const phoneCall = async (callback: (data: any) => void) => {
    const response = await fetch('/api/phone', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: '+3475307972',
      }),
    })
    const data = await response.json()

    callback(data)
  }

  const nextLanguage = () => {
    const next = locale() === 'en' ? 'fr' : 'en'
    locale(next)
  }

  return {
    phoneCall,
    nextLanguage,
  }
}

export {
  createApp,
}
