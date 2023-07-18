export const SideBarRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-800 h-full w-80 p-8 rounded-l-xl border-r border-r-gray-300">
        {children}
    </div>
  );
};
