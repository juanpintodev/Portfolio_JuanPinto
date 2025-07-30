'use client'

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import { useLanguage } from '@/contexts/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Lista de Tareas',
      description: 'Resgitro de tareas con autenticación',
      image: '/images/projects/ecommerce.jpg',
      technologies: ['Next', 'React', 'Node.js', 'GrapghQL', 'MongoDB', 'Firebase', 'Material-UI'],
      github: 'https://github.com/juanpintodev/test_fullstack_juanpinto.git',
      live: 'https://task-list-frontend-vr8s.onrender.com',
    },
    // {
    //   title: 'Task Management App',
    //   description: 'Aplicación de gestión de tareas con autenticación, drag & drop y sincronización en tiempo real.',
    //   image: '/images/projects/taskapp.jpg',
    //   technologies: ['Next.js', 'TypeScript', 'Firebase', 'Framer Motion'],
    //   github: 'https://github.com',
    //   live: 'https://demo.com',
    // },
  ]

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 6, fontWeight: 700 }}
          >
            {t('projects.title')}
          </Typography>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="100%"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        objectFit: 'cover',
                      }}
                    />
                    
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.6 }}
                      >
                        {project.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'primary.main',
                              color: 'white',
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        onClick={() => window.open(project.github, '_blank')}
                        sx={{ mr: 1 }}
                      >
                        {t('projects.code')}
                      </Button>
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        onClick={() => window.open(project.live, '_blank')}
                        variant="contained"
                      >
                        {t('projects.demo')}
                      </Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 6, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Projects