import Link from 'next/link'
import { Book, FileText, Link as LinkIcon, MessageCircle, Clock } from 'lucide-react'
import React from "react";

export default function Navigation() {
    return (
        <nav className="bg-secondary">
            <div className="container mx-auto px-4">
                <ul className="flex space-x-4 overflow-x-auto">
                    <NavItem href="/" icon={<FileText className="w-4 h-4" />}>
                        Home
                    </NavItem>
                    <NavItem href="/deliverables" icon={<FileText className="w-4 h-4" />}>
                        Deliverables
                    </NavItem>
                    <NavItem href="/logs" icon={<Book className="w-4 h-4" />}>
                        Logs
                    </NavItem>
                    <NavItem href="/meetings" icon={<MessageCircle className="w-4 h-4" />}>
                        Meetings
                    </NavItem>
                    <NavItem href="/documentation" icon={<FileText className="w-4 h-4" />}>
                        Documentation
                    </NavItem>
                    <NavItem href="/links" icon={<LinkIcon className="w-4 h-4" />}>
                        Necessary Links
                    </NavItem>
                    <NavItem href="/timeline" icon={<Clock className="w-4 h-4" />}>
                        Timeline
                    </NavItem>
                </ul>
            </div>
        </nav>
    )
}

function NavItem({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
    return (
        <li>
            <Link
                href={href}
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-secondary-foreground/10 transition-colors"
            >
                {icon}
                <span>{children}</span>
            </Link>
        </li>
    )
}