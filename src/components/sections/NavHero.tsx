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
        absolute left-0 right-0 z-[70] text-white
        /* ниже синего header на мобилке */
        top-[calc(env(safe-area-inset-top)+50px)]
        sm:top-[calc(env(safe-area-inset-top)+54px)]
        md:top-16 lg:top-16
      "
        >
            <div className="mx-auto max-w-7xl px-3 sm:px-4">
                {/* ЛОГО: скрыт на мобилке, виден с md+ */}
                <div className="hidden md:flex items-center justify-between gap-4 mb-0">
                    <img
                        src={logoWhite}
                        alt="Soboliha"
                        className="h-10 md:h-14 lg:h-[64px]"
                        draggable={false}
                    />

                    {/* ДЕСКТОП: телефон + соцсети + кнопка */}
                    <div className="hidden md:flex items-center gap-16">
                        <a
                            href="tel:+78314230006"
                            className="inline-flex items-center gap-3 hover:opacity-80 transition text-lg md:text-xl"
                        >
                            <Phone className="h-6 w-6" />
                            <span className="font-semibold">+7 (831) 423 00 06</span>
                        </a>

                        <div className="flex items-center gap-5 opacity-90">
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

                        <a
                            href="#"
                            className="rounded-xl border border-[#d7b68a] px-7 py-4 text-lg md:text-xl text-center leading-tight hover:bg-[#d7b68a]/10 transition text-white font-semibold"
                        >
                            скачать презентацию
                        </a>
                    </div>
                </div>

                {/* МОБИЛЬНЫЙ: ОДНА СТРОКА без логотипа */}
                <div className="md:hidden flex items-center justify-between gap-2 flex-nowrap">
                    {/* телефон */}
                    <a
                        href="tel:+78314230006"
                        className="inline-flex items-center gap-1.5 text-[12px] font-semibold leading-none whitespace-nowrap shrink-0"
                    >
                        <Phone className="h-4 w-4" />
                        <span className="whitespace-nowrap">+7 (831) 423 00 06</span>
                    </a>

                    {/* соцсети */}
                    <div className="min-w-0 flex items-center justify-center gap-2 flex-nowrap">
                        <img src={vkIcon} alt="VK" className="h-4 w-4 shrink-0" />
                        <img src={tgIcon} alt="Telegram" className="h-4 w-4 shrink-0" />
                        <img src={instIcon} alt="Instagram" className="h-4 w-4 shrink-0" />
                        <img src={wsIcon} alt="Whatsapp" className="h-4 w-4 shrink-0" />
                    </div>

                    {/* кнопка */}
                    {/* кнопка */}
                    <a
                        href="#"
                        className="
    inline-flex items-center justify-center shrink-0
    h-auto px-3 py-2
    rounded-lg border border-white
    text-[12px] font-semibold leading-tight whitespace-nowrap
    text-white
    hover:bg-white/10
    text-center
  "
                    >
                        скачать<br />презентацию
                    </a>
                </div>
            </div>
        </nav>
    );
}
