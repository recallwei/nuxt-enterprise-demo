interface ImageItem {
  label: string
  src: string
  width?: string
  height?: string
  url?: string
}

export const partners: ImageItem[] = [
  { label: '中国外运', src: useAsset('/img/home/partner/sinotrans.png') },
  {
    label: '京东物流',
    src: useAsset('/img/home/partner/JDL.png'),
    url: 'https://www.jdl.com/'
  },
  { label: '跨越速运', src: useAsset('/img/home/partner/kuayue_Express.png') },
  {
    label: '顺丰速运',
    src: useAsset('/img/home/partner/SF_Express.png'),
    url: 'https://www.sf-express.com/chn/sc'
  },
  { label: '京东物流', src: useAsset('/img/home/partner/JDL.png') },
  { label: '京东物流', src: useAsset('/img/home/partner/JDL.png') },
  { label: '京东物流', src: useAsset('/img/home/partner/JDL.png') },
  { label: '京东物流', src: useAsset('/img/home/partner/JDL.png') }
]
