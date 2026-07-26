import "@testing-library/jest-dom/vitest";

// jsdom has no IntersectionObserver — framer-motion's useInView/whileInView
// need a stub so components using it don't throw during tests. Instances are
// tracked on `global.__intersectionObserverInstances` so tests can manually
// fire a callback to simulate an element scrolling into view.
global.__intersectionObserverInstances = [];

class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
    global.__intersectionObserverInstances.push(this);
  }
  observe = () => {};
  unobserve = () => {};
  disconnect = () => {};
}

global.IntersectionObserver = MockIntersectionObserver;
