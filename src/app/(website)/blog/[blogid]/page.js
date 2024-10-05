"use client"
import React from 'react'

export default function BlogDetailPage({params:{blogid}}) {
    console.log (blogid)
  return (
    <div>
      <h2> Blog Detail Page {blogid} </h2>
    </div>
  )
}
