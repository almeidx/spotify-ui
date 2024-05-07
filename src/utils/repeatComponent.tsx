import type { ComponentType, ReactNode } from "react";

export function repeatComponent(Component: ComponentType, count: number): ReactNode {
	// biome-ignore lint/suspicious/noArrayIndexKey: Intended
	return Array.from({ length: count }, (_, idx) => <Component key={idx} />);
}
