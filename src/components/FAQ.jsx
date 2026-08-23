import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../utils/constants';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <motion.span
          className="faq-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ({ limit }) {
  const [openId, setOpenId] = useState(null);
  const items = limit ? FAQ_DATA.slice(0, limit) : FAQ_DATA;

  const toggle = (id) => setOpenId(prev => (prev === id ? null : id));

  return (
    <div className="faq-list">
      {items.map((item) => (
        <FAQItem
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={() => toggle(item.id)}
        />
      ))}

      <style>{`
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .faq-item {
          background: var(--glass);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
          overflow: hidden;
          transition: var(--transition);
        }
        .faq-item:hover, .faq-item.open {
          border-color: rgba(79, 70, 229, 0.3);
        }
        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          background: none;
          border: none;
          color: var(--text);
          font-size: 1.05rem;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
          font-family: 'Poppins', sans-serif;
          gap: 16px;
        }
        .faq-chevron {
          color: var(--primary);
          flex-shrink: 0;
        }
        .faq-answer {
          overflow: hidden;
        }
        .faq-answer p {
          padding: 0 24px 20px;
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
