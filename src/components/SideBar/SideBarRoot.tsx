export const SideBarRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-900 h-full w-full max-w-[256px] p-4 rounded-2xl border border-gray-700">
        {children}
    </div>
  );
};
