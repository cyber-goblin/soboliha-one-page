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
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, []);

    return (
        <section className="relative h-[100svh] w-full overflow-hidden text-white">
            {phase === "done" && <Header />}

            {/* Видео фон */}
            <video
                className="absolute inset-0 h-full w-full object-cover brightness-[.65]"
                src={banner}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={fon}
            />

            {/* затемнение */}
            <div className="absolute inset-0 z-10 bg-black/40" />

            {/* подложка */}
            {phase !== "done" && (
                <div
                    className={`absolute inset-0 z-20 transition-transform duration-900 ${phase === "lifting" ? "-translate-y-full" : "translate-y-0"}`}
                    style={{ backgroundImage: `url(${fon})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
            )}

            {/* центральный логотип */}
            <div className="
            absolute inset-0 z-30 flex flex-col items-center text-center pointer-events-none px-6
    justify-start pt-[120px]   /* мобильный: опускаем на фиксированное расстояние */
    sm:pt-[140px]              /* чуть больше на sm */
    md:justify-center md:pt-0  /* начиная с md — как было по центру */
            ">
                <img
                    src={logo}
                    alt="Soboliha"
                    className={`transition-opacity duration-600 ${logoVisible ? "opacity-100" : "opacity-0"}`}
                    style={{ height: "12rem" }}
                />

                {/* Мобильный заголовок/подзаголовок по центру */}
                {phase === "done" && (
                    <>
                        <h2 className="mt-6 text-2xl sm:text-3xl md:hidden font-extrabold text-white leading-tight">
                            «Soboliha Residence»
                        </h2>
                        <p className="mt-2 text-base sm:text-lg md:hidden leading-snug text-[#d7b68a] font-medium">
                            первый поселок бизнес-класса<br />
                            в едином архитектурном стиле<br />
                            на Горьковском море
                        </p>
                    </>
                )}
            </div>

            {/* Десктопный левый текстовый блок */}
            {phase === "done" && (
                <div
                    className="
      hidden md:block absolute left-[5%] top-1/2 -translate-y-1/2
      z-[40] max-w-xl xl:max-w-2xl    /* на больших экранах можно шире */
      xl:left-[6%]                    /* чуть левее на больших */
    "
                >
                    <h2
                        className="
        text-3xl md:text-4xl          /* laptop не трогаем */
        xl:text-[clamp(2.25rem,2.4vw,3.5rem)]  /* от ~36px до ~56px */
        font-extrabold text-white mb-4 leading-tight
      "
                    >
                        «Soboliha Residence»
                    </h2>

                    <p
                        className="
        text-lg md:text-xl            /* laptop не трогаем */
        xl:text-[clamp(1.25rem,1.6vw,2rem)]    /* от ~20px до ~32px */
        leading-snug text-[#d7b68a] font-medium
      "
                    >
                        первый поселок бизнес-класса<br />
                        в едином архитектурном стиле<br />
                        на Горьковском море
                    </p>
                </div>
            )}
            {phase === "done" && <NavHero />}

            {/* Инфо-баннер */}
            {phase === "done" && (
                <div
                    className="
      absolute z-[40]
      left-1/2 -translate-x-1/2 bottom-6 w-[92vw]
      md:bottom-auto md:top-1/2 md:-translate-y-1/2
      md:left-auto md:translate-x-0 md:right-[clamp(12px,2vw,32px)]

      /* было: md:w-[clamp(380px,32vw,440px)] lg:w-[clamp(460px,34vw,540px)] xl:w-[clamp(500px,36vw,580px)] */
      md:w-[clamp(340px,28vw,400px)]
      lg:w-[clamp(420px,30vw,500px)]
      xl:w-[clamp(480px,32vw,560px)]

      rounded-2xl bg-[#0e2036]/80 backdrop-blur-[2px] text-white
      shadow-[0_10px_30px_rgba(0,0,0,.35)]
      px-4 py-5 md:px-6 md:py-8 lg:px-8 lg:py-10
      overflow-hidden     /* добавили: чтобы контент не вылезал за края */
    "
                >
                    <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-6 md:gap-8">
                        <div className="flex flex-col items-start">
                            <div className="text-4xl md:text-6xl font-extrabold leading-none">17&nbsp;га</div>
                            <div className="text-base md:text-xl opacity-90 leading-snug mt-1">
                                земли в<br className="hidden md:block" /> вековом лесу
                            </div>
                        </div>

                        <div className="w-[2px] md:w-[3px] bg-white/85 rounded-full self-stretch" />

                        {/* ПРАВО */}
                        <div className="flex flex-col items-center md:items-start col-span-1 min-w-0">
                            <div className="text-base md:text-xl font-semibold mb-3 md:mb-3 leading-tight text-center md:text-left">
                                все<br className="hidden md:block" /> коммуникации
                            </div>

                            {/* ИКОНКИ */}
                            <div className="flex flex-wrap gap-3 md:gap-4 pr-1">
                                {/* 1 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/80 rounded-md">
                                        <img src={lampIcon} alt="свет" className="w-7 h-7 md:w-8 md:h-8" />
                                    </div>
                                    <span className="mt-1 md:mt-1 text-xs md:text-sm opacity-90">свет</span>
                                </div>
                                {/* 2 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/80 rounded-md">
                                        <img src={gasIcon} alt="газ" className="w-7 h-7 md:w-8 md:h-8" />
                                    </div>
                                    <span className="mt-1 md:mt-1 text-xs md:text-sm opacity-90">газ</span>
                                </div>
                                {/* 3 */}
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center border border-white/80 rounded-md">
                                        <img src={waterIcon} alt="вода" className="w-7 h-7 md:w-8 md:h-8" />
                                    </div>
                                    <span className="mt-1 md:mt-1 text-xs md:text-sm opacity-90">вода</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 md:mt-6 h-[2px] md:h-[3px] bg-white/85 rounded-full" />

                    <button className="mt-4 md:mt-5 w-full rounded-md border border-[#d7b68a]/85 bg-transparent py-2 md:py-3 px-3 font-semibold text-[#d7b68a] text-sm md:text-base tracking-wide hover:bg-[#d7b68a] hover:text-black transition">
                        ЗАКАЗАТЬ ЗВОНОК
                    </button>
                </div>
            )}

            <PhoneFab />
        </section>
    );
}
