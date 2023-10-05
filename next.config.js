import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/game-completion-checklist',
};

export default withVanillaExtract(nextConfig);
