"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn("border-b-2 border-dashed border-[#1B1B1B]", className)}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
		isActive?: boolean;
	}
>(({ className, children, isActive, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				"flex flex-1 items-center justify-between py-2 text-sm font-medium transition-all",
				"text-[#7E7F81] stroke-[#7E7F81]",
				isActive && "text-[#FFFFFF] stroke-[#FFFFFF]",
				"data-[state=open]:text-[#FFFFFF] data-[state=open]:stroke-[#FFFFFF]",
				className
			)}
			{...props}>
			{children}
			<ChevronDownIcon
				className={cn(
					"h-6 w-6 shrink-0",
					"data-[state=open]:rotate-90",
					isActive && "text-[#FFFFFF]"
				)}
			/>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(
			"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		)}
		{...props}>
		<div className={cn("pb-4 pt-0 flex h-full", className)}>
			<div className="border-l-2 border-accent-foreground border-gradient-to-r from-[#1D1D1D] to-[#838383] h-full ">
				<div className="pl-4 w-full">{children}</div>
			</div>
		</div>
	</AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
