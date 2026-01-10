import { Badge } from "@/components/ui/badge";

interface AboutInterestsProps {
  interests?: string[];
}

export default function AboutInterests({ interests }: AboutInterestsProps) {
  if (!interests || interests.length === 0) return null;

  return (
    <section className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-2xl font-semibold mb-6">Interests</h2>

      <div className="flex flex-wrap gap-3">
        {interests.map((interest, index) => (
          <Badge key={index} variant="secondary" className="text-sm">
            {interest}
          </Badge>
        ))}
      </div>
    </section>
  );
}