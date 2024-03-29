import React, { Children, useEffect, useState } from "react";

function calculateColumnCount(
  columns: ColumnsProps["columns"],
  windowWidth?: number,
) {
  // If columns is an object, find the largest breakpoint that is smaller than the window width
  if (typeof columns === "object") {
    if (windowWidth) {
      // Filter out breakpoints that are larger than the window width and sort them from largest to smallest
      const breakpoints = Object.keys(columns)
        .map(Number)
        .filter((key) => key <= windowWidth)
        .sort((a, b) => b - a);

      // If no breakpoints match, return 1 as the smallest column count
      return (
        (typeof breakpoints[0] === "number" && columns[breakpoints[0]]) || 1
      );
    }

    // If no window width is provided (e.g. in SSR), return the biggest column count
    return Math.max(...Object.values(columns).map(Number));
  }

  // If columns is a number, return it as is
  if (typeof columns === "number") {
    return columns;
  }

  // If nothing matches, return the default of 3
  return 3;
}

// How columnArray looks:
// columnArray
//   ╰ column[]
//       ╰ child[]

function getColumnArray(children: React.ReactNode, columnCount: number) {
  // Initialize a new column array with an empty array for each column
  const columnArray: Array<React.ReactNode[]> = Array(columnCount)
    .fill(null)
    .map(() => []);

  // Loop over children and add them to the appropriate column
  Children.forEach(children, (child, index) => {
    const column = columnArray[index % columnCount];

    if (!(child && column)) return;
    column.push(child);
  });

  return columnArray;
}

export interface ColumnsProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Class name to apply to each column.
   *
   * @default ""
   *
   * @example
   * className="flex w-3/4 gap-4"
   * columnClassName="flex flex-col gap-4 flex-1"
   * columns={3}
   */
  columnClassName?: string;

  /**
   * A fixed amount of columns or an object mapping breakpoints to column counts.
   *
   * @default 3
   *
   * @example
   * // 0:1 is set by default, you can override it.
   * columns={{ 768: 2, 1024: 3 }}
   */
  columns?: number | { [key in number]?: number };
}

export default function Columns({
  // * Don't forget to set default values for props
  children,
  columns = 3,
  columnClassName = "",
  ...Props
}: ColumnsProps) {
  const [columnCount, setColumnCount] = useState(calculateColumnCount(columns));
  const [columnArray, setColumnArray] = useState(() =>
    getColumnArray(children, columnCount),
  );

  // Update columnCount and columnArray when the window is resized or the columns prop changes
  useEffect(() => {
    function handleResize() {
      setColumnCount(calculateColumnCount(columns, window.innerWidth));
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [columns]);

  // If children or columnCount changes, update columnArray
  useEffect(() => {
    setColumnArray(getColumnArray(children, columnCount));
  }, [columnCount, children]);

  return (
    <div {...Props}>
      {columnArray.map((column, index) => (
        // Using index as key here is probably okay since it recalculates columnArray on every render
        <div className={columnClassName} key={index}>
          {column}
        </div>
      ))}
    </div>
  );
}
