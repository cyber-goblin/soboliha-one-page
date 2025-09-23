import { useEffect, useState } from "react";
import fon from "../../assets/img/ui/fon_1.png";
import logo from "../../assets/img/ui/logo-whitee.png";
import banner from "../../assets/video/banner.mp4";
import Header from "../../components/sections/Header";
import NavHero from "../../components/sections/NavHero";
import PhoneFab from "../../components/PhoneFab";
import waterIcon from "../../assets/img/water_icon.svg";
import lampIcon from "../../assets/img/lamp_icon.svg";
import gasIcon from "../../assets/img/fire_icon.svg";

export default function Hero() {
    const [phase, setPhase] = useState<"cover" | "lifting" | "done">("cover");
    const [logoVisible, setLogoVisible] = useState(false);

    useEffect(() => {
        const SHOW_LOGO = 800;
        const HOLD = 2000;
        const LIFT = 900;
        const t1 = setTimeout(() => setLogoVisible(true), SHOW_LOGO);
        const t2 = setTimeout(() => setPhase("lifting"), SHOW_LOGO + HOLD);
        const t3 = setTimeout(() => setPhase("done"), SHOW_LOGO + HOLD + LIFT);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    return (
        <section className="relative h-[100svh] w-full overflow-hidden text-white">
            {phase === "done" && <Header />}

            {/* ВИДЕО-ФОН (z-0, чтобы точно не перекрывалось) */}
            <video
                className="absolute inset-0 z-0 h-full w-full object-cover brightness-[.65]"
                src={banner}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={fon}
                aria-label="Поселок в сосновом лесу"
            />

            {/* ЗАТЕМНЕНИЕ */}
            <div className="absolute inset-0 z-10 bg-black/40" />

            {/* ПОДЛОЖКА НА ВСТУПЛЕНИИ */}
            {phase !== "done" && (
                <div
                    className={`absolute inset-0 z-20 transition-transform duration-900 ${
                        phase === "lifting" ? "-translate-y-full" : "translate-y-0"
                    }`}
                    style={{
                        backgroundImage: `url(${fon})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            )}

            {phase === "done" && <NavHero />}

            {/* КОНТЕНТНАЯ СЕТКА */}
            {phase === "done" && (
                <div className="absolute inset-0 z-30">
                    <div
                        className="mx-auto h-full w-full max-w-7xl xl:max-w-[92rem] px-3 sm:px-4 md:px-5 lg:px-6"
                    >
                        <div
                            className="grid h-full items-center gap-6 md:gap-5 lg:gap-6
                          grid-cols-1
                          md:[grid-template-columns:1fr_280px_minmax(320px,520px)]
                          lg:[grid-template-columns:minmax(520px,1fr)_300px_minmax(360px,520px)]
                          xl:[grid-template-columns:minmax(600px,1fr)_320px_minmax(420px,560px)]"
                        >
                            {/* ЛЕВЫЙ ТЕКСТ */}
                            <div className="hidden md:block justify-self-start md:ml-2 lg:ml-4">
                                <h2 className="whitespace-nowrap text-3xl md:text-4xl xl:text-[clamp(2.25rem,2.4vw,3.5rem)] font-extrabold text-white mb-4 leading-tight">
                                    «Soboliha Residence»
                                </h2>
                                <p className="max-w-none text-lg md:text-xl xl:text-[clamp(1.25rem,1.6vw,2rem)] leading-snug text-[#d7b68a] font-medium">
                                    первый поселок бизнес-класса<br />
                                    в едином архитектурном стиле<br />
                                    на Горьковском море
                                </p>
                            </div>

                            {/* ЦЕНТР: ЛОГОТИП (фиксированная колонка, не схлопывается) */}
                            <div className="flex flex-col items-center justify-center text-center justify-self-center min-w-[260px]">
                                <img
                                    src={logo}
                                    alt="Soboliha"
                                    className={`h-48 w-auto transition-opacity duration-700 ${
                                        logoVisible ? "opacity-100" : "opacity-0"
                                    }`}
                                    draggable={false}
                                />
                                {/* Мобильная подпись */}
                                <div className="md:hidden mt-4">
                                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">«Soboliha Residence»</h2>
                                    <p className="mt-2 text-base sm:text-lg leading-snug text-[#d7b68a] font-medium">
                                        первый поселок бизнес-класса<br />
                                        в едином архитектурном стиле<br />
                                        на Горьковском море
                                    </p>
                                </div>
                            </div>

                            {/* ПРАВО: КОМПАКТНЫЙ БАННЕР — ГАРАНТИРОВАННО ВИДИМЫЙ */}
                            <div
                                className="justify-self-end relative overflow-hidden rounded-2xl bg-[#0e2036]/80 backdrop-blur-[2px]
                           shadow-[0_10px_30px_rgba(0,0,0,.35)]
                           w-full md:w-auto min-w-[400px] max-w-[560px]
                           h-[300px] md:h-[240px] lg:h-[260px] xl:h-[300px]
                           flex-shrink-0"
                            >
                                <div className="absolute inset-0 flex flex-col px-4 py-5 md:px-5 md:py-6 lg:px-6 lg:py-7">
                                    <div className="flex-1 grid grid-cols-[auto_1px_1fr] items-start gap-4 md:gap-5">
                                        {/* ЛЕВО */}
                                        <div className="shrink-0">
                                            <div className="text-4xl md:text-5xl font-extrabold leading-none">17&nbsp;га</div>
                                            <div className="mt-1 text-sm md:text-base opacity-90 leading-snug">
                                                земли в<br className="hidden md:block" /> вековом лесу
                                            </div>
                                        </div>

                                        {/* разделитель */}
                                        <div className="h-full w-px bg-white/85 rounded-full" />

                                        {/* ПРАВО */}
                                        <div className="min-w-0">
                                            <div className="text-base md:text-lg font-semibold leading-tight mb-3">
                                                все<br className="hidden md:block" /> коммуникации
                                            </div>
                                            <div className="flex flex-nowrap items-center gap-2.5 md:gap-3">
                                                <div className="flex flex-col items-center shrink-0">
                                                    <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center border border-white/80 rounded-md">
                                                        <img src={lampIcon} alt="свет" className="w-6 h-6 md:w-7 md:h-7" />
                                                    </div>
                                                    <span className="mt-1 text-xs opacity-90">свет</span>
                                                </div>
                                                <div className="flex flex-col items-center shrink-0">
                                                    <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center border border-white/80 rounded-md">
                                                        <img src={gasIcon} alt="газ" className="w-6 h-6 md:w-7 md:h-7" />
                                                    </div>
                                                    <span className="mt-1 text-xs opacity-90">газ</span>
                                                </div>
                                                <div className="flex flex-col items-center shrink-0">
                                                    <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center border border-white/80 rounded-md">
                                                        <img src={waterIcon} alt="вода" className="w-6 h-6 md:w-7 md:h-7" />
                                                    </div>
                                                    <span className="mt-1 text-xs opacity-90">вода</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 md:mt-4 h-[2px] md:h-[3px] bg-white/85 rounded-full" />
                                    <button
                                        className="mt-3 md:mt-4 w-full rounded-md border border-[#d7b68a]/85 bg-transparent py-2 md:py-2.5 px-3 font-semibold text-[#d7b68a] text-sm md:text-base tracking-wide hover:bg-[#d7b68a] hover:text-black transition"
                                    >
                                        ЗАКАЗАТЬ ЗВОНОК
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <PhoneFab />
        </section>
    );
}
