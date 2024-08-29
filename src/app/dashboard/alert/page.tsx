import { RocketIcon } from "@radix-ui/react-icons";

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export default function Page() {
  return (
    <div className="grid gap-3">
      <Alert variant="default">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>

      <Alert variant="success">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </div>
  );
}