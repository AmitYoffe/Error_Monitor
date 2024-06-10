export type StatusType = 'operational' | 'unstable' | 'no-connection';

export type ToolCategory = {
    // icon: React.ReactNode;
    tools: { [toolName: string]: StatusType };
  };
  
  export type ToolsCollectionJson = {
    [category: string]: ToolCategory;
  };
  