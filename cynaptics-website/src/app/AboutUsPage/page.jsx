"use client"
import React from 'react'

export default function AboutUspage() {
  return (
    <div >
      this is about us page
      <style jsx>
        {`
          
          #body {
            width: 100%;
            height: 100%;
          }
          
          div {
            background: linear-gradient(45deg, #2196F3 0%, darken(#2196F3, 50%) 100%);
            background-size: 200% 200%;  
            height: 100vh;
            width: 100vw;
            animation: background 6s ease infinite;
          }
          
          @keyframes background { 
            0% {
              background-position: 0% 50%;
            }
            
            50% {
              background-position: 100% 50%;
            }
            
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </div>
  )
}
