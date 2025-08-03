export default function Footer() {
    return (
        <footer className="bg-gray-100 py-4 mt-10">
            <div className="text-center text-gray-600 text-sm">
                © {new Date().getFullYear()} AustraVerse. All rights reserved.
            </div>
        </footer>
    );
}
