import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function Links() {
    const links = [
        { title: "Project Repository", url: "https://github.com/Graidly/graidly", description: "GitHub repository for the project" },
        { title: "Project Management", url: "https://www.notion.so/Graidly-Project-Management-14a961e0a5b58025b7cfefafebabbd3c", description: "Notion workspace for project management" },
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