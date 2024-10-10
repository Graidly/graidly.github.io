import Layout from '../../../lecturalm.github.io/src/components/layout/layout'
import './globals.css'
import React from "react";

export const metadata = {
  title: 'LecturaLM',
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