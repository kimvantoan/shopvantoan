import React from "react";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Share = () => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
  };
  return (
    <DialogContent className="sm:max-w-md">
      <DialogHeader>
        <DialogTitle>Chia sẻ</DialogTitle>
        <DialogDescription>
        Bất kỳ ai có liên kết này đều có thể xem được.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center space-x-2">
        <div className="grid flex-1 gap-2">
          <Label htmlFor="link" className="sr-only">
            Link
          </Label>
          <Input id="link" defaultValue={window.location.href} readOnly />
        </div>
        <Button type="submit" onClick={handleCopy} size="sm" className="px-3">
          <span className="sr-only">Copy</span>
          <Copy />
        </Button>
      </div>
      <DialogFooter className="sm:justify-start">
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Đóng
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default Share;
