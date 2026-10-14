# Sylvia's website

Portable copy of the eight published Webnode pages, captured on October 14, 2026.

## Included

- Home, contact, account index, and five social account pages.
- Local images, styles, and the fonts used by this design. No Webnode server is needed to display them.
- Relative internal links, so the site can run on a custom domain or a GitHub project URL.
- Clickable social account links and a small standalone mobile menu.
- The contact template's sample identity, address, phone number, and example social profile were replaced with the existing official OnlyFans contact route.
- Webnode tracking, cookie controls, and its promotional footer were removed.

The original Webnode site has not been changed. Original article paths are retained for compatibility. Webnode's visual editor and backend are not included. Future edits need to be made in these files, then published to the hosting repository.

## Publish

The website files are uploaded to https://github.com/hilliantrent/sylviayasx on the main branch.

The requested host is GitHub Pages, using the same CNAME approach as hilliantrent/hilliantrent.github.io. The root CNAME file contains `sylviakatxo.com`.

To enable publishing, open https://github.com/hilliantrent/sylviayasx/settings/pages and select **Deploy from a branch > main > /(root)**, then Save. Under Custom domain, confirm `sylviakatxo.com` and Save if needed.

At the domain provider, point the apex (`@`) A records to GitHub Pages:

- 185.199.108.153
- 185.199.109.153
- 185.199.110.153
- 185.199.111.153

Point a `www` CNAME record to `hilliantrent.github.io`, with no repository path. Preserve unrelated mail and verification records. Enable Enforce HTTPS in Pages after the domain and certificate checks complete.

As of the setup check on October 14, 2026, GitHub Pages was not enabled on this repository. The requested domain sylviakatxo.com had no DNS record, and the .com registry RDAP lookup returned 404 (not found), so it appears not to be registered yet. Domain registration and DNS setup are still needed. No DNS records have been changed.

## Edit links

Open the relevant account page's `index.html`. Edit both the visible account name and its `href` URL. The five account pages are:

- OnlyFans: `l/sylvias-official-onlyfans-account/index.html`
- Snapchat: `l/sylvias-official-snapchat-accounts/index.html`
- Instagram: `l/justin-leytons-first-solo-album/index.html`
- X: `l/jesse-cayden-2026-tour-dates/index.html`
- TikTok: `l/divine-worlds-announced-for-musicfest/index.html`

The last three paths came from the original Webnode template. They can be renamed in a later edit if all incoming links are updated.

## Verification

All eight HTML pages and local image, font, stylesheet, and script references were checked. The external social destinations were copied from the published page or constructed from its stated handles; account availability and ownership were not independently verified. A browser preview could not start in the preparation environment, so desktop and mobile appearance still need a visual check before switching the live domain. This package is not a claim that hosting or domain setup is complete.

## References

- Webnode export limitations: https://www.webnode.com/support/editor-and-content-faq/
- GitHub Pages usage limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- GitHub custom domains: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages
- Cloudflare Pages: https://www.cloudflare.com/products/pages/
- Cloudflare custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/

Existing notices in the downloaded template styles and fonts are retained.
