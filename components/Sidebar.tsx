export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0F0A3C] text-gray-300 min-h-screen p-4">
      <div className="mb-8 text-white font-bold text-lg">🐝 RFF</div>

      <ul className="space-y-4">
        <li className="hover:text-white cursor-pointer">🏠 Dashboard</li>
        <li className="hover:text-white cursor-pointer">📝 New Request</li>
        <li className="hover:text-white cursor-pointer">📥 My Requests</li>
        <li className="hover:text-white cursor-pointer">✅ Approvals</li>
        <li className="hover:text-white cursor-pointer">🛠 Engineer Queue</li>
        <li className="hover:text-white cursor-pointer">📊 Deployments</li>
      </ul>
    </div>
  );
}