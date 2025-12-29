import { motion } from 'framer-motion';
import { AlertTriangle, XCircle } from 'lucide-react';

const Exclusions = () => {
  const exclusions = [
    {
      title: 'Suicide in First Year',
      description: 'Demise occurring due to suicide in the first year',
      icon: '1'
    },
    {
      title: 'Substance Intoxication',
      description: 'Demise due to intoxication such as drug overdose',
      icon: '2'
    },
    {
      title: 'Nominee Involvement',
      description: 'Demise of the policy holder that occurs due to involvement of the nominees',
      icon: '3'
    },
    {
      title: 'Criminal Activity',
      description: 'Demise of the policy holder by getting involved in a criminal activity',
      icon: '4'
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
            <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-destructive" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Exclusions
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-12">
            Know what is not covered under your term insurance policy
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-destructive/5 border-2 border-destructive/20 rounded-xl p-6 mb-8"
          >
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-destructive mb-2">
                  Important Information
                </h3>
                <p className="text-muted-foreground">
                  The following situations are typically not covered by term insurance policies. It's crucial to understand these exclusions to make informed decisions.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {exclusions.map((exclusion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-destructive/30"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    <XCircle className="w-6 h-6 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-xs font-semibold text-destructive bg-destructive/10 px-2 py-1 rounded-full">
                        Exclusion {exclusion.icon}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {exclusion.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {exclusion.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Understanding Policy Terms
            </h3>
            <p className="text-muted-foreground mb-4">
              These exclusions are standard across most term insurance policies and are designed to prevent misuse. It's essential to:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Read your policy document carefully</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Discuss any concerns with your advisor</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Ensure accurate disclosure during application</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Keep your nominees informed about policy details</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Exclusions;