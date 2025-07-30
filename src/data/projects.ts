export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  createdAt: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración. Incluye gestión de productos, usuarios y pedidos.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Material-UI'],
    githubUrl: 'https://github.com/juanpinto/ecommerce',
    liveUrl: 'https://ecommerce-demo.com',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con autenticación, drag & drop y sincronización en tiempo real. Incluye categorías, prioridades y notificaciones.',
    image: '/images/projects/taskapp.jpg',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Framer Motion'],
    githubUrl: 'https://github.com/juanpinto/taskapp',
    liveUrl: 'https://taskapp-demo.com',
    createdAt: '2024-02-20',
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'Sitio web personal con diseño moderno, animaciones y optimización SEO completa. Incluye blog integrado y sistema de contacto.',
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'Material-UI', 'GraphQL', 'SEO'],
    githubUrl: 'https://github.com/juanpinto/portfolio',
    liveUrl: 'https://juanpinto.dev',
    createdAt: '2024-03-10',
  },
  {
    id: '4',
    title: 'Social Media Dashboard',
    description: 'Dashboard para gestión de redes sociales con análisis de métricas y programación de posts. Incluye múltiples plataformas.',
    image: '/images/projects/dashboard.jpg',
    technologies: ['React', 'GraphQL', 'Chart.js', 'Node.js'],
    githubUrl: 'https://github.com/juanpinto/dashboard',
    liveUrl: 'https://dashboard-demo.com',
    createdAt: '2024-04-05',
  },
  {
    id: '5',
    title: 'Real-time Chat App',
    description: 'Aplicación de chat en tiempo real con notificaciones push y cifrado de mensajes. Incluye grupos y archivos compartidos.',
    image: '/images/projects/chat.jpg',
    technologies: ['Socket.io', 'React', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/juanpinto/chatapp',
    liveUrl: 'https://chat-demo.com',
    createdAt: '2024-05-12',
  },
  {
    id: '6',
    title: 'Weather Forecast App',
    description: 'Aplicación de pronóstico del tiempo con geolocalización y alertas meteorológicas. Incluye PWA y notificaciones.',
    image: '/images/projects/weather.jpg',
    technologies: ['Next.js', 'TypeScript', 'OpenWeather API', 'PWA'],
    githubUrl: 'https://github.com/juanpinto/weatherapp',
    liveUrl: 'https://weather-demo.com',
    createdAt: '2024-06-18',
  },
]