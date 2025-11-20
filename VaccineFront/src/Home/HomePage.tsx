import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'





export default function HomePage() {
  console.log("HOME")

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="mb-16">
        <h2 className="mb-4">BTG VACINAS</h2>
        <p className="text-[#6C757D] max-w-2xl">
          A comprehensive system for managing vaccination records with enterprise-grade security and reliability.
          Register individuals, vaccines, and maintain complete vaccination history.
        </p>
      </div>

      {/* Decorative stripe */}
      <div className="h-1 w-24 bg-gradient-to-r from-[#307AE0] to-[#549CFF] mb-12"></div>

      {/* Additional info section */}
      <div className="mt-16 p-8 bg-[#D2E5FF] border-l-4 border-[#001E62]">
        <h4 className="mb-2">System Guidelines</h4>
        <ul className="space-y-2 text-[#001E62]">
          <li className="flex gap-2">
            <span>•</span>
            <span>All vaccination records are securely stored and maintained</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Each person and vaccine requires a unique identifier</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Vaccination records include dose number and application date</span>
          </li>
          <li className="flex gap-2">
            <span>•</span>
            <span>Access API documentation for integration capabilities</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
