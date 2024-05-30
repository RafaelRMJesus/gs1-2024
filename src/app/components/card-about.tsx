
interface CardAboutProps {
  title: string
  desc: string
  icon: React.ReactNode
}

export const CardAbout = ({
  title,
  desc,
  icon
}: CardAboutProps) => {
  return (
    <div className="card w-full shadow-xl">
      <div className="card-body text-sky-900">
        <h2 className="card-title font-bold flex items-center">{icon}{title}</h2>
        <p className="text-justify text-sm">{desc}</p>
      </div>
    </div>
  );
};
