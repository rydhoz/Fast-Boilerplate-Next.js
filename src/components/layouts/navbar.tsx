import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white">
              <span className="text-lg font-bold">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Fast Boilerplate
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}