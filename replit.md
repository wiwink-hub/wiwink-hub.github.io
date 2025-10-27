# Shop.com - E-commerce Platform

## Overview
Ini adalah aplikasi e-commerce (toko online) yang dibangun menggunakan React, TypeScript, dan shadcn/ui. Proyek ini dimigrasikan dari Lovable ke lingkungan Replit dan dikonfigurasi untuk deployment ke GitHub Pages.

## Tujuan Proyek
- Platform belanja online lengkap dengan berbagai kategori produk
- Fitur keranjang belanja (cart) dan checkout
- Pencarian produk
- Manajemen akun pengguna
- Halaman deals/penawaran khusus

## Status Terkini
- ✅ Proyek berhasil dikonfigurasi untuk Replit (port 5000)
- ✅ Konfigurasi Vite untuk GitHub Pages sudah disetel (base: "/")
- ✅ GitHub Actions workflow sudah dibuat untuk auto-deployment
- ✅ Aplikasi berjalan dengan baik di lingkungan development

## Arsitektur Proyek

### Teknologi Utama
- **Frontend Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui (berbasis Radix UI)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: React Context API (CartContext)
- **Form Handling**: React Hook Form + Zod validation
- **Data Fetching**: TanStack Query

### Struktur Direktori
```
src/
├── components/       # Komponen React
│   ├── ui/          # shadcn/ui components
│   ├── Header.tsx   # Header aplikasi
│   └── ProductCard.tsx
├── contexts/        # React Context providers
│   └── CartContext.tsx
├── data/            # Data produk
│   └── products.ts
├── pages/           # Halaman-halaman aplikasi
│   ├── Home.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── Category.tsx
│   ├── ProductDetail.tsx
│   ├── Search.tsx
│   ├── Deals.tsx
│   ├── Orders.tsx
│   ├── Account.tsx
│   └── NotFound.tsx
└── lib/             # Utilities
    └── utils.ts
```

## Konfigurasi Deployment

### GitHub Pages
Proyek ini sudah dikonfigurasi untuk deployment otomatis ke GitHub Pages melalui GitHub Actions.

**File Konfigurasi:**
- `.github/workflows/deploy.yml` - Workflow untuk build dan deploy otomatis
- `vite.config.ts` - Base path disetel ke "/" untuk root directory

**Cara Deploy ke GitHub Pages:**
1. Push kode ke repository GitHub
2. Aktifkan GitHub Pages di repository settings
3. Pilih source: "GitHub Actions"
4. Workflow akan otomatis build dan deploy setiap push ke branch main

**Build Command:**
```bash
npm run build
```

Output build akan masuk ke folder `dist/` yang siap di-deploy ke GitHub Pages.

### Replit Development
**Command untuk development:**
```bash
npm run dev
```

Server akan berjalan di `http://0.0.0.0:5000/`

## Fitur Aplikasi

### Halaman Utama
- Hero section dengan CTA "Shop Now"
- Kategori produk
- Grid produk unggulan
- Navigasi kategori: Electronics, Furniture, Home & Kitchen, Sports & Outdoors, Today's Deals

### Fitur Keranjang
- Tambah/hapus produk
- Update jumlah item
- Kalkulasi total otomatis
- Persistent cart menggunakan Context API

### Pencarian & Filter
- Search bar di header
- Filter berdasarkan kategori
- Halaman detail produk

### User Account
- Halaman akun
- Riwayat pesanan
- Manajemen profil

## Perubahan dari Lovable ke Replit

### Konfigurasi yang Diubah:
1. **Port**: 8080 → 5000
2. **Host**: "::" → "0.0.0.0"
3. **Base Path**: Ditambahkan "/" untuk GitHub Pages
4. **Build Output**: Dikonfigurasi ke folder `dist/`

### File yang Ditambahkan:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `replit.md` - Dokumentasi proyek ini
- `.local/state/replit/agent/progress_tracker.md` - Tracking progress migrasi

## Preferensi User
- Bahasa komunikasi: Indonesia
- Target deployment: GitHub Pages
- Base path: Root directory (/)

## Tanggal Update Terakhir
27 Oktober 2025 - Konfigurasi awal untuk GitHub Pages dan Replit
