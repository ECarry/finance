import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { useOpenTransaction } from "@/features/transactions/hooks/use-open-transaction";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";

type Props = {
  id: string;
  category: string | null;
  categoryId: string | null;
};

const CategoryColumn = ({ id, category, categoryId }: Props) => {
  const { onOpen: openCategory } = useOpenCategory();
  const { onOpen: OpenTransaction } = useOpenTransaction();

  const onClick = () => {
    if (categoryId) {
      openCategory(categoryId);
    } else {
      OpenTransaction(id);
    }
  };
  return (
    <div
      className={cn(
        "flex items-center hover:underline cursor-pointer",
        !category && "text-rose-500"
      )}
      onClick={onClick}
    >
      {!category && <TriangleAlert className="size-4 mr-2 shrink-0" />}
      {category || "UnCategorized"}
    </div>
  );
};

export default CategoryColumn;
