import toast from 'solid-toast'

import Button from "@components/button"

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

export default function () {
  const [t] = useI18n()

  return (
    <Button onClick={() => {
      phoneCall(console.log)
      toast.success(t('calling'))
    }}>
      <div class="i-carbon-phone-voice w-6 h-6" />
    </Button>
  )
}
