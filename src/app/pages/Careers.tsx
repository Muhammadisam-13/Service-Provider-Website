import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, TrendingUp, Rocket, Handshake, Sprout } from "lucide-react";

export function Careers() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Advance your career with continuous learning and development",
    },
    {
      icon: Briefcase,
      title: "Competitive Benefits",
      description: "Comprehensive benefits package including health insurance",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work-life balance with flexible working arrangements",
    },
    {
      icon: MapPin,
      title: "Remote Options",
      description: "Hybrid work model with remote and in-office flexibility",
    },
  ];

  return (
    <div className="pt-20 min-h-screen overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl text-slate-900 mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Be part of a team that's revolutionizing the service industry
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-sky-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Why Work at Mehoona?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl">
            We're building the future of on-demand services, and we want
            passionate, talented individuals to join us on this exciting journey.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
              >
                <benefit.icon className="w-8 h-8 mb-4" />
                <h3 className="text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm opacity-80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-4xl text-slate-900 mb-8">Open Positions</h2>
          
          <div className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-3xl p-12 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-100 to-purple-100 flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-12 h-12 text-sky-600" />
              </div>
              <h3 className="text-3xl text-slate-900 mb-4">
                No Open Positions at the Moment
              </h3>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We currently don't have any open positions, but we're always
                looking for talented individuals to join our team. Check back
                soon or submit your resume for future opportunities.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-sky-600 text-white rounded-lg shadow-lg hover:bg-sky-700 transition-colors"
              >
                Submit Your Resume
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-3xl text-slate-900 mb-6 text-center">
            Our Culture
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-200 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-sky-600" />
              </div>
              <h3 className="text-xl text-slate-800 mb-3">Innovation First</h3>
              <p className="text-slate-600">
                We encourage creative thinking and bold ideas that push boundaries
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl text-slate-800 mb-3">Collaboration</h3>
              <p className="text-slate-600">
                Teamwork and open communication drive our success
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mx-auto mb-4">
                <Sprout className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl text-slate-800 mb-3">Continuous Growth</h3>
              <p className="text-slate-600">
                We invest in our team's personal and professional development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}