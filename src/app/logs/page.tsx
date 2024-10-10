import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Logs() {
    const logs = [
        { date: "2023-09-10", author: "Alice", entry: "Initialized project repository and set up development environment." },
        { date: "2023-09-12", author: "Bob", entry: "Completed initial research on existing TA management systems." },
        { date: "2023-09-14", author: "Charlie", entry: "Started drafting project proposal and outlining key features." },
        { date: "2023-09-16", author: "Diana", entry: "Conducted team meeting to discuss project scope and timeline." },
    ]

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
                            <p>{log.entry}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}