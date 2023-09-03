declare module "intersection-observer" {
	const IntersectionObserver: {
		new (
			callback: IntersectionObserverCallback,
			options?: IntersectionObserverInit
		): IntersectionObserver;
		prototype: IntersectionObserver;
	};
	interface IntersectionObserverCallback {
		(
			entries: IntersectionObserverEntry[],
			observer: IntersectionObserver
		): void;
	}
	interface IntersectionObserverEntry {
		readonly boundingClientRect: DOMRectReadOnly;
		readonly intersectionRatio: number;
		readonly intersectionRect: DOMRectReadOnly;
		readonly isIntersecting: boolean;
		readonly rootBounds: DOMRectReadOnly | null;
		readonly target: Element;
		readonly time: number;
	}
	interface IntersectionObserver {
		readonly root: Element | null;
		readonly rootMargin: string;
		readonly thresholds: ReadonlyArray<number>;
		disconnect(): void;
		observe(target: Element): void;
		takeRecords(): IntersectionObserverEntry[];
		unobserve(target: Element): void;
	}
}
