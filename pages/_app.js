import '../shared/globals.css'
import 'react-slideshow-image/dist/styles.css';
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {

  const variants = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    }
  };

  return(
      <motion.div
      exitBeforeEnter
      key={router.route}
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit">
            <Component {...pageProps} />
      </motion.div>
  )
}

export default MyApp
