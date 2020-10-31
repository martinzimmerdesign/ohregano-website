import styles from './Formular.module.css'
import { InputElement, TextElement, CheckboxElement } from './FormularElements.js';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { motion } from "framer-motion";
import { useEffect } from 'react'

const validationSchema = Yup.object({
  name: Yup.string("Gib deinen Namen ein.").required("Denk an deinen Namen."),
  email: Yup.string("Gib deine E-Mail ein.").email("E-Mail braucht gültiges Format.").required("Denk an deine E-Mail."),
  subject: Yup.string("Gib den Betreff ein.").required("Was ist der Betreff?"),
  message: Yup.string("Gib deine Nachricht ein.").required("Was möchtest du mir sagen?"),
  checkbox: Yup.boolean("Akzeptiere die Datenschutzerklärung").oneOf([true], "Stimm der Datenschutzerklärung zu.").required("Stimm der Datenschutzerklärung zu."),
});

const ErrorMessageReturn = (props) => {
    return <span className={styles.error_message}>{props.children}</span>;
};

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

let values = {}
if (typeof window !== "undefined") {
  values = { name: sessionStorage.name, email: sessionStorage.email, subject: sessionStorage.subject, message: sessionStorage.message, checkbox: ""};
}

function handleClick() {
    sessionStorage.name = document.getElementsByName("name")[0].value;
    values.name = sessionStorage.name;
    sessionStorage.email = document.getElementsByName("email")[0].value;
    values.email = sessionStorage.email;
    sessionStorage.subject = document.getElementsByName("subject")[0].value;
    values.subject = sessionStorage.subject;
    sessionStorage.message = document.getElementsByName("message")[0].value;
    values.message = sessionStorage.message;
}

const variants = {
  basic: {
    enter: { y: 0, opacity: 1 },
    exit: { y: 50, opacity: 0 }
  },
};

export default function Formular() {
  return (
    <div>
      <Formik
        initialValues={values}
        validationSchema={validationSchema}
        onSubmit={
        (values, actions) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values })
          })
          .then(() => {
            alert('Success');
            actions.resetForm()
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false))
        }
      }
      >
        {({ isSubmitting }) => (
            <Form name="contact" data-netlify={true} >
              <div className={styles.outer}>
              <motion.h1 variants={variants.basic} className={styles.title}>Kontaktformular</motion.h1>
              <motion.div variants={variants.basic} className={styles.line}></motion.div>
                <div className={styles.container}>
                  <motion.div variants={variants.basic} className={styles.wrapper}>
                    <ErrorMessage name="name" render={msg => <ErrorMessageReturn>{msg}</ErrorMessageReturn>} />
                    <Field type="name" name="name" placeholder="Name" component={InputElement} />
                    <ErrorMessage name="email" render={msg => <ErrorMessageReturn>{msg}</ErrorMessageReturn>} />
                    <Field type="email" name="email" placeholder="E-Mail Adresse" component={InputElement} />
                    <ErrorMessage name="subject" render={msg => <ErrorMessageReturn>{msg}</ErrorMessageReturn>} />
                    <Field type="subject" name="subject" placeholder="Betreff" component={InputElement} />
                  </motion.div>
                  <motion.div variants={variants.basic} className={styles.wrapper}>
                    <ErrorMessage name="message" render={msg => <ErrorMessageReturn>{msg}</ErrorMessageReturn>} />
                    <Field type="message" name="message" placeholder="Nachricht" component={TextElement} />
                    <ErrorMessage name="checkbox" render={msg => <ErrorMessageReturn>{msg}</ErrorMessageReturn>} />
                    <div onClick={handleClick}><CheckboxElement name="checkbox" className="checkbox" /></div>
                  </motion.div>
                </div>
                <motion.button variants={variants.basic} className={styles.button} type="submit" disabled={isSubmitting}>Senden</motion.button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
