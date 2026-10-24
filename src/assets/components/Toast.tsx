import { useEffect } from 'react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3 bg-gray-900 text-white px-4 py-3 rounded-xl shadow-xl border border-gray-800 animate-slideUp">
      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
        ✓
      </div>
      <p className="text-sm font-medium">{message}</p>
      <button 
        onClick={onClose} 
        className="ml-2 text-gray-400 hover:text-white text-lg font-bold leading-none"
      >
        &times;
      </button>
    </div>
  );
}