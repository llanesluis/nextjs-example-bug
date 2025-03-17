import { getCount } from "../actions";

export default function Count() {
  const count = getCount();
  return <div>Count: {count}</div>;
}
