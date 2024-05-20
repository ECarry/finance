"use client";

import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";
import { useDeleteAccount } from "@/features/accounts/api/use-delete-account";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useConfirm } from "@/hooks/use-confirm";

const Actions = ({ id }: { id: string }) => {
  const { onOpen } = useOpenAccount();
  const [ConfirmDialog, confirm] = useConfirm(
    "Are you sure?",
    "This will permanently delete the account and all associated transactions."
  );

  const deleteMutation = useDeleteAccount(id);

  const onDelete = async () => {
    const ok = await confirm();

    if (ok) deleteMutation.mutate();
  };

  return (
    <>
      <ConfirmDialog />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="size-8 p-0">
            <MoreHorizontal className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem disabled={false} onClick={() => onOpen(id)}>
              <Edit className="size-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem disabled={false} onClick={onDelete}>
              <Trash className="size-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default Actions;
function useDeleteAccountMutation() {
  throw new Error("Function not implemented.");
}
