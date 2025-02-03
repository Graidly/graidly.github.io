import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Logs() {
    const logs = [
        {
            date: "2024-09-30",
            author: "Anıl Hoca 1",
            entries: [
                "Innovation expert konusu konuşuldu",
                "Goodpoint incelendi",
                "Projenin hatları konuşuldu",
                "OCR üzerine konuşuldu",
                "On premise mantığı konuşuldu",
                "Memorization effects of LLM konuşuldu",
                "Submissionlardan feedback’e dayalı yeni rubric enhancement konuşuldu",
                "User study üzerine konuşuldu",
                "Bazı modeller incelendi",
                "(LLava model (https://llava-vl.github.io))",
                "(Llama gemma modelleri fine-tune için konuşuldu)",
                "(GPT-o1)",
                "(Gwen 2)",
                "- OpenAI researcher access program üzerine konuşuldu",
                "- Kaggle üzerine konuşuldu",
                "- Sahand TA’den yardım alınabilir",
                "- Azure ve Amazon platformları konuşuldu",
                "- Lightning AI platformu değerlendirildi",
            ],
        },
        // {
        //     date: "2024-10-01",
        //     author: "Grup Görüşmesi 1",
        //     entries: [
        //         "- Innovation Expertlere (Mustafa Sakalsız ve Mustafa Demir) mail atıldı",
        //         "- Notion hesabı açıldı",
        //         "- ChatGPT’ye ilk API call yapıldı ve cevap alındı",
        //         "- Başvurulacak research credit yerleri bakıldı",
        //         "- Websitesi yapıldı",
        //         "- Input/Output formatları halledildi (JSON)",
        //     ],
        // },
        {
            date: "2024-10-25",
            author: "Anıl Hoca 2",
            entries: [
                "- Anıl Hoca’yla aşağıdaki konuyla ilgili görüştük ve danışmanlığına başvurduk:",
                "  - İlk dönem Local LLM fine-tune etme hedefimizi erteledik.",
                "  - Bilgisayarlarımızda fine-tune edebildiğimiz modellerde fine-tune etmenin gözle görülür bir farkını göremedik.",
                "  - İlk dönem sistemimizi OpenAI’a atacağımız call’larla kurarak büyük ölçüde tamamlamayı planlıyoruz.",
                "  - İkinci dönemde on-premise, local LLM’de geliştirmeyi yapmayı planlıyoruz.",
                "- Anıl Hoca bu strateji değişikliğimizi mantıklı buldu ve kabul etti.",
            ],
        },
        {
            date: "2024-10-24",
            author: "Haluk Altunel Innovation Expert Meeting Log",
            entries: [
                "- Hocaya sunum yapıldı.",
                "- Hoca IE (Innovation Expert) olmaya okey verdi.",
                "- Hocanın notları:",
                "  - Explainable AI önemli. AI öğrenciyi ikna edebilmeli.",
                "  - Consistent notlandırma işi önemli.",
                "  - Senkron LLM kullanımı."
            ],
        },
        {
             date: "2025-30-01",
             author: "Grup Görüşmesi 2",
             entries: [
                 "- Yeni dönemdeki zamanlama akışı yapıldır",
                 "- Sprintlerin uzunluğuna ve haftalık yüz yüze toplantılarına günlerine karar verildi",
                 "- BackEnd microservice mimarisinden monolitik mimariye dönme kararı alındı ve uygulandı",
                 "- Yeni çıkan DeepSeek ile ilgili araştırma yapılmasına karar verildi.",
                 "- Sprint taskları dağıtıldı.",
                 "- OCR için araştırılmalara başlanıldı.",
             ],
         },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Project Logs</h1>
            <div className="space-y-4">
                {logs.map((log, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{log.date} - {log.author}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc pl-5">
                                {log.entries.map((entry, index) => (
                                    <li key={index}>{entry}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
