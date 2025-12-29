import { motion } from 'framer-motion';
import { TrendingUp, Shield, DollarSign, Gift, CheckCircle } from 'lucide-react';

const SelectPlan = () => {
  const factors = [
    {
      icon: TrendingUp,
      title: 'Operational Metrics',
      description: 'Choose an insurer that has a really good Claim Settlement Ratio, low volume of complaints, have high annual business numbers, is operationally efficient as well',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Riskiness of Profile',
      description: 'Some companies do not offer plans considering the occupation or pre-existing diseases of the applicant. Choose a plan where chances of issuance are higher to avoid hassles.',
      color: 'bg-green-500'
    },
    {
      icon: DollarSign,
      title: 'Premiums',
      description: 'Choose a plan that has reasonable premiums that you are comfortable in paying.',
      color: 'bg-amber-500'
    },
    {
      icon: Gift,
      title: 'Riders',
      description: 'Any plan that provides our recommended riders such as waiver of premium, critical illness and also has useful inbuilt features is a right choice',
      color: 'bg-purple-500'
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
            How to Narrow Down a Plan
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Key factors to consider when selecting your term insurance plan
          </p>

          <div className="space-y-6">
            {factors.map((factor, index) => {
              const Icon = factor.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-14 h-14 ${factor.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {factor.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {factor.description}
                      </p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-success flex-shrink-0" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our expert advisors can help you evaluate different plans based on these factors and recommend the best option tailored to your specific needs and circumstances.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Compare claim settlement ratios across insurers</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Analyze premium structures and payment options</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Review rider options and additional benefits</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Assess your risk profile and eligibility</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SelectPlan;