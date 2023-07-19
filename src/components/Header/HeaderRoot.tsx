

export const HeaderRoot = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <div className={`flex flex-col gap-4  px-8 py-4 h-32  border-b border-b-gray-700 `}>
                {children}
            </div>
        </>
    );
};

