import Layout from '../../../capstone-website/src/components/layout/layout'
import './globals.css'
import React from "react";

export const metadata = {
  title: 'OpenTa',
  description: 'Capstone project for revolutionizing TA management',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body>
      <Layout>{children}</Layout>
      </body>
      </html>
  )
}