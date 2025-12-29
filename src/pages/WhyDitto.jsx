import { motion } from 'framer-motion';
import { Shield, Heart, Users, Award, Clock, TrendingUp } from 'lucide-react';

const WhyDitto = () => {
  const features = [
    {
      icon: Shield,
      title: 'Expert Guidance',
      description: 'IRDAI certified advisors with zero spam policy',
      color: 'bg-blue-500'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'No conflicts, no mis-selling, just honest advice',
      color: 'bg-red-500'
    },
    {
      icon: Users,
      title: 'Lifetime Support',
      description: '24/7 claims assistance for you and your family',
      color: 'bg-green-500'
    },
    {
      icon: Award,
      title: 'Trusted by Thousands',
      description: '4.9 Google rating from 12,000+ happy customers',
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: 'End-to-End Assistance',
      description: 'Complete handholding from consultation to policy issuance',
      color: 'bg-amber-500'
    },
    {
      icon: TrendingUp,
      title: 'Backed by Zerodha',
      description: 'Trusted platform with strong backing',
      color: 'bg-teal-500'
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
            Why Choose Ditto?
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            India's most trusted insurance advisor platform
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-12"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">
              The Ditto Difference
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At Ditto, we believe insurance should be simple, transparent, and tailored to your needs. Our mission is to help you make informed decisions without the pressure of sales targets or hidden agendas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => {
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
                    <div className={`flex-shrink-0 w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
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
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Our Commitment to You
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>No spam calls or pushy sales tactics</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Clear explanations of policy terms and conditions</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Unbiased recommendations based on your needs</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Complete support during claims process</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Transparent pricing with no hidden charges</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyDitto;