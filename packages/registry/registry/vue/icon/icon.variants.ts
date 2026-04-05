import { cva, type VariantProps } from "@hemia/lume-vue"

export const iconVariants = cva(
  "inline-flex shrink-0 items-center justify-center",
  {
    variants: {
      size: {
        default: "size-4",
        sm: "size-3",
        lg: "size-5",
        xl: "size-6",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export type IconVariants = VariantProps<typeof iconVariants>