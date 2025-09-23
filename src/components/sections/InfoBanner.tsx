import waterIcon from "../../assets/img/water_icon.svg";
import lampIcon from "../../assets/img/lamp_icon.svg";
import fireIcon from "../../assets/img/fire_icon.svg";

export default function InfoBanner({ onCall }: { onCall: () => void }) {
    return (
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-6 w-[320px] md:w-[420px] text-white">
            {/* Верхний блок: текст + коммуникации */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/20 pb-4 mb-4 gap-6">
                {/* Левая часть */}
                <div>
                    <div className="text-4xl md:text-5xl font-bold">17 га</div>
                    <div className="text-sm md:text-base opacity-90 leading-snug">
                        земли в<br />вековом лесу
                    </div>
                </div>

                {/* Правая часть */}
                <div>
                    <div className="text-sm font-medium mb-2 text-right md:text-left">все коммуникации</div>
                    <div className="flex gap-6">
                        <div className="flex flex-col items-center">
                            <img src={lampIcon} alt="свет" className="w-6 h-6 mb-1" />
                            <span className="text-xs">свет</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={fireIcon} alt="газ" className="w-6 h-6 mb-1" />
                            <span className="text-xs">газ</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src={waterIcon} alt="вода" className="w-6 h-6 mb-1" />
                            <span className="text-xs">вода</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Кнопка */}
            <button
                onClick={onCall}
                className="w-full bg-[#d7b68a] text-black font-semibold py-3 rounded-md hover:bg-[#c8a876] transition"
            >
                ЗАКАЗАТЬ ЗВОНОК
            </button>
        </div>
    );
}
