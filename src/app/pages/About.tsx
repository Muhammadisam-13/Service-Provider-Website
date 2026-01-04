import { motion } from "motion/react";
import { Target, Eye, Heart, Award } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To create a seamless connection between service seekers and professional providers, ensuring quality, reliability, and convenience for all users.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become the leading platform for on-demand professional services, revolutionizing how people access essential services in their daily lives.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Trust, transparency, and excellence guide everything we do. We prioritize user satisfaction and fair opportunities for service providers.",
    },
    {
      icon: Award,
      title: "Our Commitment",
      description:
        "We verify every service provider on our platform to ensure the highest standards of professionalism and quality of service.",
    },
  ];

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl text-slate-900 mb-6">
            About Mehoona
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're transforming how people access professional
            services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-3xl p-8 md:p-12 mb-16 shadow-xl"
        >
          <h2 className="text-3xl text-slate-800 mb-6">
            Who We Are
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            Mehoona is a comprehensive service marketplace
            application that bridges the gap between consumers
            and professional service providers. Our platform
            hosts a diverse range of official services including
            plumbing, electrical work, delivery services,
            ride-sharing like Uber, home maintenance, personal
            care, and much more.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            We understand that finding reliable, professional
            service providers can be challenging. That's why
            we've created a platform that thoroughly vets and
            verifies every service provider before they join our
            network. This ensures that consumers can confidently
            request services knowing they'll receive quality
            work from trusted professionals.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            For service providers, Mehoona offers an opportunity
            to expand their business reach, connect with new
            customers, and grow their professional reputation.
            Our application streamlines the process of receiving
            service requests, managing appointments, and
            building a loyal customer base.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
              }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-100 to-purple-100 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-sky-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl text-slate-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-br from-sky-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="text-3xl mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Whether you're looking for services or want to
            provide them, Mehoona is here to help you succeed.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-sky-600 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            Download the App
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}