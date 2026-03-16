import { MessageSquare, TrendingUp, Pencil, RefreshCw, CheckCircle } from 'lucide-react'

export const processSteps = [
  {
    number: 1,
    title: 'Konsultasi Awal',
    duration: '1-2 Hari',
    icon: MessageSquare,
    description: 'Kami memulai dengan memahami kebutuhan, tujuan, dan visi Anda melalui diskusi mendalam.',
    details: [
      'Diskusi kebutuhan dan tujuan proyek',
      'Analisis kompetitor dan target audience',
      'Penentuan scope, timeline, dan budget',
      'Penandatanganan kontrak dan pembayaran awal'
    ]
  },
  {
    number: 2,
    title: 'Riset & Strategi',
    duration: '2-3 Hari',
    icon: TrendingUp,
    description: 'Tim kami melakukan riset mendalam tentang industri, tren desain terkini, dan analisis kompetitor.',
    details: [
      'Riset industri dan analisis kompetitor',
      'Pengembangan moodboard dan konsep visual',
      'Penyusunan strategi kreatif',
      'Presentasi arah kreatif untuk disetujui'
    ]
  },
  {
    number: 3,
    title: 'Desain Draft',
    duration: '3-7 Hari',
    icon: Pencil,
    description: 'Berdasarkan strategi yang telah disetujui, kami mulai membuat draft desain.',
    details: [
      'Pembuatan 2-3 konsep desain awal',
      'Presentasi draft untuk review awal',
      'Revisi minor berdasarkan feedback awal',
      'Pemilihan satu konsep untuk dikembangkan'
    ]
  },
  {
    number: 4,
    title: 'Pengembangan & Revisi',
    duration: '5-10 Hari',
    icon: RefreshCw,
    description: 'Kami mengembangkan konsep terpilih menjadi desain yang lebih detail dan lengkap.',
    details: [
      'Pengembangan desain secara detail',
      '3 putaran revisi termasuk dalam paket',
      'Komunikasi rutin untuk update progress',
      'Presentasi desain yang sudah direvisi'
    ]
  },
  {
    number: 5,
    title: 'Finalisasi & Delivery',
    duration: '1-3 Hari',
    icon: CheckCircle,
    description: 'Setelah semua revisi disetujui, kami melakukan final check dan mempersiapkan file untuk delivery.',
    details: [
      'Final quality check dan proofreading',
      'Penyiapan file dalam berbagai format',
      'Panduan penggunaan (jika diperlukan)',
      'Delivery file dan pembayaran akhir'
    ]
  }
]
