import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CircleUserRound } from "lucide-react";

function AuthDialog() {
  return (
    <Dialog>
      <DialogTrigger className="justify-self-end text-sm sm:text-base ml-auto mr-1 mt-0.5 sm:mr-2 sm:mt-1.5 hover:text-underline text-muted-foreground transition ease-in-out duration-500 hover:text-black">
        <CircleUserRound
          className="text-muted-foreground hover:text-black transition ease-in-out duration-500"
          strokeWidth={1.5}
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AuthDialog;
