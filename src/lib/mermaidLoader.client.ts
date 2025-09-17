async function loadAndRunMermaid(rootSelector: string = '.content .mermaid'): Promise<void> {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const mermaidNodes = document.querySelectorAll<HTMLElement>(rootSelector);
  if (mermaidNodes.length === 0) return;

  const { default: mermaid } = await import('mermaid');
  mermaid.initialize({ startOnLoad: false });
  await mermaid.run({ nodes: Array.from(mermaidNodes) });
}

void loadAndRunMermaid();


