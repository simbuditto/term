import { motion } from 'framer-motion';
import { FileText, Shield, Lock, AlertCircle, CheckCircle } from 'lucide-react';

const MWPA = () => {
  const keyFeatures = [
    {
      title: 'Protection from Creditors',
      description: 'When a policy is taken under MWPA, the claim amount that is received by nominees cannot be claimed by any creditors to recover any amount due.',
      icon: Shield
    },
    {
      title: 'Eligible Nominees',
      description: 'Wife and Children can be nominees under MWPA.',
      icon: FileText
    },
    {
      title: 'One-Time Choice',
      description: 'This option can only be chosen at the time of applying for the plan.',
      icon: Lock
    },
    {
      title: 'Nominee Restrictions',
      description: 'Nominees cannot be changed under MWPA.',
      icon: AlertCircle
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
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Married Woman Property Act
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-12">
            Understanding MWPA and its benefits
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-12"
          >
            <h2 className="text-2xl font-semibold text-primary mb-4">
              What is MWPA?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Married Woman's Property Act (MWPA) is a legal provision that provides special protection to insurance policies taken for the benefit of a married woman and her children. It ensures that the policy proceeds go directly to the beneficiaries without any interference from creditors.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {keyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Benefits of MWPA
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Protects your family from creditor claims on insurance proceeds</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Ensures financial security for spouse and children</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Legal protection under the Married Woman's Property Act</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Cannot be attached for debt recovery</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 bg-amber-500/5 border border-amber-500/20 rounded-xl p-6"
          >
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-amber-600 mb-2">
                  Important Considerations
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>This option must be selected at the time of policy application</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Cannot be added or removed later</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Nominees cannot be changed once set under MWPA</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Consult with an advisor to understand if MWPA is right for you</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default MWPA;