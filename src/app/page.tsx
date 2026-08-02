export default function HomePage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[--color-border] bg-[--color-background]">
        <div className="container py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[--color-primary]">
            My App
          </h1>
          <button
            onClick={() => document.documentElement.classList.toggle("dark")}
            className="px-4 py-2 rounded-[--radius] bg-[--color-primary] text-white hover:opacity-80 transition-opacity"
          >
            Toggle Dark Mode
          </button>
        </div>
      </header>

      <main className="container py-12">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[--color-foreground]">
            Welcome to Your Next.js App
          </h2>
          <p className="text-lg text-[--color-muted-foreground] max-w-2xl mx-auto">
            This is a simple boilerplate with Tailwind CSS v4 and dark mode support.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-[--radius] bg-[--color-card] border border-[--color-border] shadow-[--shadow]">
            <h3 className="text-xl font-semibold mb-2 text-[--color-card-foreground]">
              Fast
            </h3>
            <p className="text-[--color-muted-foreground]">
              Built with Next.js 16 and Turbopack for blazing fast development.
            </p>
          </div>

          <div className="p-6 rounded-[--radius] bg-[--color-card] border border-[--color-border] shadow-[--shadow]">
            <h3 className="text-xl font-semibold mb-2 text-[--color-card-foreground]">
              Modern
            </h3>
            <p className="text-[--color-muted-foreground]">
              Uses Tailwind CSS v4 with custom theming and dark mode support.
            </p>
          </div>

          <div className="p-6 rounded-[--radius] bg-[--color-card] border border-[--color-border] shadow-[--shadow]">
            <h3 className="text-xl font-semibold mb-2 text-[--color-card-foreground]">
              Ready
            </h3>
            <p className="text-[--color-muted-foreground]">
              Pre-configured with ESLint, Prettier, and TypeScript.
            </p>
          </div>
        </section>

        <div className="mt-12 text-center">
          <button className="btn btn-destructive mr-4">
            Primary Button
          </button>
          <button className="btn">
            Secondary Button
          </button>
        </div>
      </main>

      <footer className="border-t border-[--color-border] py-6 mt-12">
        <div className="container text-center text-[--color-muted-foreground]">
          <p>© {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}