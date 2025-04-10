import { ThemeProvider } from "@/context/theme-context"
import { StyledEngineProvider } from "@mui/material/styles"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "AI Chatbot",
  description: "A full-stack chatbot application with authentication",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider>{children}</ThemeProvider>
        </StyledEngineProvider>
      </body>
    </html>
  )
}