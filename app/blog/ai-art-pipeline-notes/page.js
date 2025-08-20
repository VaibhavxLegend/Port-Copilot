export const metadata = { title: 'Building an AI Art Pipeline: Notes and Lessons — Vaibhav Jain' };

export default function Post() {
  return (
    <article className="prose prose-slate dark:prose-invert max-w-none">
      <h1>Building an AI Art Pipeline: Notes and Lessons</h1>
      <p>
        Over the past months I experimented with end‑to‑end pipelines for AI art generation—balancing quality,
        throughput, and cost. This post captures pragmatic notes for future me (and maybe you).
      </p>

      <h2>Goals</h2>
      <ul>
        <li>High signal‑to‑noise: minimize unusable generations.</li>
        <li>Fast iteration: prompt templates and parameter sets.</li>
        <li>Simple curation: metadata and visual review workflow.</li>
      </ul>

      <h2>Workflow</h2>
      <ol>
        <li><strong>Prompt design</strong> — Start from reference works and distill style/subject constraints.</li>
        <li><strong>Model selection</strong> — Prioritize models with consistent style controls and good negative prompts.</li>
        <li><strong>Batching</strong> — Generate small batches, score, then expand good seeds.</li>
        <li><strong>Scoring</strong> — Use aesthetic/NSFW classifiers and CLIP similarity to prune.</li>
        <li><strong>Curation</strong> — Keep rich metadata (seed, params, prompt) to reproduce and iterate.</li>
      </ol>

      <h2>Tips</h2>
      <ul>
        <li>Use embeddings + vector search to cluster similar outputs and select diverse sets.</li>
        <li>Cache intermediate assets; re‑use latents where supported to save time.</li>
        <li>Create a style guide with do/don’t examples for consistent results.</li>
      </ul>

      <h2>What’s next</h2>
      <p>
        I’m exploring lightweight on‑device upscalers and pose/edge guidance to better control composition while
        keeping latency low.
      </p>
    </article>
  );
}
