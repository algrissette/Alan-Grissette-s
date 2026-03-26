const languages = [
    { label: "English", level: "Native", color: "#1fdf64" },
    { label: "Korean", level: "Intermediate", color: "#1fdf64" },
    { label: "Mandarin", level: "Beginner", color: "#1fdf64" },
];

const Languages = () => {
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className="text-Snow text-xs font-bold">Languages</span>
                <div className="flex flex-wrap gap-3">
                    {languages.map(({ label, level }) => (
                        <div
                            key={label}
                            className="flex flex-col items-start gap-y-1"
                        >
                            <span className="text-xs font-bold text-Snow">{label}</span>
                            <span
                                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                                style={{
                                    background: "rgba(31, 223, 100, 0.15)",
                                    color: "#1fdf64",
                                    border: "1px solid rgba(31, 223, 100, 0.3)",
                                }}
                            >
                                {level}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Languages;