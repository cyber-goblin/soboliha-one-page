export default function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 z-[60] bg-[#0e2036]/90 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-3 md:px-4 text-center text-white/90 pt-[env(safe-area-inset-top)]">

                {/* Мобилка: ровно две строки, без внутренних переносов */}
                <p className="block sm:hidden py-1.5 text-[12px] leading-tight font-actay font-normal">
          <span className="block whitespace-nowrap">
            В настоящее время мы работаем над уникальным проектом.
          </span>
                    <span className="block whitespace-nowrap">
            Следите за обновлениями! Старт продаж совсем скоро!
          </span>
                </p>

                {/* ≥SM: одна строка */}
                <p className="hidden sm:block py-2 text-sm md:text-base leading-snug font-actay font-normal">
                    В настоящее время мы работаем над уникальным проектом. Следите за обновлениями! Старт продаж совсем скоро!
                </p>
            </div>
        </div>
    );
}
