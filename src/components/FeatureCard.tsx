
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="card h-full flex flex-col items-start hover:shadow-lg transition-shadow">
      <div className="inline-flex items-center justify-center p-3 bg-dewey-tan/50 rounded-xl text-dewey-green mb-4">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
