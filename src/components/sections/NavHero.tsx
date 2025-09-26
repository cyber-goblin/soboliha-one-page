import logoWhite from "../../assets/img/ui/logo-white.png";
import { Phone } from "lucide-react";
import vkIcon from "../../assets/img/icons/vk_icon.png";
import tgIcon from "../../assets/img/icons/telegram_icon.png";
import instIcon from "../../assets/img/icons/instagramm_icon.png";
import wsIcon from "../../assets/img/icons/whatsupp_icon.png";

export default function NavHero() {
    return (
        <nav
            className="
                fixed top-[54px] left-0 right-0 z-[70]

                text-white
            "
        >
            <div className="mx-auto max-w-7xl px-3 sm:px-1 py-3 md:py-4">
                {/* ДЕСКТОП */}
                <div className="hidden md:flex items-center justify-between gap-6">
                    {/* ЛОГО */}
                    <img
                        src={logoWhite}
                        alt="Soboliha"
                        className="h-10 md:h-14 lg:h-[64px]"
                        draggable={false}
                    />

                    {/* Центр: телефон + соцсети */}
                    <div className="flex items-center gap-12">
                        <a
                            href="tel:+78314230006"
                            className="ml-26 inline-flex items-center gap-3 hover:opacity-80 transition text-lg md:text-xl"
                        >
                            <Phone className="h-6 w-6" />
                            <span className="font-actay font-bold">+7 (831) 423 00 06</span>
                        </a>

                        <div className="flex items-center gap-6 opacity-90">
                            <a href="#" aria-label="VK" className="hover:opacity-75 transition" target="_blank" rel="noreferrer">
                                <img src={vkIcon} alt="VK" className="h-7 w-7" />
                            </a>
                            <a href="#" aria-label="Telegram" className="hover:opacity-75 transition" target="_blank" rel="noreferrer">
                                <img src={tgIcon} alt="Telegram" className="h-7 w-7" />
                            </a>
                            <a href="#" aria-label="Instagram" className="hover:opacity-75 transition" target="_blank" rel="noreferrer">
                                <img src={instIcon} alt="Instagram" className="h-7 w-7" />
                            </a>
                            <a href="#" aria-label="Whatsapp" className="hover:opacity-75 transition" target="_blank" rel="noreferrer">
                                <img src={wsIcon} alt="Whatsapp" className="h-7 w-7" />
                            </a>
                        </div>
                    </div>

                    {/* Кнопка */}
                    <a
                        href="#"
                        className="rounded-xl border border-[#d7b68a] px-7 py-3 text-lg md:text-xl font-actay font-normal hover:bg-[#d7b68a]/10 transition"
                    >
                        скачать<br />презентацию
                    </a>
                </div>

                {/* МОБИЛЬНЫЙ */}
                <div className="flex md:hidden items-center justify-between gap-2">
                    {/* телефон */}
                    <a
                        href="tel:+78314230006"
                        className="inline-flex items-center gap-1.5 text-[12px] font-semibold leading-none"
                    >
                        <Phone className="h-4 w-4" />
                        <span>+7 (831) 423 00 06</span>
                    </a>

                    {/* соцсети */}
                    <div className="flex items-center gap-2">
                        <img src={vkIcon} alt="VK" className="h-4 w-4" />
                        <img src={tgIcon} alt="Telegram" className="h-4 w-4" />
                        <img src={instIcon} alt="Instagram" className="h-4 w-4" />
                        <img src={wsIcon} alt="Whatsapp" className="h-4 w-4" />
                    </div>

                    {/* кнопка */}
                    <a
                        href="#"
                        className="px-3 py-2 rounded-lg border border-[#d7b68a] text-[11px] font-semibold hover:bg-[#d7b68a]/10 transition text-center leading-tight"
                    >
                        скачать<br />презентацию
                    </a>
                </div>
            </div>
        </nav>
    );
}
