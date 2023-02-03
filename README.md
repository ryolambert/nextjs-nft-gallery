# NFT.com FE Hiring Challenge #2 - Ryo Lambert
NFT.com FE Coding Challenge: BAYC NFT Gallery

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ryolambert/nft-dot-com-fe-challenge">
    <img src="public/images/favicon-32x32.png" alt="Logo" width="80" height="80">
  </a>
  <a href="https://nft-dot-com-fe-challenge.vercel.app"/>
  <h2> Try out the live demo here.</h2>
  </a>

<h3 align="center">NFT Gallery</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/ryolambert/nft-dot-com-fe-challenge"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ryolambert/nft-dot-com-fe-challenge">View Demo</a>
    ·
    <a href="https://github.com/ryolambert/nft-dot-com-fe-challenge/issues">Report Bug</a>
    ·
    <a href="https://github.com/ryolambert/nft-dot-com-fe-challenge/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#Features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://nft-dot-com-fe-challenge.vercel.app/)

Challenge: Build a NFT gallery using alchemy NFT API for BAYC

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- FEATURES -->
## Features

- [x] The component should fetch the NFTs for the BAYC collection
- [x] The NFT image and name should be shown on the card
- [x] The gallery should be responsive
- [x] The gallery should have a filter for tokenId
- [x] The gallery should have auto-pagination when user scrolls to the bottom using [react virtualized](https://github.com/bvaughn/react-virtualized)

See the [open issues](https://github.com/ryolambert/nft-dot-com-fe-challenge/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Typescript][Typescript.ts]][Typescript-url]
* [![React][React.js]][React-url]
* [![Tailwind][TailwindCSS]][Tailwind-url]
* [![Next][Next.js]][Next-url]
  * Uses SSR rendering for backend api connections to the `alchemy sdk`.
  * Images are prefetched on the server and are both cached (5 min TTL) and optimized as webp files.
  * Custom data fetching hook `useNftGallery` using SSR hydrated client and server instances of `@tanstack/react-query`
* ***React-Virtualized*** Setup basic infinite gallery list that is able to fetch pages of nfts in increments of 100.
* Added a debouced filter component that also uses the same custom data hook to fetch exactly 1 matching NFT to the input and display in the gallery list.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install pnpm -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/ryolambert/nft-dot-com-fe-challenge.git
   ```
3. Install NPM packages
   ```sh
   npm install
   # or
   yarn
   # or
   pnpm i
   ```
4. Enter your Alchemy API key to `.env.local` or `.env`
   ```dotenv
   ALCHEMY_API_KEY=[Enter given api key]
   ```
5. Start the dev server locally, by running;
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Ryo Lambert - [@twitter_handle](https://twitter.com/twitter_handle) - hi@ryo.dev

Project Link: [https://github.com/ryolambert/nft-dot-com-fe-challenge](https://github.com/ryolambert/nft-dot-com-fe-challenge)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/app-screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind]
