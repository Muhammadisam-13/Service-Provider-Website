import { motion } from "motion/react";
import { QRCodeSVG } from "qrcode.react";
import { Apple, Smartphone, Target, Briefcase, ShieldCheck } from "lucide-react";

export function Join() {
  // Placeholder URLs for app stores
  const iosUrl = "https://apps.apple.com/app/mehoona";
  const androidUrl = "https://play.google.com/store/apps/details?id=com.mehoona";

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
            Download Mehoona
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Scan the QR code with your device to download the app from your
            preferred store
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* iOS QR Code */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-600 flex items-center justify-center">
                <Apple className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl text-slate-900 text-center mb-6">
              iOS App
            </h2>
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-white rounded-2xl shadow-inner">
                <QRCodeSVG
                  value={iosUrl}
                  size={200}
                  level="H"
                  includeMargin={false}
                  fgColor="#0f172a"
                />
              </div>
            </div>
            <p className="text-center text-slate-600 mb-6">
              Scan this code to download Mehoona from the Apple App Store
            </p>
            <motion.a
              href={iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full py-3 bg-slate-800 text-white rounded-xl text-center hover:bg-slate-900 transition-colors"
            >
              Open App Store
            </motion.a>
          </motion.div>

          {/* Android QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center">
                <Smartphone className="w-9 h-9 text-white" />
              </div>
            </div>
            <h2 className="text-3xl text-slate-900 text-center mb-6">
              Android App
            </h2>
            <div className="flex justify-center mb-6">
              <div className="p-6 bg-white rounded-2xl shadow-inner">
                <QRCodeSVG
                  value={androidUrl}
                  size={200}
                  level="H"
                  includeMargin={false}
                  fgColor="#0f172a"
                />
              </div>
            </div>
            <p className="text-center text-slate-600 mb-6">
              Scan this code to download Mehoona from Google Play Store
            </p>
            <motion.a
              href={androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full py-3 bg-green-600 text-white rounded-xl text-center hover:bg-green-700 transition-colors"
            >
              Open Play Store
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-br from-sky-50 to-purple-50 rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl text-slate-900 mb-4">
            Why Download Mehoona?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8 text-left">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-sky-600" />
              </div>
              <h3 className="text-xl text-slate-800 mb-2">Find Services</h3>
              <p className="text-slate-600">
                Access a wide range of professional services at your fingertips
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl text-slate-800 mb-2">Become a Provider</h3>
              <p className="text-slate-600">
                Apply to offer your services and grow your business
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl text-slate-800 mb-2">Verified & Safe</h3>
              <p className="text-slate-600">
                All service providers are thoroughly vetted and verified
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}