import type { ReactNode } from "react"
import LayoutWrapper from "@/components/layout-wrapper"

interface ProductsLayoutProps {
  children: ReactNode
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}
