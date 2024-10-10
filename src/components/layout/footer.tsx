// src/components/layout/footer.tsx
export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 py-6 text-center">
                <p>&copy; {new Date().getFullYear()} OpenTa Capstone Project. All rights reserved.</p>
            </div>
        </footer>
    )
}