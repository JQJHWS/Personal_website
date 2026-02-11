import { motion } from 'framer-motion';
import { SkillsSection } from '../components/SkillsSection';
import { HonorsSection } from '../components/HonorsSection';

export function SkillsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
    >
      <SkillsSection />
      <HonorsSection />
    </motion.div>
  );
}

