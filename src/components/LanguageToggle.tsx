'use client'

import { IconButton, Tooltip } from '@mui/material'
import { motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import TranslateIcon from '@mui/icons-material/Translate'

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage()

  const handleLanguageChange = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Tooltip title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}>
        <IconButton
          onClick={handleLanguageChange}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          <TranslateIcon />
        </IconButton>
      </Tooltip>
    </motion.div>
  )
}

export default LanguageToggle 