const bitrixWebhookUrl = import.meta.env.VITE_BITRIX_WEBHOOK_URL;

export async function createLead(fields: { TITLE: string; NAME: string; PHONE: string; COMMENTS?: string; SOURCE_ID: string }) {
    const res = await fetch(`${bitrixWebhookUrl}/crm.lead.add.json`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            fields: {
                TITLE: fields.TITLE,
                NAME: fields.NAME,
                PHONE: [{ VALUE: fields.PHONE, VALUE_TYPE: 'MOBILE' }],
                COMMENTS: fields.COMMENTS || '',
                SOURCE_ID: fields.SOURCE_ID,
                // Если нужно, добавьте: ASSIGNED_BY_ID: 1, // ID менеджера
            },
        }),
    });

    const data = await res.json();
    if (data.error) {
        throw new Error(data.error_description || 'Ошибка Bitrix');
    }
    return data.result;
}