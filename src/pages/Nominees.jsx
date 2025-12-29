import { motion } from 'framer-motion';
import { Users, UserCheck, Edit, AlertCircle } from 'lucide-react';

const Nominees = () => {
  const eligibleNominees = [
    'Parents',
    'Spouse',
    'Children',
    'Siblings (with additional clarification if financially dependent)'
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
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Nominees
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-12">
            Everything you need to know about nominee selection
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  What is a Nominee?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nominee refers to individual(s) chosen by the policy holder to receive the death sum assured in case of the policyholder's demise.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-8 mb-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Who Can Be Nominees?
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {eligibleNominees.map((nominee, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-foreground font-medium">{nominee}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                  <Edit className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Nominee Changes
                </h3>
              </div>
              <p className="text-muted-foreground">
                Nominees can be changed any number of times during the policy term. This flexibility allows you to update your beneficiaries as your life circumstances change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Multiple Nominees
                </h3>
              </div>
              <p className="text-muted-foreground">
                In case of multiple nominees, you can decide the percentage of allocation as well. This ensures the sum assured is distributed according to your wishes.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6"
          >
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-amber-600 mb-2">
                  Important Note About Siblings
                </h3>
                <p className="text-muted-foreground">
                  In case of siblings, insurers may ask for additional clarification and are accepted only if they are financially dependent on the policy holder.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Nominees;