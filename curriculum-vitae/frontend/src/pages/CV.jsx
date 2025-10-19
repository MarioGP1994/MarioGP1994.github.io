import React, { useState } from 'react';
import { cvData } from '../data/mockData';
import {
  Mail,
  Github,
  Linkedin,
  Link,
  Globe,
  Download,
  ChevronDown,
  Send
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Progress } from '../components/ui/progress';
import { toast } from '../hooks/use-toast';
import PROFILE from '/assets/profile.jpg';

const CV = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleDownloadCV = () => {
  toast({
    title: "CV Download",
    description: "Your CV will be downloaded shortly",
  });

  const link = document.createElement("a");
  link.href = "/MyCV.pdf"; 
  link.download = "MyCV.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
};

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast({ title: 'Mensaje enviado!', description: 'Gracias por contactarme!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({ title: 'Error', description: data.error || 'No se pudo enviar el mensaje' });
      }
    } catch (err) {
      toast({ title: 'Error', description: 'No se pudo conectar con el servidor' });
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 to-teal-100/30 dark:from-orange-900/10 dark:to-teal-900/10"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-block">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-400 to-teal-500 p-1 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-teal-600">
                {PROFILE ? <img src={PROFILE} alt={cvData.personal.name} className="w-full h-full rounded-full object-cover" /> : cvData.personal.name.split(' ').map(n => n[0]).join('').toUpperCase()}
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
              {cvData.personal.name}
            </h1>
            <p className="text-2xl md:text-3xl text-orange-600 dark:text-orange-400 font-semibold">
              {cvData.personal.title}
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {cvData.personal.tagline}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="border-2 border-orange-500 text-orange-600 dark:text-orange-400 dark:border-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            {[{ icon: Mail, value: "gpmario[at]gmail[dot]com", href: `mailto:${cvData.personal.email}` },
              { icon: Github, value: 'GitHub', href: cvData.personal.github },
              { icon: Linkedin, value: 'LinkedIn', href: cvData.personal.linkedin },
              { icon: Globe, value: 'Portfolio', href: cvData.personal.portfolio }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transform hover:scale-110 transition-all duration-300"
                title={item.value}
              >
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            About Me
          </h2>
          <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-2 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 md:p-12 space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {cvData.about.summary}
              </p>
              <div className="grid md:grid-cols-2 gap-4 pt-6">
                {cvData.about.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-teal-500 mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                    <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Soft Skills
          </h2>

          <Card className="bg-white/80 dark:bg-gray-800/80 border-2 shadow-lg max-w-3xl mx-auto">
            <CardContent className="space-y-4">
              {Object.entries(cvData['soft skills']).map(([key, skill]) => (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hard Skills Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Hard Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(cvData['hard skills']).map(([category, hardSkills]) => (
              <Card key={category} className="bg-white/80 dark:bg-gray-800/80 border-2 shadow-lg">
                <CardHeader>
                  <CardTitle className="capitalize text-orange-600 dark:text-orange-400">{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hardSkills.map((hardSkill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between text-sm mb-1">
                        <span>{hardSkill.name}</span>
                        <span>{hardSkill.level}%</span>
                      </div>
                      <Progress value={hardSkill.level} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Experience
          </h2>
          <div className="space-y-8">
            {cvData.experience.map((exp) => (
              <Card key={exp.id} className="bg-white/80 dark:bg-gray-800/80 border-2 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <span>{exp.position}</span>
                    <span className="text-sm text-gray-500">{exp.duration}</span>
                  </CardTitle>
                  <CardDescription>{exp.company} — {exp.location}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p>{exp.description}</p>
                  <ul className="pl-6 text-sm space-y-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 group">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-teal-500 mt-2 group-hover:scale-150 transition-transform duration-300" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cvData.projects.map((project) => (
              <Card key={project.id} className="bg-white/80 dark:bg-gray-800/80 border-2 shadow-lg">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline">{tech}</Badge>
                    ))}
                  </div>

                  <ul className="pl-6 text-sm space-y-1">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 group">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-teal-500 mt-1.5 group-hover:scale-150 transition-transform duration-300" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-orange-600 hover:underline"
                      >
                        <Github className="h-4 w-4" /> GitHub
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-orange-600 hover:underline"
                      >
                        <Link className="h-4 w-4" /> Link
                      </a>
                    )}
                  </div>
                </CardContent>

              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="space-y-8">
            {cvData.education.map((edu) => (
              <Card key={edu.id} className="bg-white/80 dark:bg-gray-800/80 border-2 shadow-lg">
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription>{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{edu.duration}</p>
                  <p>GPA: {edu.gpa}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cvData.certifications.map(cert => (
              <Card key={cert.id} className="bg-white/80 dark:bg-gray-800/80 border-2 shadow-lg">
                <CardHeader>
                  <CardTitle>{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Date: {cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* English Exam Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">
            English Exam Results
          </h2>
          {cvData.englishExamResults.map((exam) => (
            <Card key={exam.id} className="bg-white/80 dark:bg-gray-800/80 border-2 shadow-lg mb-8">
              <CardHeader>
                <CardTitle>{exam.level}</CardTitle>
                <CardDescription>Date: {exam.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Overall Score: {exam["overall score"]}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                  {Object.entries(exam.score).map(([section, score]) => (
                    <div key={section}>
                      <p className="capitalize font-medium">{section.replace(/_/g, ' ')}</p>
                      <Progress value={score / 2} />
                      <p className="text-sm text-gray-500 mt-1">{score}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Volunteering Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-orange-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">
            Volunteering Experience
          </h2>

          {cvData.volunteering.map((vol) => (
            <Card
              key={vol.id}
              className="bg-white/80 dark:bg-gray-800/80 border-2 shadow-lg mb-8"
            >
              <CardHeader>
                <CardTitle className="flex justify-between">
                  <span>{vol.role || "Role"}</span>
                  <span className="text-sm text-gray-500">{vol.duration}</span>
                </CardTitle>
                <CardDescription className="text-left">
                  {vol.type || "Type of volunteering"}, {vol.company} — {vol.location}
                </CardDescription>
              </CardHeader>

              {vol.description && (
                <CardContent>
                  {/* Custom bullet points using div */}
                  <div className="flex flex-col items-start space-y-2 text-left">
                    {vol.id === 1 && (
                      <>
                        <div className="flex items-start group">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-teal-500 mt-1.5 group-hover:scale-150 transition-transform duration-300" />
                          <span className="ml-3">
                            Participated in three social projects (prevention services, summer camps, and the Three Wise Men's season).
                          </span>
                        </div>
                        <div className="flex items-start group">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-teal-500 mt-1.5 group-hover:scale-150 transition-transform duration-300" />
                          <span className="ml-3">
                            Developed problem-solving, leadership, and adaptability skills.
                          </span>
                        </div>
                        <div className="flex items-start group">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-teal-500 mt-1.5 group-hover:scale-150 transition-transform duration-300" />
                          <span className="ml-3">
                            Worked with children and adolescents from vulnerable or unstable family backgrounds, at risk of social exclusion.
                          </span>
                        </div>
                      </>
                    )}
                    {vol.id === 2 && (
                      <>
                        <div className="flex items-start group">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-teal-500 mt-1.5 group-hover:scale-150 transition-transform duration-300" />
                          <span className="ml-3">
                            Currently developing a web application for appointment management to assist individuals recovering from alcohol addiction.
                          </span>
                        </div>
                        <div className="flex items-start group">
                          <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-teal-500 mt-1.5 group-hover:scale-150 transition-transform duration-300" />
                          <span className="ml-3">
                            Using React for the front-end, Java (Spring Boot, microservices) for the back-end, and PostgreSQL and MySQL for the database.
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </section>


      {/* Rewards Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white">
            Awards & Recognitions
          </h2>

          {cvData.reward.map((reward) => (
            <Card
              key={reward.id}
              className="bg-white/80 dark:bg-gray-800/80 border-2 shadow-lg mb-8 overflow-hidden"
            >
              <CardHeader>
                <CardTitle className="flex justify-between text-left">
                  <span className="block">{reward.recognition || "Recognition Title"}</span>
                  <span className="block text-sm text-gray-500">{reward.issuer} — {reward.date}</span>
                </CardTitle>
                <CardDescription className="text-left">
                  {reward.description || "Short description or mention here"}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-start gap-6">
                  {/* Imagen */}
                  {reward.image ? (
                    <img
                      src={reward.image}
                      alt={reward.recognition}
                      className="w-64 h-full object-contain object-left rounded-xl shadow-md"
                    />
                  ) : (
                    <div className="w-64 h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl text-gray-400">
                      No image available
                    </div>
                  )}

                  {/* Texto */}
                  <div className="flex-1 text-left">
                    <p>{reward.speech}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-orange-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
          <Card className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-2 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center text-gray-600 dark:text-gray-400">
        <p className="text-sm">
          © 2025 {cvData.personal.name}. Built with React and Node.js.
        </p>
        <p className="text-xs mt-2 text-gray-500 dark:text-gray-500">
          Designed with passion for creating amazing web experiences.
        </p>
      </footer>
    </div>
  );
};

export default CV;
