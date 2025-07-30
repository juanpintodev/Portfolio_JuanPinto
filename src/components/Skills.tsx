'use client'

import { Box, Container, Typography, Grid, Paper, LinearProgress, Button } from '@mui/material'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TechIcons3D from './TechIcons3D'
import { useLanguage } from '@/contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      category: t('skills.frontend'),
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'React', level: 88 },
        { name: 'Next.js', level: 82 },
        { name: 'Material-UI', level: 85 },
      ],
    },
    {
      category: t('skills.backend'),
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'GraphQL', level: 70 },
        { name: 'Firebase', level: 78 },
      ],
    },
    {
      category: t('skills.tools'),
      skills: [
        { name: 'Git', level: 85 },
        { name: 'SEO', level: 75 },
        { name: 'AWS', level: 60 },
      ],
    },
  ]

  return (
    <Box
      id="skills"
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
            {t('skills.title')}
          </Typography>

          <Grid container spacing={4}>
            {skillCategories.map((category, categoryIndex) => (
              <Grid item xs={12} md={4} key={categoryIndex}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      height: '100%',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 4,
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}
                    >
                      {category.category}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        >
                          <Box sx={{ mb: 1 }}>
                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                              {skill.name}
                            </Typography>
                          </Box>
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 8,
                              borderRadius: 4,
                              backgroundColor: 'grey.200',
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 4,
                                background: 'linear-gradient(90deg, #4ECDC4 0%, #2C3E50 100%)',
                              },
                            }}
                          />
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ mt: 0.5, display: 'block' }}
                          >
                            {skill.level}%
                          </Typography>
                        </motion.div>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <TechIcons3D />
        </motion.div>
      </Container>
    </Box>
  )
}

export default Skills