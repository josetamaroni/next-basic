'use client'
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, EnvelopeClosedIcon, UpdateIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function ButtonPage() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button disabled>disable</Button>
      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button>
        <EnvelopeClosedIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button disabled>
        <UpdateIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button asChild>
        <Link href="/login">Login</Link>
      </Button>
      <Button variant="secondary" onClick={ ()=> console.log('hola mundo') }>Onclick</Button>
      {/* Capitalize en el componente del boton \components\ui\button.tsx */}
      <Button variant='success'>Default</Button>

    </div>
  );
}