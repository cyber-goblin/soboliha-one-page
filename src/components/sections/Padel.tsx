import bg from "../../assets/img/padel/paddel_background.png"; // фон от дизайнера

const beige = "#d7b68a";

export default function Padel() {
    return (
        <section className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] overflow-hidden">
            {/* Фон */}
            <img
                src={bg}
                alt="Падел теннис"
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
            />

            {/* Контент */}
            <div className="relative z-10 h-full flex">
                <div className="px-8 md:px-16 lg:px-24 flex flex-col justify-start mt-10 md:mt-16 lg:mt-20">
                    <h2 className="uppercase font-extrabold leading-[1.1]">
            <span
                className="block text-[34px] md:text-[48px] lg:text-[56px]"
                style={{ color: beige }}
            >
              Спорт —
            </span>
                        <span className="block text-white text-[32px] md:text-[44px] lg:text-[52px]">
              Норма жизни
            </span>
                    </h2>


                </div>
            </div>
        </section>
    );
}