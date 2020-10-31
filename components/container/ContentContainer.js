import Head from 'next/head'
import { motion } from 'framer-motion'

function ContentContainer (props) {

  return (
    <div className="content_container">
      {props.children}
    </div>
  );
}
export default ContentContainer;
