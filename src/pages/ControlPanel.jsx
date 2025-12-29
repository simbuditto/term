import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Clock, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const ControlPanel = () => {
  const [formData, setFormData] = useState({
    name: 'Dinesh',
    age: 30,
    income: 20,
    expenses: 60,
    tillAge: 70
  });

  const [results, setResults] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateRecommendedCover = (age, income) => {
    let incomeMultiple;
    
    if (age >= 18 && age <= 35) {
      incomeMultiple = 25;
    } else if (age >= 36 && age <= 40) {
      incomeMultiple = 20;
    } else if (age >= 41 && age <= 45) {
      incomeMultiple = 15;
    } else if (age >= 46 && age <= 50) {
      incomeMultiple = 12;
    } else if (age >= 51 && age <= 55) {
      incomeMultiple = 10;
    } else if (age >= 56 && age <= 65) {
      incomeMultiple = 5;
    } else {
      incomeMultiple = 10;
    }
    
    const incomeInRupees = income * 100000;
    return incomeInRupees * incomeMultiple;
  };

  const getBasePremium = (age) => {
    const premiumTable = {
      20: 17000, 21: 17000, 22: 17000, 23: 19000, 24: 19000,
      25: 19000, 26: 22000, 27: 22000, 28: 23000, 29: 25000,
      30: 25000, 31: 27000, 32: 27000, 33: 28000, 34: 30000,
      35: 32000, 36: 34000, 37: 35000, 38: 36000, 39: 38000,
      40: 40000, 41: 42000, 42: 42000, 43: 44000, 44: 48000,
      45: 50000, 46: 58000, 47: 63000, 48: 68000, 49: 69000,
      50: 70000, 51: 74000, 52: 77000, 53: 80000, 54: 84000,
      55: 88000, 56: 90000, 57: 90000, 58: 96000, 59: 99000,
      60: 100000
    };
    
    const ages = Object.keys(premiumTable).map(Number);
    const closestAge = ages.reduce((prev, curr) => {
      return (Math.abs(curr - age) < Math.abs(prev - age) ? curr : prev);
    });
    
    return premiumTable[closestAge];
  };

  const calculatePlan = () => {
    const age = parseInt(formData.age);
    const income = parseInt(formData.income);
    const expenses = parseInt(formData.expenses);
    const tillAge = parseInt(formData.tillAge);
    
    const policyTerm = tillAge - age;
    const currentYear = new Date().getFullYear();
    const policyEndYear = currentYear + policyTerm;
    
    const monthlyExpenses = expenses * 1000;
    const finalMonthlyExpenses = monthlyExpenses * Math.pow(1.05, policyTerm);
    
    const retirementAge = 60;
    const timeToRetirement = Math.max(0, retirementAge - age);
    
    const recommendedCover = calculateRecommendedCover(age, income);
    
    const basePremium = getBasePremium(age);
    
    const retirementInc = 15;
    const pay15Inc = 65;
    const pay10Inc = 120;
    const pay5Inc = 300;
    
    const regularPayPremium = basePremium;
    const tillRetirementPremium = basePremium * (1 + retirementInc/100);
    const pay15Premium = basePremium * (1 + pay15Inc/100);
    const pay10Premium = basePremium * (1 + pay10Inc/100);
    const pay5Premium = basePremium * (1 + pay5Inc/100);
    
    const regularPayTotal = regularPayPremium * policyTerm;
    const tillRetirementTotal = tillRetirementPremium * timeToRetirement;
    const pay15Total = pay15Premium * 15;
    const pay10Total = pay10Premium * 10;
    const pay5Total = pay5Premium * 5;
    
    const plans = [
      {
        name: 'Regular Pay',
        years: policyTerm,
        premium: regularPayPremium,
        total: regularPayTotal,
        savings: 0,
        color: 'border-blue-500'
      },
      {
        name: 'Till Retirement',
        years: timeToRetirement,
        premium: tillRetirementPremium,
        total: tillRetirementTotal,
        savings: regularPayTotal - tillRetirementTotal,
        color: 'border-purple-500'
      },
      {
        name: '15 Pay',
        years: 15,
        premium: pay15Premium,
        total: pay15Total,
        savings: regularPayTotal - pay15Total,
        color: 'border-red-500'
      },
      {
        name: '10 Pay',
        years: 10,
        premium: pay10Premium,
        total: pay10Total,
        savings: regularPayTotal - pay10Total,
        color: 'border-teal-500'
      },
      {
        name: '5 Pay',
        years: 5,
        premium: pay5Premium,
        total: pay5Total,
        savings: regularPayTotal - pay5Total,
        color: 'border-cyan-500'
      }
    ];
    
    setResults({
      policyTerm,
      policyEndYear,
      finalMonthlyExpenses,
      timeToRetirement,
      recommendedCover,
      plans
    });
  };

  useEffect(() => {
    calculatePlan();
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Calculator className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
              Term Insurance Calculator
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-12">
            Calculate your optimal insurance payment strategy
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card border border-border rounded-xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Enter Your Details
              </h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="age">Current Age (years)</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    min="18"
                    max="65"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="income">Annual Income (₹ lakhs)</Label>
                  <Input
                    id="income"
                    name="income"
                    type="number"
                    min="1"
                    max="100"
                    value={formData.income}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="expenses">Monthly Expenses (₹ thousands)</Label>
                  <Input
                    id="expenses"
                    name="expenses"
                    type="number"
                    min="10"
                    max="500"
                    value={formData.expenses}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="tillAge">Coverage Till Age (years)</Label>
                  <Input
                    id="tillAge"
                    name="tillAge"
                    type="number"
                    min="40"
                    max="100"
                    value={formData.tillAge}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                
                <Button 
                  onClick={calculatePlan}
                  className="w-full"
                  size="lg"
                >
                  Calculate Insurance Plan
                </Button>
              </div>
            </motion.div>

            {/* Results Section */}
            {results && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Policy Details Cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Policy Term</span>
                    </div>
                    <p className="text-xl font-bold text-foreground">{results.policyTerm} yrs</p>
                  </div>
                  
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">End Year</span>
                    </div>
                    <p className="text-xl font-bold text-foreground">{results.policyEndYear}</p>
                  </div>
                  
                  <div className="bg-card border border-border rounded-xl p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Retirement</span>
                    </div>
                    <p className="text-xl font-bold text-foreground">{results.timeToRetirement} yrs</p>
                  </div>
                </div>

                {/* Recommended Cover */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    Recommended Cover Amount
                  </h3>
                  <p className="text-3xl font-bold text-foreground">
                    ₹{(results.recommendedCover / 10000000).toFixed(1)} Cr
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    ₹{Math.round(results.recommendedCover).toLocaleString('en-IN')}
                  </p>
                </div>

                {/* Premium Plans */}
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Estimated Premium Comparison
                  </h3>
                  <div className="space-y-4">
                    {results.plans.map((plan, index) => (
                      <div
                        key={index}
                        className={`border-2 ${plan.color} rounded-lg p-4 transition-all hover:shadow-md`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-foreground">{plan.name}</h4>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                            {plan.years} years
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-primary mb-1">
                          ₹{Math.round(plan.premium).toLocaleString('en-IN')}/year
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Total: ₹{Math.round(plan.total).toLocaleString('en-IN')}
                        </p>
                        {plan.savings > 0 && (
                          <div className="mt-2 inline-block bg-success/10 text-success px-3 py-1 rounded-full text-sm font-semibold">
                            Save ₹{Math.round(plan.savings).toLocaleString('en-IN')}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ControlPanel;
