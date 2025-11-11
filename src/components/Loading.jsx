const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#f1f5f9] to-[#e2e8f0]">
      {/* Spinning Circle with Logo Theme */}
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-[#bae6fd] border-t-[#00aeef] rounded-full animate-spin"></div>
        <span className="absolute text-3xl text-[#34d399]">♻️</span>
      </div>

      {/* Text Section */}
      <h2 className="mt-6 text-2xl font-semibold text-[#0096c7] animate-pulse">
        Connecting for a Cleaner Community...
      </h2>
      <p className="mt-2 text-gray-600 text-sm">
        Please wait while we load your Clean Connect experience 🌍
      </p>
    </div>
  );
};

export default Loading;
