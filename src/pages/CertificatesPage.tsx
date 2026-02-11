import { motion } from 'framer-motion';
import { CertificateGallery } from '../components/CertificateGallery';

export function CertificatesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
    >
      <CertificateGallery />
    </motion.div>
  );
}

