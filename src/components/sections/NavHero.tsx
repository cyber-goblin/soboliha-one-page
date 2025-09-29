import logoWhite from "../../assets/img/ui/logo-white.png";
import { Phone } from "lucide-react";
import tgIcon from "../../assets/img/icons/telegram_icon.png";
import instIcon from "../../assets/img/icons/instagramm_icon.png";
import { openModal } from "../../utils/modal";

export default function NavHero() {
    return (
        <nav className="fixed top-[54px] left-0 right-0 z-[70] text-white">
            <div className="mx-auto max-w-7xl px-3 sm:px-1 py-3 min-[1080px]:py-4">
                {/* ДЕСКТОП ≥1080px */}
                <div className="hidden min-[1080px]:flex items-center justify-between gap-6">
                    {/* ЛОГО */}
                    <img
                        src={logoWhite}
                        alt="Soboliha"
                        className="h-10 min-[1080px]:h-14 lg:h-[64px]"
                        draggable={false}
                    />

                    {/* Центр: телефон + соцсети */}
                    <div className="flex items-center gap-12">
                        <a
                            href="tel:+78314230006"
                            className="inline-flex items-center gap-3 hover:opacity-80 transition text-lg min-[1080px]:text-xl"
                        >
                            <Phone className="h-6 w-6" />
                            <span className="font-actay font-bold">+7 (831) 423 00 06</span>
                        </a>

                        <div className="flex items-center gap-6 opacity-90">
                            <a
                                href="https://t.me/soboliharesidence"
                                aria-label="Telegram"
                                className="hover:opacity-75 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={tgIcon} alt="Telegram" className="h-7 w-7" />
                            </a>
                            <a
                                href="https://www.instagram.com/soboliha_residence"
                                aria-label="Instagram"
                                className="hover:opacity-75 transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={instIcon} alt="Instagram" className="h-7 w-7" />
                            </a>
                        </div>
                    </div>

                    {/* Кнопка */}
                    <button
                        onClick={() => openModal("presentation")}
                        className="rounded-xl border border-[#d7b68a] px-7 py-3 text-lg min-[1080px]:text-xl font-actay font-normal hover:bg-[#d7b68a]/10 transition text-center leading-tight"
                    >
                        скачать
                        <br />
                        презентацию
                    </button>
                </div>

                {/* МОБИЛЬНЫЙ <1080px */}
                <div className="flex min-[1080px]:hidden items-center justify-between gap-2">
                    <a
                        href="tel:+78314230006"
                        className="inline-flex items-center gap-1.5 text-[12px] font-semibold leading-none"
                    >
                        <Phone className="h-4 w-4" />
                        <span>+7 (831) 423 00 06</span>
                    </a>

                    <div className="flex items-center gap-2">
                        <a
                            href="https://t.me/soboliharesidence"
                            aria-label="Telegram"
                            className="hover:opacity-75 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={tgIcon} alt="Telegram" className="h-4 w-4" />
                        </a>
                        <a
                            href="https://www.instagram.com/soboliha_residence"
                            aria-label="Instagram"
                            className="hover:opacity-75 transition"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={instIcon} alt="Instagram" className="h-4 w-4" />
                        </a>
                    </div>

                    {/* уменьшенная кнопка + выравнивание текста по центру */}
                    <button
                        onClick={() => openModal("presentation")}
                        className="rounded-lg border border-[#d7b68a] px-3 py-1.5 text-[11px] font-actay font-medium leading-[1.05] text-center hover:bg-[#d7b68a]/10 transition"
                    >
                        скачать
                        <br />
                        презентацию
                    </button>
                </div>
            </div>
        </nav>
    );
}
