import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, ArrowLeft, CheckCircle, DollarSign } from 'lucide-react';

const RiderCriticalIllness = () => {
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
            <div className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center">
              <Activity className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Critical Illness
            </h1>
          </div>

          <p className="text-xl text-muted-foreground mb-12">
            Financial support when you need it most
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What is Critical Illness Rider?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Provides a separate lumpsum amount in case the policy holder gets diagnosed with an illness that is mentioned by the insurer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-success/5 border border-success/20 rounded-xl p-8 mb-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="w-6 h-6 text-success" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-success mb-4">
                  Example Scenario
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  In case the policy holder has taken a plan with a 10L critical illness rider, but gets diagnosed with cancer and it is one of the illnesses mentioned by the insurer, upon a successful critical illness claim, the lumpsum amount of 10L is paid out.
                </p>
              </div>
            </div>
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
                <span className="text-muted-foreground">Immediate financial support upon diagnosis</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Covers medical expenses and treatment costs</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Separate from death benefit - you receive this while alive</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Helps maintain lifestyle during recovery</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">No restrictions on how the money is used</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RiderCriticalIllness;