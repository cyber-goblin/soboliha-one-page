// Простая шина событий через window для открытия модалок из любых компонентов
export type ModalType = 'callback' | 'presentation';

export function openModal(type: ModalType) {
    window.dispatchEvent(new CustomEvent('soboliha:openModal', { detail: { type } }));
}
export function closeModal() {
    window.dispatchEvent(new CustomEvent('soboliha:openModal', { detail: { type: null } }));
}
