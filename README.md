# GUARDIAN PBVS / OrgGuard

โปรเจกต์นี้เป็น source code เต็มของเว็บเวอร์ชันอัปเกรด พร้อมหน้า Pricing, Risk Database, OrgGuard และ Signup Popup โดยใช้ React + Vite + Express

## Deploy ด้วย GitHub Actions

1. สร้าง GitHub repository ใหม่
2. แตก ZIP นี้ แล้วอัปโหลดไฟล์ทั้งหมดด้วย Git หรือ GitHub Desktop (ไม่ใช่ปุ่ม Upload files ที่จำกัด 100 ไฟล์)
3. Push ไป branch `main`
4. ไปที่ **Settings → Pages**
5. ที่ **Build and deployment** เลือก **Source: GitHub Actions**
6. รอ workflow ชื่อ **Deploy Guardian to GitHub Pages** ทำงานเสร็จ

หลังจากนั้นทุกครั้งที่ push เข้า `main` GitHub Actions จะ build และ deploy ให้อัตโนมัติ

เว็บไซต์ที่เผยแพร่แล้ว: https://noobhacker404.github.io/guardian/

เมื่อต้องการอัปเดต data ให้แก้ไฟล์ใน `client/src/data/` จากนั้น commit และ push ไปที่ `main` ระบบจะ deploy เวอร์ชันใหม่ให้อัตโนมัติ

## Local commands

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

## หมายเหตุ

GitHub Pages deploy ได้เฉพาะ frontend แบบ static ดังนั้นหน้าเว็บและ demo data ใช้งานได้ แต่ backend, authentication และ database จริงยังไม่ทำงานบน GitHub Pages หากต้องการฟีเจอร์เหล่านี้ต้องใช้ Node-capable host เช่น Render, Railway หรือ Vercel

โปรเจกต์นี้ใช้ hash routing (`#/pricing`, `#/search`, `#/orgguard`) เพื่อให้ route ทำงานบน GitHub Pages ได้
