import { useEffect, useState } from 'react';
import Modal from './ui/Modal';
import CallbackForm from './forms/CallBackForm';
import PresentationForm from './forms/PresentationForm';
import { closeModal } from '../utils/modal';

type ModalType = 'callback' | 'presentation' | null;

export default function ModalHost() {
    const [type, setType] = useState<ModalType>(null);

    useEffect(() => {
        const handler = (e: Event) => {
            const ce = e as CustomEvent;
            setType(ce.detail?.type ?? null);
        };
        window.addEventListener('soboliha:openModal', handler as EventListener);
        return () => window.removeEventListener('soboliha:openModal', handler as EventListener);
    }, []);

    const onClose = () => { setType(null); closeModal(); };

    return (
        <>
            <Modal
                isOpen={type === 'callback'}
                onClose={onClose}
                title="Заказать звонок"
            >
                <CallbackForm onSuccess={onClose} />
            </Modal>

            <Modal
                isOpen={type === 'presentation'}
                onClose={onClose}
                title="Скачать презентацию"
            >
                <PresentationForm
                    onSuccess={onClose}
                    pdfPath="/assets/docs/Soboliha_Residence.pdf"
                />

            </Modal>
        </>
    );
}
