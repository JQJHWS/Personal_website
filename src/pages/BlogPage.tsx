import { motion } from 'framer-motion';
import { BlogSection } from '../components/BlogSection';

export function BlogPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
    >
      <BlogSection />
    </motion.div>
  );
}

