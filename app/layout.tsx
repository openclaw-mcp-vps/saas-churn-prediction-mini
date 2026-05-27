import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ChurnGuard — Simple SaaS Churn Prediction for Small Teams',
  description: 'Lightweight churn prediction using basic usage metrics. Get early warning alerts and retention action suggestions for your SaaS.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="05c516e2-73d6-4806-b341-02a9919d0da5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
