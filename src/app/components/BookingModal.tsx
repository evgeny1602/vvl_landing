import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from './Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#12121a] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6 md:p-8">
          {step === 1 ? (
            <>
              <h2 className="text-2xl sm:text-3xl font-['Barlow_Condensed'] font-bold text-white uppercase mb-2">
                Запись на <span className="text-[#ff4d00]">игру</span>
              </h2>
              <p className="text-white/60 mb-6">Оставьте заявку, и мы забронируем за вами место на площадке.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Имя</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Александр"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Телефон / Telegram</label>
                  <input 
                    required
                    type="text" 
                    placeholder="+7 (999) 000-00-00"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-1">Уровень игры</label>
                  <select 
                    className="w-full bg-[#1a1a24] border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-[#ff4d00] transition-colors appearance-none"
                  >
                    <option>Новичок (Любитель)</option>
                    <option>Средний (Уверенный)</option>
                    <option>Профи (Спортшкола)</option>
                  </select>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full">
                    Забронировать место (200 ₽)
                  </Button>
                  <p className="text-xs text-center text-white/40 mt-3">
                    Нажимая кнопку, вы соглашаетесь с правилами лиги
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#ff4d00]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-[#ff4d00]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-['Barlow_Condensed'] font-bold text-white uppercase mb-2">
                Заявка <span className="text-[#ff4d00]">принята!</span>
              </h2>
              <p className="text-white/70 mb-8">
                Мы свяжемся с вами в течение 15 минут для подтверждения времени и оплаты.
              </p>
              <Button onClick={handleClose} variant="outline" className="w-full">
                Отлично
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}