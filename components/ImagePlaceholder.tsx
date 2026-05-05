interface Props {
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({ label = "Bild folgt", className = "" }: Props) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-neutral-700 to-neutral-800 text-gray-500 text-sm font-sans rounded-sm ${className}`}
    >
      <span>{label}</span>
    </div>
  );
}
