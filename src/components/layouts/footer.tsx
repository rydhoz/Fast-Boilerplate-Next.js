export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Fast Boilerplate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}