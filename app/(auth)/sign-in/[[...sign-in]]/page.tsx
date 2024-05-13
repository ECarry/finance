import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs";
import { UpdateIcon } from "@radix-ui/react-icons";

const SignInPage = () => {
  return (
    <div className="min-h-dvh w-full flex items-center justify-center">
      <ClerkLoaded>
        <SignIn path="/sign-in" />
      </ClerkLoaded>
      <ClerkLoading>
        <UpdateIcon className="animate-spin text-muted-foreground" />
      </ClerkLoading>
    </div>
  );
};

export default SignInPage;
