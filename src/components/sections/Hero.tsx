import { useEffect, useState } from "react";
import fon from "../../assets/img/ui/fon_1.png";
import logo from "../../assets/img/ui/logo-whitee.png";
import banner from "../../assets/video/banner.mp4";
import Header from "../../components/sections/Header";
import NavHero from "../../components/sections/NavHero";
import ModalHost from "../../components/ModalHost";
import { openModal } from "../../utils/modal";

// PNG-иконки (с уже нарисованной рамкой)
import waterIcon from "../../assets/img/water_icon.png";
import lampIcon from "../../assets/img/lamp_icon.png";
import gasIcon from "../../assets/img/fire_icon.png";

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

            {/* видео фон */}
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

            {/* центральный контент */}
            <div
                className="
          absolute inset-0 z-30 flex flex-col items-center text-center pointer-events-none px-6
          justify-start pt-[22vh] sm:pt-[24vh]
          min-[1080px]:justify-center min-[1080px]:pt-0
        "
            >
                <img
                    src={logo}
                    alt="Soboliha"
                    className={`transition-opacity duration-600 h-[11rem] sm:h-[14rem] min-[1080px]:absolute min-[1080px]:top-1/2 min-[1080px]:left-1/2 min-[1080px]:-translate-x-1/2 min-[1080px]:-translate-y-1/2 ${
                        logoVisible ? "opacity-100" : "opacity-0"
                    }`}
                />

                {phase === "done" && (
                    <>
                        {/* заголовок/подзаголовок — только до 1080px */}
                        <p className="mt-4 text-base sm:text-lg leading-snug text-[#d7b68a] font-medium min-[1080px]:hidden">
                            первый поселок бизнес-класса
                            <br /> в едином архитектурном стиле
                            <br /> на Горьковском море
                        </p>
                    </>
                )}

                {/* мобильный инфо-баннер — только до 1080px */}
                {phase === "done" && (
                    <div className="mt-4 mb-6 min-[1080px]:hidden pointer-events-auto rounded-2xl bg-[#0e2036]/80 backdrop-blur-[2px] text-white shadow-[0_10px_30px_rgba(0,0,0,.35)] px-5 py-6 w-full max-w-[360px]">
                        <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
                            <div className="flex flex-col items-start">
                                <div className="text-4xl font-extrabold leading-none">17&nbsp;га</div>
                                <div className="mt-1 text-sm opacity-90 leading-snug text-left uppercase">
                                    земли в
                                    <br /> вековом лесу
                                </div>
                            </div>

                            <div className="w-[2px] bg-white/85 rounded-full self-stretch" />

                            <div className="flex flex-col items-start">
                                <div className="text-[12px] font-semibold mb-1 leading-tight uppercase">
                                    все коммуникации
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-col items-center">
                                        <img src={lampIcon} alt="свет" className="w-8 h-8 object-contain block" />
                                        <span className="mt-0.5 text-[10px] opacity-90 uppercase">свет</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img src={gasIcon} alt="газ" className="w-8 h-8 object-contain block" />
                                        <span className="mt-0.5 text-[10px] opacity-90 uppercase">газ</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <img src={waterIcon} alt="вода" className="w-8 h-8 object-contain block" />
                                        <span className="mt-0.5 text-[10px] opacity-90 uppercase">вода</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 h-[2px] bg-white/85 rounded-full" />
                        <button
                            onClick={() => openModal("callback")}
                            className="mt-3 w-full rounded-md border border-[#d7b68a]/85 bg-transparent py-1.5 px-3 font-semibold text-[#d7b68a] text-xs tracking-wide hover:bg-[#d7b68a] hover:text-black transition"
                        >
                            ЗАКАЗАТЬ ЗВОНОК
                        </button>
                    </div>
                )}
            </div>

            {phase === "done" && (
                <div className="absolute inset-x-0 top-0 h-full z-40 pointer-events-none">
                    <div className="mx-auto max-w-7xl px-3 sm:px-1 h-full relative">
                        {/* левый текст — только ≥1080px */}
                        <div className="hidden min-[1080px]:block absolute left-0 top-1/2 -translate-y-1/2 max-w-xl xl:max-w-2xl uppercase">
                            <h2 className="text-3xl min-[1080px]:text-4xl xl:text-[clamp(2.25rem,2.4vw,3.5rem)] font-actay font-bold text-white mb-4 leading-tight">
                                «Soboliha Residence»
                            </h2>
                            <p className="text-lg min-[1080px]:text-xl xl:text-[clamp(1.25rem,1.6vw,2rem)] leading-snug text-[#d7b68a] font-actay font-normal">
                                первый поселок бизнес-класса
                                <br />
                                в едином архитектурном стиле
                                <br />
                                на Горьковском море
                            </p>
                        </div>

                        {/* правый инфо-баннер — только ≥1080px */}
                        <div className="hidden min-[1080px]:block absolute right-0 top-1/2 -translate-y-1/2 w-[380px] lg:w-[360px] xl:w-[420px] rounded-2xl bg-[#0e2036]/75 backdrop-blur-[2px] shadow-[0_14px_40px_rgba(0,0,0,.38)] px-7 py-7 lg:px-5 lg:py-5">
                            <div className="grid grid-cols-[1fr_auto_1fr] gap-5 items-start uppercase">
                                <div className="flex flex-col items-start">
                                    <div className="flex items-end leading-none">
                                        <span className="text-5xl xl:text-[65px] font-actay font-bold tabular-nums">17</span>
                                        <span className="-ml-0.5 text-3xl xl:text-[38px] font-actay font-bold normal-case">га</span>
                                    </div>
                                    <div className="mt-3 text-[18px] leading-snug opacity-90 font-actay font-normal ml-3">
                                        земли в
                                        <br />
                                        вековом лесу
                                    </div>
                                </div>

                                <div className="self-stretch w-px bg-white/80 rounded-full" />

                                <div className="flex flex-col items-start">
                                    <div className="text-[17px] font-actay font-normal leading-tight tracking-wide text-white/95 mb-3">
                                        все коммуникации
                                    </div>
                                    <div className="flex items-center gap-3.5">
                                        <div className="flex flex-col items-center">
                                            <img src={lampIcon} alt="свет" className="w-[64px] h-[64px] object-contain block" />
                                            <span className="mt-1 text-[12px] opacity-90 font-actay font-normal">свет</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img src={gasIcon} alt="газ" className="w-[64px] h-[64px] object-contain block" />
                                            <span className="mt-1 text-[12px] opacity-90 font-actay font-normal">газ</span>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <img src={waterIcon} alt="вода" className="w-[64px] h-[64px] object-contain block" />
                                            <span className="mt-1 text-[12px] opacity-90 font-actay font-normal">вода</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 h-px bg-white/85 rounded-full" />
                            <div className="mt-4 flex justify-center">
                                <button
                                    onClick={() => openModal("callback")}
                                    className="rounded-xl border border-[#d7b68a] bg-transparent py-2 px-6 text-[14px] font-actay font-normal tracking-wide text-[#d7b68a] hover:bg-[#d7b68a]/10 transition pointer-events-auto"
                                >
                                    ЗАКАЗАТЬ ЗВОНОК
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {phase === "done" && <NavHero />}
            <ModalHost />
        </section>
    );
}