import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Meetings() {
    const meetings = [
        { date: "2023-09-20", time: "14:00", title: "Weekly Progress Check", agenda: "Review deliverables, assign tasks" },
        { date: "2023-09-27", time: "14:00", title: "Design Review", agenda: "Present and discuss UI/UX designs" },
        { date: "2023-10-04", time: "14:00", title: "Sprint Planning", agenda: "Plan next sprint, estimate user stories" },
        { date: "2023-10-11", time: "14:00", title: "Midpoint Review", agenda: "Assess project progress, adjust timeline if needed" },
    ]

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">Team Meetings</h1>
                <div className="space-y-4">
                    {meetings.map((meeting, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <CardTitle>{meeting.date} at {meeting.time} - {meeting.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Agenda: {meeting.agenda}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}
