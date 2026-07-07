import { Bell, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 shadow-sm border-b">
      <h2 className="text-2xl font-bold text-slate-800">
        Dashboard
      </h2>

      <div className="flex items-center gap-6">
        <Search className="cursor-pointer" />
        <Bell className="cursor-pointer" />
        <User className="cursor-pointer" />
      </div>
    </header>
  );
}