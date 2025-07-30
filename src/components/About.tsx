'use client'

import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CodeIcon from '@mui/icons-material/Code'
import WebIcon from '@mui/icons-material/Web'
import StorageIcon from '@mui/icons-material/Storage'
import { useLanguage } from '@/contexts/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('about.frontend'),
      description: t('about.frontendDesc'),
    },
    {
      icon: <StorageIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('about.backend'),
      description: t('about.backendDesc'),
    },
    {
      icon: <WebIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: t('about.fullstack'),
      description: t('about.fullstackDesc'),
    },
  ]

  return (
    <Box
      id="about"
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
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 6, fontWeight: 700 }}
          >
            {t('about.title')}
          </Typography>
          
          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}
              >
                {t('about.whoAmI')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                {t('about.description1')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                {t('about.description2')}
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {t('about.description3')}
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'linear-gradient(135deg, #4ECDC4 0%, #2C3E50 100%)',
                  color: 'white',
                }}
              >
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  {t('about.specialties')}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {['JavaScript/TypeScript', 'React/Next.js', 'Node.js/Express', 'MongoDB', 'GraphQL', 'Firebase', 'Material-UI', 'SEO'].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          component="span"
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            mr: 2,
                          }}
                        />
                        {skill}
                      </Typography>
                    </motion.div>
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {service.icon}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}
export default About