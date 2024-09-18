export const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-screen-xl w-full mx-auto px-3" >
            {children}
        </div>
    )
}