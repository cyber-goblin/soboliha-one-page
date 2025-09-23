import bg from "../../assets/img/doma/doma_background.png"; // фон от дизайнера



const beige = "#d7b68a";

export default function Doma() {
    return (
        <section className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] overflow-hidden">
            {/* Фон */}
            <img
                src={bg}
                alt="Дома для жизни"
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
            />

            {/* Контент справа */}
            <div className="relative z-10 h-full flex items-center justify-end">
                {/* Ширина блока подобрана под макет, чтобы строки ложились как в референсе */}
                <div className="text-right mr-8 md:mr-14 lg:mr-20 w-[680px] md:w-[760px] lg:w-[820px] mt-10">
                    <h2 className="uppercase font-extrabold leading-[1.06] tracking-wide">
                        {/* 1-я строка — бежевым */}
                        <span
                            className="block text-[36px] md:text-[54px] lg:text-[64px]"
                            style={{ color: beige }}
                        >
              Дома для жизни
            </span>

                        {/* 2-я строка — держим «И» с последующим словом, чтобы не падало на отдельную строку */}
                        <span className="block text-white mt-1 text-[34px] md:text-[50px] lg:text-[58px]">
              {"И\u00A0инвестиций"}
            </span>

                        {/* 3-я строка */}
                        <span className="block text-white mt-1 text-[34px] md:text-[50px] lg:text-[58px]">
              С ипотекой от 6%
            </span>
                    </h2>
                </div>
            </div>
        </section>
    );
}
