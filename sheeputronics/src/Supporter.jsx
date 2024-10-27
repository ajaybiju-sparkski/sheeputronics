import { useState } from "react";
import PropTypes from "prop-types";

const faqs = [
  {
    question: "What types of electronic components do you offer?",
    answer:
      "We offer a wide range of electronic components including resistors, capacitors, and integrated circuits.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Our return policy allows you to return items within 30 days of purchase with a valid receipt.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, PayPal, and bank transfers.",
  },
  {
    question: "Can I suggest products for Sheeputronics to carry?",
    answer: "Yes, you can suggest products by contacting our support.",
  },
  {
    question: "Do you offer bulk purchasing or wholesale discounts?",
    answer:
      "Yes, we offer bulk discounts for large orders. Please contact our sales team for more information.",
  },
];

const ContactCard = ({ icon, title, description, contactInfo }) => (
  <div className="contact-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <p className="contact-info">{contactInfo}</p>
  </div>
);

// Add PropTypes validation for ContactCard component
ContactCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contactInfo: PropTypes.string.isRequired,
};

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

// Add PropTypes validation for FaqItem component
FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

function Supporter() {
  return (
    <div className="Supporter">
      <section className="contact-section">
        <h1>
          /reach out to us for any <span className="highlight">assistance</span>{" "}
          you may need
        </h1>
        <p className="contact-p">
          We are here to help! Whether you have questions about our products,
          need assistance with an order, or want to provide feedback, feel free
          to reach out to us.
        </p>
        <div className="contact-cards">
          <ContactCard
            icon="📧"
            title="/email our team"
            description="Let us know your queries and feedback. We aim to respond within 24 hours."
            contactInfo="support.sheeput@gmail.com"
          />
          <ContactCard
            icon="📞"
            title="/talk to support"
            description="Let us know your queries and feedback. We aim to respond within 24 hours."
            contactInfo="+91 99650 55380"
          />
          <ContactCard
            icon="📝"
            title="/fill a form"
            description="Let us know your queries and feedback. We aim to respond within 24 hours."
            contactInfo="https://forms.gle/xyz"
          />
          <ContactCard
            icon="🔗"
            title="/follow our socials"
            description="Let us know your queries and feedback. We aim to respond within 24 hours."
            contactInfo="[Social Icons]"
          />
        </div>
      </section>

      <section className="faq-section">
        <h2>
          /frequently asked <span className="highlight">Questions</span>
        </h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Supporter;
