import type { VideoSource } from '@/lib/types';

// Default predefined video sources - Real Chinese video APIs
// 这里的默认源作为备用方案，主要依赖订阅源
export const DEFAULT_SOURCES: VideoSource[] = [
  {
    id: 'feifan',
    name: '非凡资源',
    baseUrl: 'http://ffzy5.tv/api.php/provide/vod',
    searchPath: '',
    detailPath: '',
    enabled: true,
    priority: 1,
    group: 'normal',
  },
  {
    id: 'wolong',
    name: '卧龙资源',
    baseUrl: 'https://wolongzyw.com/api.php/provide/vod',
    searchPath: '',
    detailPath: '',
    enabled: true,
    priority: 2,
    group: 'normal',
  },
  {
    id: 'zuida',
    name: '最大资源',
    baseUrl: 'https://api.zuidapi.com/api.php/provide/vod',
    searchPath: '',
    detailPath: '',
    enabled: true,
    priority: 3,
    group: 'normal',
  }
  // 更多源将通过订阅源自动添加
];
