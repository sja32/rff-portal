export default function Navbar() {
  return (
    <div className="w-full bg-[#1D1160] text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="bg-[#00788C] px-3 py-1 rounded-md font-bold">RFF</div>
        <div>
          <div className="font-semibold">RequestFlowForge</div>
          <div className="text-xs text-gray-300">Secure. Approve. Deploy.</div>
        </div>
      </div>

      <div className="text-sm">Sharod (Admin)</div>
    </div>
  );
}