import fon from "../../assets/img/podval/podval.png"; // твой фон

const beige = "#d7b68a";

export default function Footer() {
    return (
        <footer
            className="relative w-full py-6 text-sm"
            style={{
                backgroundImage: `url(${fon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between text-center md:text-left gap-4 text-[13px] leading-snug"
                 style={{ color: beige }}
            >
                <span>Нижегородская область,<br />Городецкий район, д. Соболиха</span>
                <span>Пользовательское соглашение</span>
                <span>Политика обработки<br />персональных данных</span>
                <span>Специализированный застройщик ООО «СК «Резиденция», © 2025</span>
            </div>
        </footer>
    );
}
