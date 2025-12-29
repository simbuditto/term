import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileCheck, ShieldCheck, AlertTriangle, Search, Shield, Users, HelpCircle, FileText, Calculator } from 'lucide-react';

const HomePage = () => {
  const sections = [
    {
      title: 'Application Process',
      description: 'Complete guidance through your application journey',
      icon: FileCheck,
      path: '/application-process',
      color: 'bg-blue-500'
    },
    {
      title: 'Claims Process',
      description: 'Understanding claim settlements and procedures',
      icon: ShieldCheck,
      path: '/claims-process',
      color: 'bg-green-500'
    },
    {
      title: 'Exclusions',
      description: 'Know what is not covered under your policy',
      icon: AlertTriangle,
      path: '/exclusions',
      color: 'bg-red-500'
    },
    {
      title: 'Selecting a Plan',
      description: 'Choose the right plan for your needs',
      icon: Search,
      path: '/select-plan',
      color: 'bg-purple-500'
    },
    {
      title: 'Riders',
      description: 'Additional benefits and coverage options',
      icon: Shield,
      path: '/riders',
      color: 'bg-indigo-500'
    },
    {
      title: 'Why Ditto?',
      description: 'Discover what makes us different',
      icon: FileText,
      path: '/why-ditto',
      color: 'bg-teal-500'
    },
    {
      title: 'Nominees',
      description: 'Everything about nominee selection',
      icon: Users,
      path: '/nominees',
      color: 'bg-orange-500'
    },
    {
      title: 'FAQ',
      description: 'Frequently asked questions answered',
      icon: HelpCircle,
      path: '/faq',
      color: 'bg-cyan-500'
    },
    {
      title: 'MWPA',
      description: 'Married Woman Property Act explained',
      icon: FileText,
      path: '/mwpa',
      color: 'bg-pink-500'
    },
    {
      title: 'Control Panel',
      description: 'Calculate your optimal insurance strategy',
      icon: Calculator,
      path: '/control-panel',
      color: 'bg-amber-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-muted/30 to-background pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Term Insurance
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your comprehensive guide to understanding term insurance, claims, riders, and making informed decisions
          </p>
        </motion.div>

        {/* Navigation Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div key={section.path} variants={itemVariants}>
                <Link
                  to={section.path}
                  className="group block h-full"
                >
                  <div className="h-full bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {section.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;