import type { Teardown } from "@/content/teardowns";
import Reveal from "./Reveal";
import TeardownCard from "./TeardownCard";

type Props = {
  items: Teardown[];
};

export default function TeardownList({ items }: Props) {
  return (
    <div className="space-y-10">
      {items.map((teardown, index) => (
        <Reveal key={teardown.slug} delay={index * 0.08}>
          <TeardownCard teardown={teardown} />
        </Reveal>
      ))}
    </div>
  );
}
