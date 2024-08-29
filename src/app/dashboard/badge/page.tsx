import { Badge } from "@/components/ui/badge"

export default function BadgePage() {
  return (
    <div className="flex gap-2">
      <Badge>Badge</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="destructive">Destructive</Badge>

      <Badge  variant="info">info</Badge>
      <Badge capitalize variant="success">success</Badge>
    </div>
  );
}