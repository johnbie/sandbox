'use client'
 
import { useState, useEffect } from 'react'
 
export default function Posts() {
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
