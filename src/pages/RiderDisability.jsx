import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CircleUserRound, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

const RiderDisability = () => {
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
            <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center">
              <CircleUserRound className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Disability Riders
            </h1>
          </div>

          <p className="text-xl text-muted-foreground mb-12">
            Protection against permanent disability
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What are Disability Riders?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Recommended to take it in case of a frequent traveler or in risky occupation. Provides a chosen amount in case a person gets permanently disabled.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-8 mb-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-600 mb-4">
                  Who Should Consider This?
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Frequent travelers (domestic and international)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>People in risky occupations (construction, mining, etc.)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Adventure sports enthusiasts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span>Anyone wanting comprehensive accident protection</span>
                  </li>
                </ul>
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
                <span className="text-muted-foreground">Financial support in case of permanent disability</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Covers lifestyle adjustments and medical needs</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Essential for high-risk professions</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Provides peace of mind during travel</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">Complements your health and life insurance</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default RiderDisability;