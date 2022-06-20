export const pagesPath = {
  "$404": {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },
  "blog": {
    $url: (url?: { hash?: string }) => ({ pathname: '/blog' as const, hash: url?.hash })
  },
  "buchungs_anfrage": {
    $url: (url?: { hash?: string }) => ({ pathname: '/buchungs-anfrage' as const, hash: url?.hash })
  },
  "erfolg": {
    $url: (url?: { hash?: string }) => ({ pathname: '/erfolg' as const, hash: url?.hash })
  },
  "faq": {
    $url: (url?: { hash?: string }) => ({ pathname: '/faq' as const, hash: url?.hash })
  },
  "kontakt": {
    $url: (url?: { hash?: string }) => ({ pathname: '/kontakt' as const, hash: url?.hash })
  },
  "mietbedingungen": {
    $url: (url?: { hash?: string }) => ({ pathname: '/mietbedingungen' as const, hash: url?.hash })
  },
  "photovoltaikanlage": {
    $url: (url?: { hash?: string }) => ({ pathname: '/photovoltaikanlage' as const, hash: url?.hash })
  },
  "schulung_elektromobilitaet": {
    $url: (url?: { hash?: string }) => ({ pathname: '/schulung-elektromobilitaet' as const, hash: url?.hash })
  },
  "tesla": {
    "model_3_long_range_mieten": {
      $url: (url?: { hash?: string }) => ({ pathname: '/tesla/model-3-long-range-mieten' as const, hash: url?.hash })
    },
    "model_3_mieten": {
      $url: (url?: { hash?: string }) => ({ pathname: '/tesla/model-3-mieten' as const, hash: url?.hash })
    },
    "model_3srmieten": {
      $url: (url?: { hash?: string }) => ({ pathname: '/tesla/model-3srmieten' as const, hash: url?.hash })
    },
    "model_x_mieten": {
      $url: (url?: { hash?: string }) => ({ pathname: '/tesla/model-x-mieten' as const, hash: url?.hash })
    }
  },
  "tesla_langzeitmiete": {
    $url: (url?: { hash?: string }) => ({ pathname: '/tesla-langzeitmiete' as const, hash: url?.hash })
  },
  "tesla_supercharger_leonberg": {
    $url: (url?: { hash?: string }) => ({ pathname: '/tesla-supercharger-leonberg' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
