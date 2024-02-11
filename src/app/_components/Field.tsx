export type FieldProps = {
  label: string;
  labelFor: string;
  as: (className: string) => React.ReactNode;
};

// <Field label="email" labelFor="email" as="(className) => <input className={className} name="" />" />

export const Field: React.FC<FieldProps> = ({
  label,
  labelFor,
  as,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-y-1" {...props}>
      <label
        className="font-semibold uppercase text-secondary text-sm"
        htmlFor={labelFor}
      >
        {label}
      </label>
      {as(
        `bg-lightGrey outline-none focus:border-secondary py-2 pl-4 text-body border border-solid border-[#E9E9E9]`
      )}
    </div>
  );
};
