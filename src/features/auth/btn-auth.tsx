"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

type BtnAuthProps = {
  source: string;
  alt: string;
  name: string;
  provider: string;
};

export default function BtnAuth({ source, alt, name, provider }: BtnAuthProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const queryClient = useQueryClient();

  const signInMutation = useMutation({
    mutationFn: async () => {
      await signIn(provider);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["session"] });
    },
  });

  const handleSignIn = () => {
    signInMutation.mutate();
  };

  if (status === "authenticated" && session?.user.id) {
    router.push(`/component-library/dashboard/${session.user.id}/library`);
  }

  return (
    <Button
      className="flex items-center gap-2 px-3 py-2 bg-white"
      onClick={handleSignIn}
    >
      <div className="relative w-6 h-6">
        <Image
          src={`/component-library/${source}`}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <p className="text-sm font-medium bg-gradient-to-tl from-[#1b1b1b] to-[#707070] bg-clip-text text-transparent">
        {name}
      </p>
    </Button>
  );
}
