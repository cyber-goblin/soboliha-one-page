import pinesBackground from "../../assets/img/nature/pines_background.png"; // фон от дизайнера


const beige = "#d7b68a"; // фирменный бежево-золотой

export default function Nature() {
    return (
        <div
            className="relative w-full h-[600px] flex items-center justify-end"
            style={{
                backgroundImage: `url(${pinesBackground})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* ТЕКСТ справа */}
            <div className="text-right mr-20 -mt-90">
                {/* ↑ здесь -mt-16 поднимает блок вверх */}

                <div
                    className="text-[40px] md:text-[52px] font-extrabold leading-tight uppercase tracking-wide"
                    style={{ color: beige }}
                >
                    ВАША РЕЗИДЕНЦИЯ
                </div>

                <div className="text-[40px] md:text-[52px] font-extrabold leading-tight uppercase text-white tracking-wide">
                    В ВЕКОВОМ ЛЕСУ
                </div>
            </div>
        </div>
    );
}
