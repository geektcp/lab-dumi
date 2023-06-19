import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Karinpoky',
  favicon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
  logo: '/static/logo/favicon.svg',
  // footer: 'Geektcp | Copyright © 2023-present',
  // github: 'https://github.com/geektcp',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config

  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ],
});
