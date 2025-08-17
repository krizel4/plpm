import React, { useState } from 'react';
import Button from '../Button';

import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  const [interests, setInterests] = useState([]);
  
  const initialState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    reason: '',
    comment: '',
  };

  const [contactForm, setContactForm] = useState(initialState);

  const handleChange = (id, e) => {
    const tempForm = { ...contactForm, [id]: e };
    setContactForm(tempForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactForm(initialState);
  };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>We're so glad you're reaching out.</h4>
        <p>
          Our tiny team is working hard to keep the poppies blooming, so please
          allow up to 2 business days for a response.
        </p>
        <p>Please refer to our hours of operation below. Thank you!</p>
      </div>

      <div className={styles.contactContainer}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.contactForm}>
            <FormInputField
              id={"firstName"}
              value={contactForm.firstName}
              handleChange={(id, e) => handleChange(id, e)}
              type={"text"}
              labelName={"First Name"}
              required
            />
            <FormInputField
              id={"lastName"}
              value={contactForm.lastName}
              handleChange={(id, e) => handleChange(id, e)}
              type={"text"}
              labelName={"Last Name"}
              required
            />
            <FormInputField
              id={"phone"}
              value={contactForm.phone}
              handleChange={(id, e) => handleChange(id, e)}
              type={"number"}
              labelName={"Phone Number"}
              required
            />
            <FormInputField
              id={"email"}
              value={contactForm.email}
              handleChange={(id, e) => handleChange(id, e)}
              type={"email"}
              labelName={"Email"}
              required
            />
            {/* <FormInputField
              id="interests"
              type="select"
              multiple
              size={6}
              value={interests}
              options={[
                { value: "art", label: "Art" },
                { value: "music", label: "Music" },
                { value: "tech", label: "Tech" },
              ]}
              handleChange={(id, vals) => setInterests(vals)}
            /> */}
            <div className={styles.commentInput}>
              <FormInputField
                id={"comment"}
                value={contactForm.comment}
                handleChange={(id, e) => handleChange(id, e)}
                type={"textarea"}
                labelName={"Comments / Questions"}
                required
              />
            </div>
          </div>
          <Button
            className={styles.customButton}
            level={"primary"}
            type={"buttonSubmit"}
          >
            submit
          </Button>
        </form>

        <div className={styles.section}>
          <h4>Hours of Operation</h4>
          <p>
            <span style={{ fontWeight: 700 }}>OPEN:</span> Tuesday - Saturday:
            11am - 6pm
          </p>
          <p>
            <span style={{ fontWeight: 700 }}>CLOSED:</span> Sunday & Monday
          </p>
        </div>
        <div>
          <p className={styles.centerText}>
            730 W Lancaster Blvd Suite 105 |{" "}
            <a href="mailto: hello@prettylittlepoppymarketplace.com">
              hello@prettylittlepoppymarketplace.com
            </a>{" "}
            | (661) 206-7960
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Contact;
