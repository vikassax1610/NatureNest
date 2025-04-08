export default function ProgressBar({ value }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
      <div
        className="bg-gray-950 h-full transition-all duration-300 ease-in-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
