import { useOpenAccount } from "@/features/accounts/hooks/use-open-account";

type Props = {
  account: string;
  accountId: string;
};

const AccountColumn = ({ account, accountId }: Props) => {
  const { onOpen: onOpenAccount } = useOpenAccount();

  const onClick = () => {
    onOpenAccount(accountId);
  };
  return (
    <div
      className="flex items-center hover:underline cursor-pointer"
      onClick={onClick}
    >
      {account}
    </div>
  );
};

export default AccountColumn;
