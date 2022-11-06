import React, { useContext } from 'react'
import { GatsbyContext } from '../../context/context'

const ContactDetails = () => {
  const { contactInfo } = useContext(GatsbyContext)
  return (
    <main>
      {contactInfo.map((item, i) => {
        const { id, email, number } = item
        return (
          <section key={id} className='info-wrapper'>
            <a href={`tel:${number}`}>
              <p>{number}</p>
            </a>
            <a href={`mailto:${email}`}>
              <p>{email}</p>
            </a>
          </section>
        )
      })}
    </main>
  )
}

export default ContactDetails
