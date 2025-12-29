import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Activity, CircleUserRound, RotateCcw, Plus } from 'lucide-react';

const Riders = () => {
  const riders = [
    {
      icon: Shield,
      title: 'Waiver of Premium',
      path: '/riders/waiver-of-premium',
      description: 'Waives off all future premiums in case of diagnosed illness/disability',
      color: 'bg-blue-500'
    },
    {
      icon: Activity,
      title: 'Critical Illness',
      path: '/riders/critical-illness',
      description: 'Provides separate lumpsum amount upon critical illness diagnosis',
      color: 'bg-red-500'
    },
    {
      icon: CircleUserRound,
      title: 'Disability Riders',
      path: '/riders/disability',
      description: 'Coverage for permanent disability, especially for frequent travelers',
      color: 'bg-purple-500'
    },
    {
      icon: RotateCcw,
      title: 'Return of Premium & Special Exit',
      path: '/riders/return-premium',
      description: 'Content to be added later',
      color: 'bg-amber-500',
      comingSoon: true
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
              <Plus className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Riders
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-12">
            Riders, also called as add-ons, provide extra benefits beyond the usual death benefit that is provided by a term plan
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-primary mb-2">
              Recommended Riders
            </h3>
            <p className="text-muted-foreground">
              The following riders are highly recommended to enhance your term insurance coverage and provide comprehensive protection for you and your family.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {riders.map((rider, index) => {
              const Icon = rider.icon;
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className={`h-full bg-card border border-border rounded-xl p-6 transition-all ${
                    rider.comingSoon ? 'opacity-60' : 'hover:shadow-lg hover:-translate-y-1'
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <div className={`w-14 h-14 ${rider.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {rider.title}
                    </h3>
                    <p className="text-muted-foreground text-sm flex-1">
                      {rider.description}
                    </p>
                    {rider.comingSoon && (
                      <span className="inline-block mt-4 text-xs font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                    {!rider.comingSoon && (
                      <span className="inline-block mt-4 text-sm font-medium text-primary">
                        Learn more →
                      </span>
                    )}
                  </div>
                </motion.div>
              );

              return rider.comingSoon ? (
                <div key={index}>{content}</div>
              ) : (
                <Link key={index} to={rider.path}>
                  {content}
                </Link>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 bg-card border border-border rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Why Choose Riders?
            </h3>
            <p className="text-muted-foreground mb-4">
              Riders enhance your base term insurance policy by providing additional coverage for specific scenarios. They offer:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Comprehensive protection beyond basic death benefit</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Financial security during critical health situations</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Premium waivers in case of disability</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-primary mt-1">•</span>
                <span>Cost-effective way to expand coverage</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Riders;