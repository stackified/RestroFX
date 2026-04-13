"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface WorkflowBuilderCardProps {
  imageUrl: string;
  title: string;
  description: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const WorkflowBuilderCard = ({
  imageUrl,
  title,
  description,
  className,
  onClick,
}: WorkflowBuilderCardProps) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const detailVariants = {
    hidden: { opacity: 0, height: 0, marginTop: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      marginTop: "1.25rem",
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={cn("w-full cursor-pointer group", className)}
    >
      <Card className="overflow-hidden rounded-[2.5rem] bg-white/40 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:border-primary/30">
        {/* Image Section */}
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>

        <div className="p-8 pb-10">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl font-bold font-heading text-card-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <div className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full border border-border transition-all duration-500",
              isHovered ? "bg-primary text-white border-primary shadow-lg shadow-primary/30 rotate-180" : "bg-transparent text-muted-foreground"
            )}>
              <ChevronDown size={20} />
            </div>
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                key="details"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={detailVariants}
                className="overflow-hidden"
              >
                <div className="text-muted-foreground leading-relaxed text-[15px] font-medium border-l-2 border-primary/50 pl-6 py-1">
                  {description}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  );
};
