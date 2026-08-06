import React from 'react';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';
import { LogIn, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SessionExpiredModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SessionExpiredModal: React.FC<SessionExpiredModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    onClose();
    navigate('/login');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Session Expired" size="sm">
      <div className="text-center space-y-4 py-2">
        <div className="w-14 h-14 rounded-3xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto border border-amber-500/20">
          <ShieldAlert className="w-7 h-7" />
        </div>
        <div className="space-y-1">
          <h4 className="font-heading font-bold text-base text-zinc-900 dark:text-white">
            Your login session has expired
          </h4>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            For security reasons, please log in again to continue managing your rentals and bookings.
          </p>
        </div>
        <div className="pt-2 flex justify-center">
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={handleLoginRedirect}
            leftIcon={<LogIn className="w-4 h-4" />}
          >
            Sign In Again
          </Button>
        </div>
      </div>
    </Modal>
  );
};
