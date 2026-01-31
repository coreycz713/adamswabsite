# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Fixed
- Fixed broken `<a>` tag around logo image that closed immediately, orphaning the `<img>` element
- Replaced invalid `<btn>` element with valid `<button>` element
- Fixed broken HTML nesting: `<header>` now properly wraps the nav and closes before the hero section
- Removed extra unmatched `</div>` closing tag
- Replaced invalid `rel="none"` with `rel="noopener noreferrer"` on external link
- Replaced deprecated `<center>` tag with `<div style="text-align:center">`
- Removed redundant inline `style="list-style-type: none"` from `<ul>` elements (already defined in CSS)
- Wrapped bare `<button>` inside `<li>` for valid list markup
- Fixed malformed CSS comments (`*comment` -> `/* comment */`) in `.button`, `.button:hover`, and `.button:active` rules

### Changed
- Made `<nav class="info">` sticky with `position: sticky; top: 0; z-index: 1000`
- Restructured header/hero/nav HTML for correct document outline and nesting
- Renamed second `<nav>` class from `info` to `contact`

1/30/2026
- Updated Facebook links to `https://www.facebook.com/profile.php?id=100085262817084`
-Made top logo bigger from 15% to 30%
-Added ned Header h1 text for mission statement 
-added placeholders for the form