export const Label = ({ labelProps }: { labelProps: string }) => {
    return (
        <div
            className="flex-grow sm:flex-grow-0 py-1 px-3 bg-slate-200 text-black rounded-lg hover:font-bold duration-200"
        >
            {labelProps}
        </div>
    )
}