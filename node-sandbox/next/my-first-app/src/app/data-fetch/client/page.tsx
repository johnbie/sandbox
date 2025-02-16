'use client'
 
import { useState, useEffect } from 'react'
 
// http://localhost:3000/data-fetch/client
export default function Health() {
  const [data, setData] = useState(null)
 
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/health')
      const data = await res.json()
      setData(data)
    }
    fetchData()
  }, [])
 
  if (!data) return <div>Loading...</div>
 
  return (
    <div>
        data
    </div>
  )
}
