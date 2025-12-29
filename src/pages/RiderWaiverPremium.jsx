import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, CheckCircle } from 'lucide-react';

const RiderWaiverPremium = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <Link
          to="/riders"
          className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Riders</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Waiver of Premium
            </h1>
          </div>

          <p className="text-xl text-muted-foreground mb-12">
            Protecting your policy even when you can't pay
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What is Waiver of Premium?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Waives off all future premiums in case a person gets diagnosed with an illness/disability that is mentioned by the insurer and the policy continues.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              Example Scenario
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              In case the policy holder has paid 10 premiums and has 5 more premiums left to be paid but gets diagnosed with cancer and it is one of the illnesses mentioned by the insurer, upon a successful waiver of premium claim, the remaining 5 premium payments are waived but the policy continues.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Key Benefits
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Policy remains active even if you can't afford premiums due to illness</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">No financial burden during critical health situations</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Coverage continues for your family's protection</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Highly recommended for comprehensive coverage</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RiderWaiverPremium;