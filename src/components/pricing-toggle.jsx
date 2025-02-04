import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { motion } from 'framer-motion';

const PricingToggle = ({ onChange }) => {
  const [enabled, setEnabled] = useState(true);

  const handleChange = (checked) => {
    setEnabled(checked);
    onChange?.(checked);
  };

  return (
    <div className="flex items-center justify-center gap-4 py-8">
      <span
        className={`text-sm font-medium ${!enabled ? 'text-primary-2' : 'text-primary-3'}`}
      >
        Monthly
      </span>

      <Switch
        checked={enabled}
        onChange={handleChange}
        className="group relative inline-flex h-7 w-14 items-center rounded-full bg-gradient-to-r from-primary-2 to-primary-1 transition-colors duration-300 ease-in-out hover:from-primary-1 hover:to-primary-2"
      >
        <span className="sr-only">Enable annual billing</span>
        <motion.span
          layout
          className="inline-block h-5 w-5 transform rounded-full bg-white ring-2 shadow-lg ring-primary-2"
          animate={{
            x: enabled ? 30 : 4,
          }}
          transition={{
            type: 'spring',
            stiffness: 700,
            damping: 30,
          }}
        />
      </Switch>

      <div className="flex items-center gap-2">
        <span
          className={`text-sm font-medium ${enabled ? 'text-primary-2' : 'text-primary-3'}`}
        >
          Annual
        </span>
        <motion.span
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: enabled ? 1 : 0,
            scale: enabled ? 1 : 0.8,
          }}
          className="rounded-full bg-primary-2 px-2 py-1 text-xs font-medium text-primary-3 transition-colors duration-300 "
        >
          Save 10%
        </motion.span>
      </div>
    </div>
  )
};

export default PricingToggle;