export default function Loading() {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 rounded-full border-2 border-gold border-t-transparent animate-spin mx-auto mb-4" />
        <p className="text-sm font-medium text-brown-light uppercase tracking-widest">Loading</p>
      </div>
    </div>
  );
}
