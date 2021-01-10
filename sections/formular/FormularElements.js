import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link'
import styles from './Formular.module.css'

export const InputElement = ({field, form, ...props}) =>
<div className={styles.element_wrapper}>
  <input className={styles.element + " " + styles.input} {...field} {...props} />
</div>

export const TextElement = ({field, form, ...props}) =>
<div className={styles.element_wrapper}>
  <textarea className={styles.element + " " + styles.textarea} {...field} {...props} />
</div>

export const CheckboxElement = ({ id, name, className }) =>
    <>
      <Field
        name={name}
        render={({ field, form }) => {
          return (
            <div className={styles.checkbox_wrapper}>
              <label>
              <input
                type="checkbox"
                id={id}
                className={className}
                checked={field.value}
                {...field}
            />
              <span className={styles.checkbox}></span>
              </label>
              {/* Temp */}
              <h5 className={styles.hint}>Deine Eingaben werden beim Lesen lokal zwischengespeichert.</h5>
              <p>Hiermit bestätige ich die <Link href="datenschutzerklaerung"><a>Datenschutzerklärung</a></Link> gelesen zu haben und akzeptiere diese im vollen Unfang!</p>
          </div>
          );
        }}
      />
    </>
