import { motion } from "motion/react";
import { Wrench, Zap, Package, Car, Shield, MoreHorizontal } from "lucide-react";

export function Home() {
  const services = [
    { icon: Wrench, label: "Plumbing" },
    { icon: Zap, label: "Electrical" },
    { icon: Package, label: "Delivery" },
    { icon: Car, label: "Ride Services" },
    { icon: Shield, label: "Security" },
    { icon: MoreHorizontal, label: "More" },
  ];

  return (
    <div className="pt-20 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center h-[calc(100vh-160px)]">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl text-slate-900">
              Connect with Professional Service Providers
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Mehoona is a comprehensive platform connecting consumers with
              verified service providers across multiple industries. Whether you
              need plumbing, electrical work, delivery services, ride-sharing,
              or any other professional service, our application brings trusted
              providers directly to you. Service providers can easily apply to
              join our network and expand their business reach.
            </p>
            <p className="text-lg text-slate-500">
              Download the Mehoona app to request services or apply as a
              provider.
            </p>
            <div className="flex space-x-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-sky-600 text-white rounded-lg shadow-lg hover:bg-sky-700 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="aspect-square bg-gradient-to-br from-sky-50 to-slate-100 rounded-2xl shadow-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:shadow-xl transition-all"
                >
                  <service.icon className="w-12 h-12 text-sky-600 mb-3" />
                  <span className="text-sm text-slate-700 text-center">
                    {service.label}
                  </span>
                </motion.div>
              ))}
            </div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -z-10 inset-0 bg-gradient-to-br from-sky-200/30 to-purple-200/30 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}