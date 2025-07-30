'use client'

import { Button, Tooltip } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import DownloadIcon from '@mui/icons-material/Download'

const CVDownload = () => {
  const { t, language } = useLanguage()

  const handleDownloadCV = () => {
    // URL del CV según el idioma
    const cvUrl = language === 'es' 
      ? '/cv/Juan_Pinto_CV_ES.pdf' 
      : '/cv/Juan_Pinto_CV_EN.pdf'
    
    // Nombre del archivo según el idioma
    const fileName = language === 'es' 
      ? 'Juan_Pinto_CV_ES.pdf' 
      : 'Juan_Pinto_CV_EN.pdf'
    
    // Crear un enlace temporal para descargar
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = fileName
    link.target = '_blank'
    
    // Simular clic
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Tooltip title={t('hero.downloadCV')}>
        <Button
          variant="contained"
          size="large"
          startIcon={<DownloadIcon />}
          onClick={handleDownloadCV}
          sx={{
            backgroundColor: 'white',
            color: 'primary.main',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {t('hero.downloadCV')}
        </Button>
      </Tooltip>
    </motion.div>
  )
}

export default CVDownload 