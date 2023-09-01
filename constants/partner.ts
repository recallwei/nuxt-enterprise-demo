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
  }
]

export const otherPartners = [
  { label: '常州贝斯特化工有限公司' },
  { label: '大连东都鹏致物流有限公司' },
  { label: '陕西大田国际货运有限公司' },
  { label: '陕西和致隆供应链管理有限公司' },
  { label: '锦州佑鑫石英科技有限公司' },
  { label: '锦州田甜运输有限公司' },
  { label: '济宁远志运输有限公司' },
  { label: '无锡市宇润物流有限公司' },
  { label: '广德金辉新材科技有限公司' },
  { label: '新疆石河子丰尔达物流有限公司' },
  { label: '山东六通供应链管理有限公司' },
  { label: '安徽恒元货物运输有限公司' },
  { label: '吉林省中运恒达物流有限公司' },
  { label: '中通供应链管理有限公司' },
  { label: '济宁八骏物流有限公司' },
  { label: '常州市斌宇运输有限公司' },
  { label: '益阳汇通天下快运有限公司' }
]
