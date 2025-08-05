// src/components/GlassButton.jsx
import { Button } from "@material-tailwind/react";

export const GlassButton = ({ children }) => (
  <Button
    className="glass text-white hover:bg-white/20 transition p-3"
    ripple={true}
  >
    {children}
  </Button>
);
