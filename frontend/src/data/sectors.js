import {
  Building2,
  Train,
  Leaf,
  Zap,
  Activity,
  Home,
  Factory,
  Landmark,
  BarChart3,
} from "lucide-react";

export const sectors = [
  {
    slug: "dams",
    title: "Dams",
    description: "Advanced dam safety and performance analytics.",
    icon: Landmark,
  },
  {
    slug: "mining",
    title: "Mining",
    description: "Optimize mine operations with intelligent monitoring.",
    icon: Factory,
  },
  {
    slug: "transportation",
    title: "Transportation",
    description: "Smart transport infrastructure monitoring.",
    icon: Train,
  },
  {
    slug: "construction",
    title: "Construction",
    description: "Real-time construction insights and analytics.",
    icon: Building2,
  },
  {
    slug: "bridges",
    title: "Bridges",
    description: "Bridge monitoring and structural intelligence.",
    icon: Activity,
  },
  {
    slug: "energy",
    title: "Energy Infrastructure",
    description: "Intelligent energy project monitoring.",
    icon: Zap,
  },
  {
    slug: "environment",
    title: "Environmental Monitoring",
    description: "Track environmental changes and sustainability.",
    icon: Leaf,
  },
  {
    slug: "landslides",
    title: "Landslides & Disaster Management",
    description: "Early warning and disaster response analytics.",
    icon: BarChart3,
  },
  {
    slug: "pipelines",
    title: "Pipelines",
    description: "Pipeline monitoring and leak detection.",
    icon: Activity,
  },
  {
    slug: "smart-cities",
    title: "Smart Cities",
    description: "Integrated analytics for smart cities.",
    icon: Home,
  },
];