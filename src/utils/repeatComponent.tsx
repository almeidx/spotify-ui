export function repeatComponent(Component: React.ComponentType, count: number): React.ReactNode {
  return Array.from({ length: count }, (_, idx) => <Component key={idx} />);
}
