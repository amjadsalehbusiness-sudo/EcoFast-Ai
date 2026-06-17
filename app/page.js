'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Home() {
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    async function fetchBalance() {
      // یہاں ہم ڈیٹا بیس سے بیلنس نکال رہے ہیں
      const { data, error } = await supabase
        .from('profiles')
        .select('wallet_balance')
        .single()
      
      if (data) setBalance(data.wallet_balance)
    }
    fetchBalance()
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>MicroAI Wallet</h1>
      <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>آپ کا بیلنس: {balance} روپے</h2>
      </div>
    </div>
  )
}
