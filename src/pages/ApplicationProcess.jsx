import { motion } from 'framer-motion';
import { CheckCircle2, Video, Stethoscope, FileSearch, Package } from 'lucide-react';

const ApplicationProcess = () => {
  const steps = [
    {
      icon: FileSearch,
      title: 'Document Preparation',
      description: 'Keep the requested document soft copies handy.'
    },
    {
      icon: Video,
      title: 'Google Meet Consultation',
      duration: '~45 minutes',
      description: "We'll connect over a Google Meet, where one of our advisors will guide you through the entire application process. During this call, the proposal form is completed, documents are uploaded, and the first premium payment is made."
    },
    {
      icon: Stethoscope,
      title: 'Medical Examination',
      description: 'A medical examination is conducted to assess the applicant\'s health. The appointment can be scheduled at your convenience, with both at-home and medical-centre testing options available.',
      note: '(Depending on your area of residence)'
    },
    {
      icon: FileSearch,
      title: 'Underwriting Review',
      description: 'The insurance company then reviews the application through its evaluation and underwriting process.'
    },
    {
      icon: Package,
      title: 'Policy Issuance',
      duration: '3-4 weeks',
      description: 'Once approved, the plan is issued. This typically takes 3–4 weeks, though timelines may extend depending on underwriting requirements.'
    }
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
            Application Process
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Complete guidance through your insurance application journey
          </p>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                        {step.duration && (
                          <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                      {step.note && (
                        <p className="text-sm text-muted-foreground italic mt-2">
                          {step.note}
                        </p>
                      )}
                    </div>
                    <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-primary mb-2">
              Important Note
            </h3>
            <p className="text-muted-foreground">
              The entire process is designed to be smooth and transparent. Our advisors will be with you at every step, ensuring you understand all aspects of your policy before finalizing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationProcess;