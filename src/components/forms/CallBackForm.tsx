import { useMemo, useState } from "react";
import { createLead } from "../../lib/bitrix";

type Props = { onSuccess: () => void };

function normalizePhone(raw: string) {
    // Оставляем цифры и ведущий плюс
    const trimmed = raw.trim();
    const plus = trimmed.startsWith("+") ? "+" : "";
    const digits = trimmed.replace(/[^\d]/g, "");
    return plus + digits;
}

function validateName(name: string) {
    const v = name.trim();
    // 2+ символа, буквы/пробел/дефис
    return v.length >= 2 && /^[A-Za-zА-Яа-яЁё\-\s']{2,}$/.test(v);
}

function validatePhone(phone: string) {
    const p = normalizePhone(phone);
    // 6–20 цифр (можно с ведущим +)
    return /^(\+)?\d{6,20}$/.test(p);
}

export default function CallbackForm({ onSuccess }: Props) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");
    const [consent, setConsent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    const nameInvalid = useMemo(() => (name ? !validateName(name) : false), [name]);
    const phoneInvalid = useMemo(() => (phone ? !validatePhone(phone) : false), [phone]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErr(null);

        if (!validateName(name)) return setErr("Введите корректное имя (минимум 2 символа).");
        if (!validatePhone(phone)) return setErr("Введите корректный телефон (6–20 цифр, можно с +).");
        if (!consent) return setErr("Подтвердите согласие на обработку персональных данных.");

        try {
            setLoading(true);
            await createLead({
                TITLE: "Заявка: заказать звонок (сайт)",
                NAME: name.trim(),
                PHONE: normalizePhone(phone),
                COMMENTS: comment.trim(),
                SOURCE_ID: "WEB",
            });
            onSuccess();
        } catch (e: any) {
            setErr(e?.message || "Ошибка отправки. Попробуйте ещё раз.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
            <div>
                <label htmlFor="cb-name" className="block text-sm mb-1">Имя*</label>
                <input
                    id="cb-name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full rounded-lg bg-white/10 border px-3 py-2 outline-none focus:border-[#d7b68a] ${
                        nameInvalid ? "border-red-400" : "border-white/20"
                    }`}
                    placeholder="Ваше имя"
                    aria-invalid={nameInvalid || undefined}
                />
                {nameInvalid && <p className="mt-1 text-xs text-red-300">Проверьте, пожалуйста, имя.</p>}
            </div>

            <div>
                <label htmlFor="cb-phone" className="block text-sm mb-1">Телефон*</label>
                <input
                    id="cb-phone"
                    name="phone"
                    inputMode="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full rounded-lg bg-white/10 border px-3 py-2 outline-none focus:border-[#d7b68a] ${
                        phoneInvalid ? "border-red-400" : "border-white/20"
                    }`}
                    placeholder="+7 900 000 00 00"
                    aria-invalid={phoneInvalid || undefined}
                />
                {phoneInvalid && <p className="mt-1 text-xs text-red-300">Проверьте номер телефона.</p>}
            </div>

            <div>
                <label htmlFor="cb-comment" className="block text-sm mb-1">Комментарий (опционально)</label>
                <textarea
                    id="cb-comment"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 outline-none focus:border-[#d7b68a] min-h-[90px]"
                    placeholder="Удобное время для звонка, вопросы и т.д."
                />
            </div>

            <label className="flex items-start gap-2 text-xs leading-snug">
                <input
                    id="cb-consent"
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5"
                />
                <span>
          Отправляя форму, вы даёте согласие на&nbsp;
                    <a href="/privacy" target="_blank" rel="noreferrer" className="underline underline-offset-2">
            обработку персональных данных
          </a>.
        </span>
            </label>

            {err && <div className="text-red-300 text-sm">{err}</div>}

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl border border-[#d7b68a] py-2 font-semibold text-[#d7b68a] hover:bg-[#d7b68a]/10 transition disabled:opacity-50"
                aria-busy={loading || undefined}
            >
                {loading ? "Отправка..." : "Отправить"}
            </button>
        </form>
    );
}
