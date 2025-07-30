'use client'

import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Alert,
  Snackbar,
} from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useLanguage } from '@/contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulación de envío
    try {
      // Aquí iría la lógica real de envío
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSnackbar({
        open: true,
        message: t('contact.success'),
        severity: 'success',
      })
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      setSnackbar({
        open: true,
        message: t('contact.error'),
        severity: 'error',
      })
    }
  }

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      title: 'Email',
      value: 'juanperezferrari@hotmail.com',
      link: 'mailto:juanperezferrari@hotmail.com',
    },
    {
      icon: <WhatsAppIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      title: 'WhatsApp',
      value: '+58 412 822 56 04',
      link: 'https://wa.me/584128225604',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 30, color: 'primary.main' }} />,
      title: 'Ubicación',
      value: 'Caracas, Venezuela',
      link: '#',
    },
  ]

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/juan-pinto-65ba83251',
    },
    {
      icon: <GitHubIcon />,
      name: 'GitHub',
      url: 'https://github.com/juanpintodev',
    },
  ]

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundColor: 'background.paper',
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
            {t('contact.title')}
          </Typography>

          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} md={8} lg={6}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 600 }}>
                  ¡Hablemos!
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
                  ¿Tienes un proyecto en mente? ¿Quieres colaborar en algo interesante? 
                  ¡Me encantaría escuchar sobre tu idea! Estoy siempre abierto a nuevas 
                  oportunidades y proyectos desafiantes.
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={info.title === 'WhatsApp' ? {
                          scale: [1, 1.02, 1],
                          boxShadow: [
                            '0 0 0 rgba(76, 175, 80, 0)',
                            '0 0 20px rgba(76, 175, 80, 0.3)',
                            '0 0 0 rgba(76, 175, 80, 0)'
                          ]
                        } : {}}
                        transition={info.title === 'WhatsApp' ? {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        } : {}}
                      >
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 2,
                            cursor: 'pointer',
                            p: 1,
                            borderRadius: 1,
                            '&:hover': {
                              '& .contact-icon': {
                                color: 'primary.main',
                              },
                              '& .contact-text': {
                                color: 'primary.main',
                              },
                            },
                          }}
                          onClick={() => window.open(info.link, '_blank')}
                        >
                          <Box className="contact-icon">
                            {info.icon}
                          </Box>
                          <Box>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                              {info.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              className="contact-text"
                              sx={{
                                color: 'text.secondary',
                                textDecoration: 'none',
                              }}
                            >
                              {info.value}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    </motion.div>
                  ))}
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        variant="outlined"
                        startIcon={social.icon}
                        onClick={() => window.open(social.url, '_blank')}
                        sx={{ borderRadius: 2 }}
                      >
                        {social.name}
                      </Button>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>

          </Grid>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Contact