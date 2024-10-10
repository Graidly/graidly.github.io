import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Deliverables() {
    const deliverables = [
        { title: "Project Proposal", dueDate: "2023-09-15", status: "Completed" },
        { title: "Requirements Document", dueDate: "2023-10-01", status: "In Progress" },
        { title: "Design Document", dueDate: "2023-10-15", status: "Not Started" },
        { title: "Prototype", dueDate: "2023-11-01", status: "Not Started" },
    ]

    return (
        <>
            <h1 className="text-3xl font-bold mb-6">Deliverables</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {deliverables.map((item, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Due Date: {item.dueDate}</p>
                            <p>Status: {item.status}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}