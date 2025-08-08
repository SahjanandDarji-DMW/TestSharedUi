import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export function DPopOver({
  buttonText = "Popover",
  children,
  placement = "bottom",
  className = "",
  buttonProps = {},
  popoverProps = {},
}) {
  return (
    <Popover placement={placement} {...popoverProps}>
      <PopoverHandler>
        <Button
          {...buttonProps}
          className={`bg-gray-[#F2F2F2] text-white font-semibold px-4 py-2 rounded-md shadow-md hover:opacity-80 border border-white transition duration-300 ${
            buttonProps.className || ""
          }`}
        >
          {buttonText}
        </Button>
      </PopoverHandler>
      <PopoverContent
        className={`bg-gray-[#F2F2F2] backdrop-blur-md opacity-60 text-white font-semibold rounded-lg shadow-lg p-4 ${className}`}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
}
