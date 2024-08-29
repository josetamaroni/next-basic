import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Page() {
  return (
    <div className="h-[500px] flex justify-center items-center gap-2">
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-black-400">@Shadcn/ui</p>
    </div>
  );
}