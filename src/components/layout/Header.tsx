import Link from "next/link";
import { MapPin, Calendar } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            what TO do
          </Link>
          <nav className="flex gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              <Calendar className="w-4 h-4" />
              Events
            </Link>
            <Link
              href="/map"
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              <MapPin className="w-4 h-4" />
              Map View
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
