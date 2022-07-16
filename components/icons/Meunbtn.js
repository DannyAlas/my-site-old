import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IconButton, useColorModeValue } from '@chakra-ui/react'

const path01Variants = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 9.5L24 9.5' }
}

const path02Variants = {
  open: { d: 'M3.00006 21.0607L21 3.06064' },
  moving: { d: 'M0 14.5L24 14.5' },
  closed: { d: 'M24 14.5L10 14.5' }
}

const MeunBtn = ({ isOpen, onOpen, onClose }) => {
  const [animation, setAnimation] = useState(isOpen ? 'open' : 'closed')
  useEffect(() => {
    if (isOpen) {
      setAnimation('open')
    } else {
      setAnimation('closed')
    }
  }, [isOpen])

  return (
    <IconButton
      h="40px"
      w="40px"
      variant="ghost"
      _active={{ bg: 'transparent' }}
      style={{ boxShadow: 'none' }}
      onClick={isOpen ? onClose : onOpen}
      display={{ base: 'inline-flex', md: 'none' }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <motion.path
          stroke={useColorModeValue('#000', '#FFF')}
          animate={animation}
          variants={path01Variants}
        />
        <motion.path
          stroke={useColorModeValue('#000', '#FFF')}
          animate={animation}
          variants={path02Variants}
        />
      </svg>
    </IconButton>
  )
}

export default MeunBtn
