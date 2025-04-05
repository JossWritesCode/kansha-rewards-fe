function FeatureItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="flex items-start gap-6">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-busyBerry">
        {icon}
      </div>
      <div>
        <h3 className="flex items-center gap-1 text-xl font-semibold text-brand-black">{title}</h3>
        <p className="mt-1 text-base font-medium text-brand-boulder">{description}</p>
      </div>
    </div>
  );
}

export default FeatureItem;
