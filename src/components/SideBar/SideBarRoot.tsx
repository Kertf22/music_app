export const SideBarRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-800 h-full w-full max-w-[256px] p-8 rounded-tl-2xl border-r border-r-gray-700">
        {children}
    </div>
  );
};
