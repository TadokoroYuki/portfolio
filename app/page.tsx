import AboutSection from './components/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Under Construction
          </p>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Skills section coming soon...
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Projects section coming soon...
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Contact section coming soon...
          </p>
        </div>
      </section>
    </main>
  );
}
