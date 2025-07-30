'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.greeting': 'Hola, soy Juan Pinto',
    'hero.title': 'Full Stack Developer',
    'hero.description': '**Especializado en JavaScript, TypeScript, MERN Stack, Next.js, GraphQL y Firebase.** **Creo aplicaciones web modernas y dinámicas con excelente experiencia de usuario.**',
    'hero.downloadCV': 'Descargar CV',
    'hero.viewProjects': 'Ver Proyectos',
    
    // About
    'about.title': 'Sobre Mí',
    'about.whoAmI': '¿Quién soy?',
    'about.description1': 'Soy un desarrollador Full Stack apasionado por crear aplicaciones web innovadoras y funcionales. Con experiencia en el stack MERN y tecnologías modernas como Next.js, GraphQL y Firebase.',
    'about.description2': 'Me especializo en desarrollar soluciones que combinan diseño atractivo con funcionalidad robusta, siempre pensando en la experiencia del usuario y el rendimiento de la aplicación.',
    'about.description3': 'Mi objetivo es crear aplicaciones que no solo funcionen perfectamente, sino que también proporcionen una experiencia de usuario excepcional.',
    'about.specialties': 'Mis Especialidades',
    'about.frontend': 'Frontend Development',
    'about.backend': 'Backend Development',
    'about.fullstack': 'Full Stack Solutions',
    'about.frontendDesc': 'Desarrollo de interfaces modernas con React, Next.js, TypeScript y Material-UI. Creo experiencias de usuario excepcionales.',
    'about.backendDesc': 'APIs robustas con Node.js, Express, MongoDB, GraphQL y Firebase. Arquitectura escalable y segura.',
    'about.fullstackDesc': 'Soluciones completas desde la concepción hasta el despliegue. Optimización SEO y rendimiento.',
    
    // Skills
    'skills.title': 'Mis Habilidades',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Herramientas & Otros',
    'skills.technologies': 'Tecnologías que domino',
    'skills.contactMe': '¿Te gusta mi trabajo?',
    'skills.contactButton': 'Contáctame',
    
    // Projects
    'projects.title': 'Mis Proyectos',
    'projects.code': 'Código',
    'projects.demo': 'Demo',
    'projects.likeWork': '¿Te gusta mi trabajo?',
    'projects.contactButton': 'Contáctame',
    
    // Contact
    'contact.title': 'Contáctame',
    'contact.letsTalk': '¡Hablemos!',
    'contact.description': '¿Tienes un proyecto en mente? ¿Quieres colaborar en algo interesante? ¡Me encantaría escuchar sobre tu idea! Estoy siempre abierto a nuevas oportunidades y proyectos desafiantes.',
    'contact.sendMessage': 'Envíame un mensaje',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.subject': 'Asunto',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.success': '¡Mensaje enviado con éxito! Te responderé pronto.',
    'contact.error': 'Error al enviar el mensaje. Inténtalo de nuevo.',
    
    // Footer
    'footer.description': 'Full Stack Developer especializado en crear experiencias web excepcionales',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.developed': 'Desarrollado con Next.js, TypeScript y Material-UI',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hello, I\'m Juan Pinto',
    'hero.title': 'Full Stack Developer',
    'hero.description': '**Specialized in JavaScript, TypeScript, MERN Stack, Next.js, GraphQL and Firebase.** **I create modern and dynamic web applications with excellent user experience.**',
    'hero.downloadCV': 'Download CV',
    'hero.viewProjects': 'View Projects',
    
    // About
    'about.title': 'About Me',
    'about.whoAmI': 'Who am I?',
    'about.description1': 'I am a Full Stack developer passionate about creating innovative and functional web applications. With experience in the MERN stack and modern technologies like Next.js, GraphQL and Firebase.',
    'about.description2': 'I specialize in developing solutions that combine attractive design with robust functionality, always thinking about user experience and application performance.',
    'about.description3': 'My goal is to create applications that not only work perfectly, but also provide an exceptional user experience.',
    'about.specialties': 'My Specialties',
    'about.frontend': 'Frontend Development',
    'about.backend': 'Backend Development',
    'about.fullstack': 'Full Stack Solutions',
    'about.frontendDesc': 'Development of modern interfaces with React, Next.js, TypeScript and Material-UI. I create exceptional user experiences.',
    'about.backendDesc': 'Robust APIs with Node.js, Express, MongoDB, GraphQL and Firebase. Scalable and secure architecture.',
    'about.fullstackDesc': 'Complete solutions from conception to deployment. SEO optimization and performance.',
    
    // Skills
    'skills.title': 'My Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools & Others',
    'skills.technologies': 'Technologies I master',
    'skills.contactMe': 'Do you like my work?',
    'skills.contactButton': 'Contact Me',
    
    // Projects
    'projects.title': 'My Projects',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.likeWork': 'Do you like my work?',
    'projects.contactButton': 'Contact Me',
    
    // Contact
    'contact.title': 'Contact Me',
    'contact.letsTalk': 'Let\'s Talk!',
    'contact.description': 'Do you have a project in mind? Want to collaborate on something interesting? I\'d love to hear about your idea! I\'m always open to new opportunities and challenging projects.',
    'contact.sendMessage': 'Send me a message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully! I\'ll get back to you soon.',
    'contact.error': 'Error sending message. Please try again.',
    
    // Footer
    'footer.description': 'Full Stack Developer specialized in creating exceptional web experiences',
    'footer.rights': 'All rights reserved.',
    'footer.developed': 'Developed with Next.js, TypeScript and Material-UI',
  },
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 