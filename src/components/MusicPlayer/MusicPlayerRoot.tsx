
const MusicPlayerRoot = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <div className="bg-gray-900 w-full h-24 px-4 py-4 rounded-b-2xl border-t border-t-gray-700 flex justify-between z-50 relative">
        {children}
      </div>
    </>
  );
};

export default MusicPlayerRoot;
