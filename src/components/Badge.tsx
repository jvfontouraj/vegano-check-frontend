import React from 'react'
import { cva, cx, type VariantProps } from 'class-variance-authority'

const badge = cva(
  'rounded-full border px-3 py-1 text-white shadow-lg cursor-default',
  {
    variants: {
      intent: {
        vegan: ['border-teal-700', 'bg-teal-600'],
        notVegan: ['border-red-600', 'bg-red-500'],
      },
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badge> {}

export const Badge: React.FC<BadgeProps> = ({
  className,
  intent,
  ...props
}) => <span className={cx(badge({ intent, className }))} {...props} />
