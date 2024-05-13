import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { UpdateIcon } from "@radix-ui/react-icons";

const SignUpPage = () => {
  return (
    <div className="min-h-dvh w-full flex items-center justify-center">
      <ClerkLoaded>
        <SignUp path="/sign-up" />
      </ClerkLoaded>
      <ClerkLoading>
        <UpdateIcon className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </div>
  );
};

export default SignUpPage;
