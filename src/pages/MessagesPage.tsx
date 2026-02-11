import { motion } from 'framer-motion';
import { MessageBoard } from '../components/MessageBoard';

export function MessagesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-10"
    >
      <MessageBoard />
    </motion.div>
  );
}

