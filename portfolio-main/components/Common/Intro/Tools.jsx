const Badge = ({ title }) => (
  <span
    className="text-xs font-semibold px-2 py-0.5 rounded-full"
    style={{
      background: "rgba(31, 223, 100, 0.15)",
      color: "#1fdf64",
      border: "1px solid rgba(31, 223, 100, 0.3)",
    }}
  >
    {title}
  </span>
);

const TOOLS = ["Docker", "AWS", "Oracle Cloud", "Git", "Jest", "MediaPipe", "ML Pipelines", "Stripe API", "DynamoDB"];

const Tools = () => {
  return (
    <div className="flex flex-col space-y-1 pt-6">
      <div className="flex flex-col gap-y-4">
        <span className="text-Snow text-xs font-bold">Tools</span>
        <div className="flex flex-wrap gap-2">
          {TOOLS.map((item) => (
            <Badge key={item} title={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;