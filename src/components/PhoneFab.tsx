export default function PhoneFab() {
    return (
        <a
            href="tel:+79108910877" /* подставь номер */
            className="fixed bottom-5 right-5 z-50"
            aria-label="Позвонить"
        >
            {/* пульсующее кольцо */}
            <span className="absolute inset-0 rounded-full bg-[#b88e5a]/40 animate-ping"></span>

            {/* сама кнопка */}
            <span className="relative inline-flex h-14 w-14 items-center justify-center
                       rounded-full shadow-lg bg-[#b88e5a] text-white">
        {/* иконка трубки */}
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C11.3 22 2 12.7 2 2.99a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/>
        </svg>
      </span>
        </a>
    );
}
