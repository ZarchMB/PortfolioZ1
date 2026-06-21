type FlowDiagramProps = {
  className?: string;
};

/**
 * Signature element: a small annotated data-flow diagram —
 * sensor -> cloud -> recommendation -> user. Echoes the actual
 * architecture of the ReForest project rather than decorating it.
 */
export function FlowDiagram({ className = "" }: FlowDiagramProps) {
  const nodes = [
    { label: "SOIL SENSOR", sub: "Arduino · C++" },
    { label: "REALTIME DB", sub: "Firebase" },
    { label: "RECOMMENDATION", sub: "ML model" },
    { label: "MOBILE APP", sub: "Web + React" },
  ];

  return (
    <svg
      viewBox="0 0 720 92"
      className={className}
      role="img"
      aria-label="Data flow: soil sensor to Firebase realtime database to recommendation model to mobile application"
    >
      {nodes.map((node, i) => {
        const x = 12 + i * 180;
        const isLast = i === nodes.length - 1;
        return (
          <g key={node.label}>
            <rect
              x={x}
              y={18}
              width={156}
              height={56}
              rx={3}
              fill={isLast ? "var(--steel)" : "var(--paper-raised)"}
              stroke={isLast ? "var(--steel)" : "var(--rule-strong)"}
              strokeWidth={1}
            />
            <text
              x={x + 78}
              y={42}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="9.5"
              letterSpacing="0.06em"
              fill={isLast ? "var(--paper)" : "var(--ink)"}
              fontWeight={500}
            >
              {node.label}
            </text>
            <text
              x={x + 78}
              y={58}
              textAnchor="middle"
              fontFamily="var(--font-body)"
              fontSize="9.5"
              fill={isLast ? "var(--paper-raised)" : "var(--slate)"}
            >
              {node.sub}
            </text>
            {!isLast && (
              <g>
                <line
                  x1={x + 156}
                  y1={46}
                  x2={x + 180 - 6}
                  y2={46}
                  stroke="var(--rule-strong)"
                  strokeWidth={1}
                />
                <path
                  d={`M ${x + 174} 41 L ${x + 180} 46 L ${x + 174} 51`}
                  fill="none"
                  stroke="var(--rule-strong)"
                  strokeWidth={1}
                />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}
