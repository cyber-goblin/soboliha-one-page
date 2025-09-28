import type { ReactNode } from 'react';
import { useEffect } from 'react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
};

export default function Modal({ isOpen, onClose, title, children }: Props) {
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />
            <div className="relative z-[101] w-[92vw] max-w-[520px] rounded-2xl bg-[#0e2036] text-white shadow-xl p-6">
                {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
                {children}
            </div>
        </div>
    );
}
