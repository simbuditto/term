import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'If I do not pay my premiums on my due date, what happens?',
      answer: 'The policy falls into grace period which is 15 days for monthly and 30 days for yearly/half-yearly & quarterly - where the payment can still be made without any charges and policy would be active. But once grace period is over, it gets lapsed.'
    },
    {
      question: 'Can I revive my policy in case it lapses?',
      answer: 'Yes, but the insurer will ask to pay some extra charges for the same. This can be done within 5 years of lapse.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-12">
            Common questions about term insurance answered
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <span className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="pl-12 pr-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              Have More Questions?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our team of expert advisors is here to help you with any questions you may have about term insurance, policies, or the application process.
            </p>
            <p className="text-muted-foreground">
              Feel free to reach out to us for personalized guidance and support.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;