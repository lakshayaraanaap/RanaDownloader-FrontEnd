import { motion } from 'framer-motion';

export default function Loader({ text = 'Loading...' }) {
  return (
    <motion.div
      className="loader-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ textAlign: 'center' }}>
        <div className="loader" />
        <p style={{ marginTop: 16, color: 'var(--text-muted)', fontWeight: 500 }}>{text}</p>
      </div>
    </motion.div>
  );
}
