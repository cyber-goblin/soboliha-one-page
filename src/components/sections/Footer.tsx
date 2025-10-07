import fon from "../../assets/img/podval/podval.png";

const beige = "#d7b68a";

export default function Footer() {
    return (
        <footer
            className="relative w-full py-3 text-xs sm:text-sm"
            style={{
                backgroundImage: `url(${fon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="
          mx-auto max-w-7xl px-4
          flex flex-wrap justify-center md:justify-between
          text-center md:text-left
          gap-x-3 gap-y-1
          leading-snug
          font-actay font-normal
        "
                style={{ color: beige }}
            >
                <span>Нижегородская обл., Городецкий р-н, д. Соболиха</span>
                <span className="hidden sm:inline">|</span>
                <span>Пользовательское соглашение</span>
                <span className="hidden sm:inline">|</span>
                <span>Политика обработки данных</span>
                <span className="hidden sm:inline">|</span>

            </div>
        </footer>
    );
}
