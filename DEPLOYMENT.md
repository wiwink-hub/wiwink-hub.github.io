# Panduan Deploy ke GitHub Pages

## Langkah-Langkah Deployment

### 1. Persiapan Repository GitHub

1. Buat repository baru di GitHub atau gunakan repository yang sudah ada
2. Push kode proyek ini ke repository:

```bash
git init
git add .
git commit -m "Initial commit - Shop.com e-commerce"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

### 2. Aktifkan GitHub Pages

1. Buka repository di GitHub
2. Klik **Settings** (tab di atas)
3. Pilih **Pages** di menu kiri
4. Di bagian **Source**, pilih:
   - Source: **GitHub Actions**
5. Simpan pengaturan

### 3. Deployment Otomatis

Setelah setup di atas, setiap kali Anda push ke branch `main`, GitHub Actions akan otomatis:
1. Install dependencies
2. Build aplikasi (`npm run build`)
3. Deploy ke GitHub Pages

Anda bisa memantau proses deployment di tab **Actions** di repository GitHub.

### 4. Akses Website

Setelah deployment berhasil, website Anda akan tersedia di:
```
https://USERNAME.github.io/REPO-NAME/
```

**CATATAN:** Jika Anda menggunakan custom domain atau repository dengan nama `USERNAME.github.io`, website akan tersedia di:
```
https://USERNAME.github.io/
```

## Konfigurasi Base Path

### Untuk Repository Biasa
Jika repository Anda bukan `USERNAME.github.io`, ubah `vite.config.ts`:

```typescript
export default defineConfig(({ mode }) => ({
  base: "/REPO-NAME/",  // Ganti dengan nama repository Anda
  // ... konfigurasi lainnya
}));
```

### Untuk User/Organization Pages
Jika repository Anda bernama `USERNAME.github.io`, gunakan:

```typescript
export default defineConfig(({ mode }) => ({
  base: "/",  // Sudah disetel dengan benar
  // ... konfigurasi lainnya
}));
```

## Testing Local Build

Untuk test build production secara lokal sebelum deploy:

```bash
# Build aplikasi
npm run build

# Preview build
npm run preview
```

Preview akan tersedia di `http://localhost:4173/`

## Troubleshooting

### Halaman 404 setelah Deploy
- Pastikan base path di `vite.config.ts` sudah benar
- Pastikan GitHub Pages source sudah disetel ke "GitHub Actions"

### Build Gagal
- Cek log di tab Actions di GitHub
- Pastikan semua dependencies terinstall dengan benar
- Cek apakah ada error di kode TypeScript

### Assets Tidak Muncul
- Pastikan base path sudah benar di `vite.config.ts`
- Assets harus di-import dengan benar menggunakan Vite asset handling

## Custom Domain (Opsional)

Untuk menggunakan custom domain:

1. Tambahkan file `public/CNAME` dengan isi domain Anda:
```
www.yourdomain.com
```

2. Konfigurasi DNS di provider domain Anda:
```
Type: CNAME
Name: www
Value: USERNAME.github.io
```

3. Update `base` di `vite.config.ts` menjadi `"/"`

## Maintenance

### Update Dependencies
```bash
npm update
```

### Rebuild & Redeploy
Cukup push perubahan ke branch main:
```bash
git add .
git commit -m "Update: deskripsi perubahan"
git push
```

GitHub Actions akan otomatis rebuild dan redeploy.
