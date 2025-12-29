import { motion } from 'framer-motion';
import { Clock, FileText, AlertCircle } from 'lucide-react';

const ClaimsProcess = () => {
  const documents = [
    'Death Certificate (Government-issued)',
    'FIR (for accidental deaths)',
    'Policy Document',
    'Nominee\'s Details: Residence Proof, Photo ID, PAN, Photograph',
    'Medical Records: At the time of death and past illnesses if any',
    'Bank Details for processing the claim',
    'Additional Documents can be requested on a case to case basis'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Claims Process
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Understanding claim settlements and procedures
          </p>

          {/* Timeline */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Standard Processing
                </h3>
              </div>
              <p className="text-muted-foreground">
                Claims are typically processed within <span className="font-semibold text-foreground">48 hours to 30 days</span> from the date all required documents are submitted.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Complex Cases
                </h3>
              </div>
              <p className="text-muted-foreground">
                In more complex cases, insurers may take up to <span className="font-semibold text-foreground">120 days</span> to complete the settlement.
              </p>
            </motion.div>
          </div>

          {/* Documents Required */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Documents Need to Make a Claim
              </h2>
            </div>

            <div className="space-y-3">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-foreground flex-1">{doc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 bg-primary/5 border border-primary/20 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-primary mb-2">
              Ditto's Claim Support
            </h3>
            <p className="text-muted-foreground">
              With Ditto's expert claims team at your disposal 24/7, you and your family will always receive the support you deserve throughout the claims process.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClaimsProcess;