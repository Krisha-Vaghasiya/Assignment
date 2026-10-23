<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Restore imported-site animation through the shared browser-only lifecycle module, keyed to the current page; this preserves captured markup while cleaning up observers and timelines on navigation.
- Content routes use the shared metadata helper with a distinct title and description so imported pages retain page-specific sharing information.
- Keep the Express/MongoDB service isolated in backend/ with its own dependencies because Lovable hosting cannot run a standalone Node server.
- Connect the external service through a same-origin allowlisted API proxy and public catalog server function; keep MongoDB credentials exclusively on the external host.
- Express owns admin authentication with HttpOnly cookies and database-verified active admin records; never grant access from browser state or public signup.
- Render connected content through imported-site visual classes and retain captured content only when the external catalog is unavailable.
