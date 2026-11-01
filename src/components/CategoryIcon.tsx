import React from 'react';
import {
  Globe,
  Building2,
  UtensilsCrossed,
  Compass,
  FlaskConical,
  Landmark,
  PawPrint,
  Sparkles,
  Trophy,
  Cpu,
  MapPin,
  Calculator,
  Activity,
  Moon,
  CalendarCheck,
  Clapperboard,
  HelpCircle,
  LucideProps
} from 'lucide-react';

interface CategoryIconProps extends LucideProps {
  name: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ name, ...props }) => {
  switch (name) {
    case 'Globe':
      return <Globe {...props} />;
    case 'Building2':
      return <Building2 {...props} />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed {...props} />;
    case 'Compass':
      return <Compass {...props} />;
    case 'FlaskConical':
      return <FlaskConical {...props} />;
    case 'Landmark':
      return <Landmark {...props} />;
    case 'PawPrint':
      return <PawPrint {...props} />;
    case 'Sparkles':
      return <Sparkles {...props} />;
    case 'Trophy':
      return <Trophy {...props} />;
    case 'Cpu':
      return <Cpu {...props} />;
    case 'MapPin':
      return <MapPin {...props} />;
    case 'Calculator':
      return <Calculator {...props} />;
    case 'Activity':
      return <Activity {...props} />;
    case 'Moon':
      return <Moon {...props} />;
    case 'CalendarCheck':
      return <CalendarCheck {...props} />;
    case 'Clapperboard':
      return <Clapperboard {...props} />;
    default:
      return <HelpCircle {...props} />;
  }
};
