import bg from "../../assets/img/sales/sales_background.png"; // фон блока

const beige = "#d7b68a";

export default function Start() {
    return (
        <section className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] overflow-hidden">
            {/* Фон */}
            <img
                src={bg}
                alt="Старт продаж"
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
            />

            {/* Контент */}
            <div className="relative z-10 h-full flex items-center">
                <div className="px-8 md:px-16 lg:px-24 transform translate-y-6 md:translate-y-10">
                    <h2 className="uppercase font-extrabold leading-[1.1]">
                        <span
                            className="block text-[32px] md:text-[48px] lg:text-[56px] mb-3"
                            style={{ color: beige }}
                        >
                            Старт продаж —
                        </span>
                        <span className="block text-white text-[28px] md:text-[44px] lg:text-[52px]">
                            4 квартал 2025 года
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    );
}