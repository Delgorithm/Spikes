"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const CheckboxHeart = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			"peer h-8 w-8 shrink-0 rounded-full flex items-center justify-center border-none focus-visible:outline-none transition-transform duration-200 ease-in-out",
			className
		)}
		{...props}>
		<CheckboxPrimitive.Indicator
			className={cn(
				"flex items-center justify-center transition-transform duration-200 ease-in-out scale-100 peer-data-[state=checked]:scale-105"
			)}>
			<Heart className="h-8 w-8 bg-red-400" />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));
CheckboxHeart.displayName = CheckboxPrimitive.Root.displayName;

export { CheckboxHeart };
