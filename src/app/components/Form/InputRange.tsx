import { ForwardRefRenderFunction, forwardRef } from 'react'

interface IInputRange {
  title: string
  className?: string
}

export const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  IInputRange
> = ({ title, className, ...rest }, ref) => {
  return (
    <div className={`mb-4 text-blue font-medium ${className}`}>
      <label>{title}</label>
      <input
        className="w-full px-6 py-1.5 bg-white rounded-lg border border-teal-400"
        type="range"
        min={0}
        max={100}
        ref={ref}
        {...rest}
      />
    </div>
  )
}

export const InputRange = forwardRef(InputBase)
