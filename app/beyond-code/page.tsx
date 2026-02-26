'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ExternalLink } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export default function BeyondCodePage() {
  return (
    <div className="bg-white dark:bg-slate-950 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 mb-10 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Link>

        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">Beyond the  Code Journey in Tech </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.beyondCode.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative w-full h-44 bg-gray-100 dark:bg-slate-800">
                {item.thumbnail ? (
                  item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </a>
                  ) : (
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-sm text-gray-500 dark:text-gray-400">🖼️ Photo placeholder</div>
                )}
              </div>

              <div className="p-4">
                <div className="mb-2">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.type} • {item.date}</p>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{item.description}</p>

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open link
                  </a>
                ) : (
                  <span className="inline-flex items-center px-3 py-2 text-sm rounded border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400">
                    Add link later
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <hr className="border-gray-800 dark:border-gray-700 my-10" />

        <footer className="text-center text-gray-500 dark:text-gray-400 text-sm">
          &copy; 2025 Gerlie Daga-as. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
