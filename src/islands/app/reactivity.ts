const nextLanguage = () => {
  const [_, { locale }] = useI18n()
  const next = locale() === 'en' ? 'fr' : 'en'
  locale(next)
}

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

export {
  nextLanguage,
  phoneCall,
}
