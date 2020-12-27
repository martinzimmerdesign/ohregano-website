import Head from 'next/head'
import { motion } from "framer-motion";
import Footer from '../footer/Footer.js'
import Menu from '../menu/Menu.js'

function PageContainer (props) {

  const variants = {
    initial: {
      opacity: 0,
      zIndex: -200
    },
    enter: {
      opacity: 1,
      zIndex: 0
    },
    exit: {
      opacity: 0,
      zIndex: -200
    }
  };

  return (
    <React.Fragment>
      <Menu visibility={props.menuTypeLanding && !props.menuVisibility ? false : true}/>
      <div>
        <Head>
          <title>Ohregano</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {props.children}
        <div style={{display: props.withFooter ? "block" : "none" }} ><Footer noMargin={props.noMargin}/></div>
      </div>
    </React.Fragment>
  );
}
export default PageContainer;
