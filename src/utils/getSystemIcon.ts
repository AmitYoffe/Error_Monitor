import React from 'react';
import {
  DownloadIcon,
  SparklesIcon,
  DatabaseIcon,
  SearchIcon,
  SquareGantt,
} from 'lucide-react';

export default function getSystemIcon(systemName: string): JSX.Element {
  // React.createElement is used to create the JSX elements, ensuring that TypeScript recognizes these as values instead of types
  const iconSrcJson: { [key: string]: JSX.Element } = {
    analyzing: React.createElement(SearchIcon, { className: 'h-5 w-5' }),
    collecting: React.createElement(DownloadIcon, { className: 'h-5 w-5' }),
    enrichment: React.createElement(SparklesIcon, { className: 'h-5 w-5' }),
    databases: React.createElement(DatabaseIcon, { className: 'h-5 w-5' }),
    default: React.createElement(SquareGantt, { className: 'h-5 w-5' }),
  };

  const icon = iconSrcJson[systemName.toLowerCase()] || iconSrcJson.default;
  return icon;
}
