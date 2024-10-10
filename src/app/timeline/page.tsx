import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Timeline() {
    const milestones = [
        { date: "2023-09-01", title: "Project Kickoff", description: "Initial team meeting and project setup" },
        { date: "2023-10-15", title: "Requirements Finalization", description: "Complete and approve requirements document" },
        { date: "2023-11-30", title: "Alpha Release", description: "First working prototype with core features" },
        { date: "2024-01-15", title: "Beta Testing", description: "Begin user testing with select group of TAs" },
        { date: "2024-02-28", title: "Final Presentation", description: "Present completed project to stakeholders" },
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Project Timeline</h1>
            <div className="space-y-4">
                {milestones.map((milestone, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{milestone.date} - {milestone.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{milestone.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}