import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function Links() {
    const links = [
        { title: "Project Repository", url: "https://github.com/LecturaLM/LecturaLM", description: "GitHub repository for the LecturaLM project" },
        { title: "Team Communication", url: "https://slack.com", description: "Slack workspace for team discussions" },
        { title: "Project Management", url: "https://trello.com", description: "Trello board for task management" },
        { title: "Design Assets", url: "https://figma.com", description: "Figma project containing UI/UX designs" },
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Necessary Links</h1>
            <div className="grid gap-4 md:grid-cols-2">
                {links.map((link, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                {link.title}
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">{link.description}</p>
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                Visit Link
                            </a>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}