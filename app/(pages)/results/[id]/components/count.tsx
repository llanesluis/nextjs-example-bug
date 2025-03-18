import { getCount } from "../queries";

export default function Count() {
  const count = getCount();
  return <div>Count: {count}</div>;
}
