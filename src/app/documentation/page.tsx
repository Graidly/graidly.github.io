import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Documentation() {
    const docs = [
        { title: "Project Overview", description: "High-level description of the Graidly project", link: "/docs/overview" },
        { title: "System Architecture", description: "Detailed system architecture and component interactions", link: "/docs/architecture" },
        { title: "API Documentation", description: "API endpoints, request/response formats, and usage examples", link: "/docs/api" },
        { title: "User Guide", description: "Step-by-step guide for using the Graidly system", link: "/docs/user-guide" },
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Documentation</h1>
            <div className="grid gap-4 md:grid-cols-2">
                {docs.map((doc, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle>{doc.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">{doc.description}</p>
                            <Link href={doc.link} className="text-primary hover:underline">
                                Read More
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}