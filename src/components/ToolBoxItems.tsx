import React from "react";

const ToolBoxItems = ({
  items,
}: {
  items: { title: string; icon: React.ReactNode }[];
}) => {
  const half = Math.ceil(items.length / 2);
  const row1 = items.slice(0, half);
  const row2 = items.slice(half);

  const renderRow = (
    row: { title: string; icon: React.ReactNode }[],
    direction: "left" | "right",
    index: number
  ) => (
    <div key={index} className="relative w-full overflow-clip py-1">
      <div
        className={
          `flex w-max gap-4 md:gap-6 lg:gap-9 "
          ${direction === "left" && "animate-move-left"} ${direction === "right" && "animate-move-right"} [animation-duration:15s]`
        }
      >
        {Array.from({ length: 2 }).map((_, idx) =>
          row.map((item, i) => (
            <div
              key={`${idx}-${i}`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium outline outline-2  outline-white/10 bg-white/5 backdrop-blur"
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 relative z-0">
      {renderRow(row1, "left", 1)}
      {renderRow(row2, "right", 2)}
    </div>
  );
};

export default ToolBoxItems;
