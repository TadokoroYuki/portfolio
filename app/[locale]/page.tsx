import { notFound } from 'next/navigation';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ContactSection from '@/app/components/ContactSection';
import { getDictionary, isLocale } from '@/app/i18n';

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <main id="main-content" className="min-h-screen">
      {/* Hero Section */}
      <HeroSection dict={dict.hero} />

      {/* About Section */}
      <AboutSection dict={dict.about} />

      {/* Skills Section */}
      <SkillsSection dict={dict.skills} />

      {/* Projects Section */}
      <ProjectsSection dict={dict.projects} />

      {/* Contact Section */}
      <ContactSection dict={dict.contact} />
    </main>
  );
}
