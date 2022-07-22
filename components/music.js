import { useState, useRef } from 'react'
import ReactHowler from 'react-howler'
import { AiFillPlayCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Tooltip, Button, useColorModeValue } from '@chakra-ui/react'

const songsCollections = ['/music/Snarky Puppy - Shofukan.mp3']

const getRandomFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const randomSongIndex = getRandomFromRange(0, songsCollections.length)

const randomSong = songsCollections[randomSongIndex]

const Audio = randomSong

const Music = () => {
  const player = useRef(null)
  const [playing, setplaying] = useState(false)

  const handlePlay = () => {
    player.current.play()
  }

  return (
    <>
      <div>
        <ReactHowler
          src={Audio}
          volume={0.35}
          ref={player}
          preload={false}
          playing={playing}
        />
      </div>
      <div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          animate={{ scale: [0.5, 1.1] }}
          transition={{ type: 'spring', duration: 0.2 }}
        >
          <Tooltip
            label={Audio.replace('/music/', 'Playing: ').replace('.mp3', '')}
            bg={useColorModeValue('#ffffff80', '#20202380')}
            color={useColorModeValue('#00000080', '#ffffff80')}
            fontSize="xs"
          >
            <Button
              onClick={() => {
                setplaying(!playing)
                handlePlay()
              }}
              variant="ghost"
              _active={{ bg: 'transparent' }}
              style={{ boxShadow: 'none' }}
              _hover={{ bg: 'transparent' }}
            >
              <AiFillPlayCircle />
            </Button>
          </Tooltip>
        </motion.div>
      </div>
    </>
  )
}

export default Music
