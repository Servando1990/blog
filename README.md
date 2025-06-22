# Servando Torres Blog

Personal blog built with MkDocs Material, featuring AI/ML content and technical writing.

## 🚀 Quick Start

### Using uv (recommended)
```bash
# Install uv (if not already installed)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install dependencies
uv sync

# Serve locally
uv run mkdocs serve

# Build site
uv run mkdocs build
```

### Using pip
```bash
# Install dependencies
pip install -r requirements-doc.txt

# Serve locally
mkdocs serve

# Build site
mkdocs build
```

## 📝 Adding Content

1. Create markdown files in `docs/writing/posts/`
2. Include proper frontmatter with date, authors, etc.
3. Run `python generate_desc.py` for AI-generated descriptions
4. Verify links with `python check_links.py`

## 🔧 Architecture

- **Framework**: MkDocs with Material theme
- **Deployment**: GitHub Pages via GitHub Actions
- **Content**: Markdown files in `docs/`
- **Blog**: Located in `docs/writing/posts/`

## 📚 Scripts

- `build_mkdocs.sh` - Build script
- `check_links.py` - Link verification
- `generate_desc.py` - AI description generation
- `generate_sitemap.py` - SEO sitemap generation
- `scripts/shortlinks.py` - Link shortening utility

## 🌐 Live Site

Visit: [https://servando.co](https://servando.co)

## 📄 License

See [LICENSE](LICENSE) file for details.